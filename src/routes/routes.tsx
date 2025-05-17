import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/hearder';
import '../index.css';
import Cliente from '../pages/cliente';
import Home from '../pages/home';
import Login from '../pages/login';
import Parceiro from '../pages/parceiro';
import Quem_somos from '../pages/quem_somos';

function AppRoutes() {
    return (
        <BrowserRouter>
            <div className='fixed top-0 left-0 w-full z-10'>
                <Header />
            </div>
            <div className='pt-10'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quem-somos" element={<Quem_somos />} />
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path="/parceiro" element={<Parceiro />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;