import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';


//lembra de volta para o .env
const API_URL = import.meta.env.VITE_API_URL;
//const API_URL = '/api'; // Manter proxy para evitar CORS
const AUTH_COOKIE_NAME = 'AspNetCore.Identity.Application'; // Nome exato visto no Storage

// Cliente Axios com configuração para trabalhar com cookies
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Crucial: permite que o Axios envie e receba cookies
});

// Funções para gerenciar cookies de autenticação

const getToken = (): string | undefined => {
  try {
    const cookies = document.cookie.split(';');
    
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      
      // Comparação exata (case-sensitive) com o nome do cookie
      if (name === AUTH_COOKIE_NAME) {
        return decodeURIComponent(value); // Importante para valores codificados
      }
    }
    
    return undefined;
  } catch (error) {
    console.error('Error reading auth cookie:', error);
    return undefined;
  }
};

const removeToken = (): void => {
  // Remover cookies de autenticação
  document.cookie = `${AUTH_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  
  // Também remover do localStorage se estiver sendo usado
  localStorage.removeItem('token');
  localStorage.removeItem('auth_token');
};

// Interceptor para adicionar o token nas requisições, se necessário
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Os cookies são enviados automaticamente graças ao withCredentials: true
  return config;
});

// Funções de autenticação
const authService = {
  _cachedAuthState: false, // Salva o estado em memória durante a sessão
  
  async login(email: string, password: string): Promise<any> {
    try {
      const response = await api.post('/identity/login?useCookies=true', { 
        email, 
        password 
      });
      
      this._cachedAuthState = true; // Atualiza o estado em memória
      return response.data;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  },
  
  async logout(): Promise<void> {
    try {
      await api.post('/identity/logout');
      console.log('Logout bem-sucedido no servidor');
    } catch (error) {
      console.error('Erro ao fazer logout no servidor:', error);
    }
    
    this._cachedAuthState = false; // Atualiza o estado em memória
    removeToken();
  },
  
  async isAuthenticated(): Promise<boolean> {
    try {
      // Tenta fazer uma requisição a qualquer endpoint protegido que exija autenticação
      // Altere para um endpoint que você sabe que existe na sua API
      await api.get('identity/manage/info'); 
      
      this._cachedAuthState = true; // Atualiza o cache
      return true;
    } catch (error: any) {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        this._cachedAuthState = false;
        return false;
      }
      
      // Se for outro tipo de erro, verifica o estado em cache
      console.error('Erro ao verificar autenticação:', error);
      return this._cachedAuthState;
    }
  },
};

// Exportações
export { api, authService, getToken, removeToken };
export default api;