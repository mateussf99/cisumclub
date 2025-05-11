import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Quem_somos from '../pages/quem_somos';
import '../index.css';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<Quem_somos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;