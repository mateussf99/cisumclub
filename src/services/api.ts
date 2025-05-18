import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';


//lembra de volta para o .env
//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = '/api'; // Manter proxy para evitar CORS
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
  async login(email: string, password: string): Promise<any> {
    try {
      // Parâmetro useCookies=true para instruir a API a usar cookies
      const response = await api.post('/identity/login?useCookies=true', { 
        email, 
        password 
      });
      console.log("test",document.cookie);
      console.log('Login bem-sucedido, cookies foram definidos pelo servidor');
      
      // Verificar o token para debug
      const token = getToken();
      console.log('Token nos cookies:', token ? 'Presente' : 'Ausente');
      
      return response.data;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  },
  
  async logout(): Promise<void> {
    try {
      // Tentar chamar o endpoint de logout da API
      await api.post('/identity/logout');
      console.log('Logout bem-sucedido no servidor');
    } catch (error) {
      console.error('Erro ao fazer logout no servidor:', error);
      // Continuar mesmo com erro, para garantir limpeza local
    }
    
    // Limpar cookies locais
    removeToken();
    console.log('Cookies de autenticação removidos localmente');
  },
  
  // Modifique o método isAuthenticated para usar um endpoint existente
  isAuthenticated: async function(): Promise<boolean> {
    try {
      // Tente acessar qualquer endpoint protegido já existente
      // Por exemplo, um endpoint que busca dados do usuário ou qualquer outro recurso protegido
      await api.get('/associates'); // ou qualquer outro endpoint protegido que você já tenha
      
      // Se não lançar erro, está autenticado
      return true;
    } catch (error: any) {
      // Se receber 401 (Unauthorized) ou 403 (Forbidden), não está autenticado
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        return false;
      }
      
      // Se for outro tipo de erro (como 500, 404, etc.), provável problema de rede ou API
      console.error('Erro ao verificar autenticação:', error);
      return false;
    }
  },
};

// Exportações
export { api, authService, getToken, removeToken };
export default api;