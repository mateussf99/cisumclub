import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/footer';
import Header from '../components/hearder';
import { AuthProvider } from '../contexts/AuthContext';
import '../index.css';
import Cliente from '../pages/cliente';
import Home from '../pages/home';
import Login from '../pages/login';
import Parceiro from '../pages/parceiro';
import Parceiros from '../pages/parceiros';
import Quem_somos from '../pages/quem_somos';
import Privacidade from '../pages/privacidade';
import Termos from '../pages/termos';


function AppRoutes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <div className='fixed top-0 left-0 w-full z-10'>
                        <Header />
                    </div>
                    
                    <div className='pt-10 flex-grow'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/quem-somos" element={<Quem_somos />} />
                            <Route path="/cliente" element={<Cliente />} />
                            <Route path="/parceiro" element={<Parceiro />} />
                            <Route path="/parceiros" element={<Parceiros />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/privacidade" element={<Privacidade />} />
                            <Route path="/termos" element={<Termos />} />
                            

                        </Routes>
                    </div>
                    
                    <div className="hidden md:block">
                        <Footer />
                    </div>
                </div>
                
                <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AppRoutes;