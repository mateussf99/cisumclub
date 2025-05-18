import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authService } from "@/services/api";
import { Menu } from 'lucide-react';
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Verificar estado de autenticação quando o componente montar
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authService.isAuthenticated();
      setIsAuthenticated(isAuth);
    };
    
    checkAuth();
  }, []);

  // Função para fazer logout
  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    navigate('/'); // Redireciona para a página inicial
  };
  
  // Componente de login/logout para desktop
  const loginLogoutButton = isAuthenticated ? (
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <Link to="/login">
      <Button variant={location.pathname === '/login' ? 'default' : 'outline'}>
        Login
      </Button>
    </Link>
  );
  
  // Componente de login/logout para mobile
  const loginLogoutMenuItem = isAuthenticated ? (
    <DropdownMenuItem asChild>
      <Button variant="ghost" onClick={handleLogout} className="w-full justify-start">Logout</Button>
    </DropdownMenuItem>
  ) : (
    <DropdownMenuItem asChild>
      <Link to="/login">Login</Link>
    </DropdownMenuItem>
  );

  const header = (
    <div className="flex gap-2">
        <Link to="/">
            <Button variant={location.pathname === '/' ? 'default' : 'outline'}>
              Inicio
            </Button>
        </Link>
        <Link to="/quem-somos">
            <Button variant={location.pathname === '/quem-somos' ? 'default' : 'outline'}>
              Quem somos
            </Button>
        </Link>
        <Link to="/cliente">
            <Button variant={location.pathname === '/cliente' ? 'default' : 'outline'}>
              Quero ser cliente
            </Button>
        </Link>
        <Link to="/parceiro">
            <Button variant={location.pathname === '/parceiro' ? 'default' : 'outline'}>
              Quero ser parceiro
            </Button>
        </Link>
        <Link to="/parceiros">
            <Button variant={location.pathname === '/parceiros' ? 'default' : 'outline'}>
              Parceiros
            </Button>
        </Link>
        {loginLogoutButton}
    </div>
  );

  const header2 = (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger><Menu className='text-primary'></Menu></DropdownMenuTrigger>
        <DropdownMenuContent className="font-bold border-none text-primary bg-white" >
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/">Inicio</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/quem-somos">Quem Somos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/cliente">Quero ser cliente</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/parceiro">Quero ser parceiro</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/parceiros">Parceiros</Link>
          </DropdownMenuItem>
          {loginLogoutMenuItem}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );



  return (
    <div className="flex shadow justify-between bg-white items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img className="h-10 w-10 object-contain" src={Logo} alt="" />
          <h1 className="font-bold text-2xl text-primary">cisum club</h1>
        </Link>
      </div>
      <div className="p-1 flex items-center">
        <div className="hidden md:block">{header}</div>
        <div className="block md:hidden">{header2}</div>
      </div>
    </div>
  );
}

export default Index;