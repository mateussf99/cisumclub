import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

//lembra de volta para o .env
//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = '/api';
const TOKEN_KEY = 'auth_token';
const TOKEN_EXPIRATION = 1; // dias

// Cliente Axios com configuração básica
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funções para gerenciar o token
const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

const setToken = (token: string): void => {
  Cookies.set(TOKEN_KEY, token, { expires: TOKEN_EXPIRATION, path: '/' });
};

const removeToken = (): void => {
  Cookies.remove(TOKEN_KEY, { path: '/' });
};

// Interceptor para adicionar o token nas requisições
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getToken();
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// Funções de autenticação
const authService = {
  async login(email: string, password: string): Promise<any> {
    try {
      const response = await api.post('/identity/login', { email, password });
      const { token } = response.data;
      
      if (token) {
        setToken(token);
      }
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  logout(): void {
    removeToken();
  },
  
  isAuthenticated(): boolean {
    return !!getToken();
  },
};

// Exportações
export { api, authService, getToken, removeToken, setToken };
export default api;