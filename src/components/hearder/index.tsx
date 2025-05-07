import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

function Index() {
  const location = useLocation();

  const header = (
    <>
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
        <Link to="/login">
            <Button variant={location.pathname === '/login' ? 'default' : 'outline'}>
            Login
            </Button>
        </Link>
    </>
  );


  return (
    <div className="flex shadow justify-between items-center">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10 object-contain" src={Logo} alt="" />
        <h1 className="font-bold text-2xl text-primary">cisum club</h1>
      </div>
        <div className="gap-4 p-1 flex items-center">
            {header}
        </div>
    </div>
  );
}

export default Index;