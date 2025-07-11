import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';


//lembra de volta para o .env
const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = '/api'; // Manter proxy para evitar CORS no desenvolvimento
const AUTH_COOKIE_NAME = 'AspNetCore.Identity.Application'; // Nome exato visto no Storage


const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Crucial: permite que o Axios envie e receba cookies
});

// n usa pq o back ta funcionado com o token publico
const getToken = (): string | undefined => {
  try {
    const cookies = document.cookie.split(';');
    
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      

      if (name === AUTH_COOKIE_NAME) {
        return decodeURIComponent(value); 
      }
    }
    
    return undefined;
  } catch (error) {
    console.error('Error reading auth cookie:', error);
    return undefined;
  }
};

const removeToken = (): void => {
  document.cookie = `${AUTH_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  

  localStorage.removeItem('token');
  localStorage.removeItem('auth_token');
};

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  
  return config;
});


const authService = {
  _cachedAuthState: false, // Salva o estado em memória durante a sessão
  
  async login(email: string, password: string): Promise<any> {
    try {
      const response = await api.post('/identity/login?useCookies=true', { 
        email, 
        password 
      });
      
      this._cachedAuthState = true; 
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
    
    this._cachedAuthState = false; 
    removeToken();
  },
  
  async isAuthenticated(): Promise<boolean> {
    try {
      
      await api.get('/associate/manage'); 
      
      this._cachedAuthState = true; 
      return true;
    } catch (error: any) {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        this._cachedAuthState = false;
        return false;
      }
      
    
      console.error('Erro ao verificar autenticação:', error);
      return this._cachedAuthState;
    }
  },
};

export { api, authService, getToken, removeToken };
export default api;