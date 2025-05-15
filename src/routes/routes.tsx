import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Quem_somos from '../pages/quem_somos';
import Cliente from '../pages/cliente';
import Parceiro from '../pages/parceiro';
import '../index.css';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<Quem_somos />} />
                <Route path="/cliente" element={<Cliente />} />
                <Route path="/parceiro" element={<Parceiro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;