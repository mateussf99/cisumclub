import { authService } from '@/services/api';
import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Verifica o status de autenticação
  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      const isAuth = await authService.isAuthenticated();
      setIsAuthenticated(isAuth);
      // Salva o estado também no localStorage para persistir entre recarregamentos
      localStorage.setItem('isLoggedIn', isAuth ? 'true' : 'false');
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setIsAuthenticated(false);
      localStorage.setItem('isLoggedIn', 'false');
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      // Após login bem-sucedido, atualize o estado
      setIsAuthenticated(true);
      localStorage.setItem('isLoggedIn', 'true');
      return response;
    } catch (error) {
      console.error('Erro no login:', error);
      setIsAuthenticated(false);
      localStorage.setItem('isLoggedIn', 'false');
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      localStorage.setItem('isLoggedIn', 'false');
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  };

  // Verifica autenticação quando o componente é montado
  useEffect(() => {
    // Primeiro, tenta usar o valor do localStorage
    const storedAuth = localStorage.getItem('isLoggedIn');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    
    // Depois verifica com o servidor (assíncrono)
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        login,
        logout,
        checkAuthStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};