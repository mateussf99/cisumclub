import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className="flex bg-white border-t border-primary py-5 px-6 w-full content-around">
      <div className="flex flex-col w-1/3 p-1">
        <h1 className="text-2xl font-bold text-primary">
          Cisum Club
        </h1>
        <a 
          href="https://www.instagram.com/cisumclub" 
          className="text-sm text-primary hover:text-secondary mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={16} />
        </a>
        <p className="text-sm mt-2">© 2025 Cisum Club. Todos os direitos reservados.</p>
      </div>
      
      <div className="flex flex-col w-1/3 border-l border-primary pl-4">

        <Link to="/privacidade" className="text-sm text-gray-600 hover:text-primary">
          Política de Privacidade
        </Link>
        <Link to="/termos" className="text-sm text-gray-600 hover:text-primary">
          Termos e Condições
        </Link>
        <Link to="/contato" className="text-sm text-gray-600 hover:text-primary">
          Contato
        </Link>
        <Link to="/faq" className="text-sm text-gray-600 hover:text-primary">
          FAQ
        </Link>
      </div>
      <div className='border-l border-primary pl-4'>
        <p className='w-1/3 text-sm text-gray-600'>
            AV COMENDADOR GUSTAVO PAIVA, 5945, LOJA 3026 SALA N3 COWORKING, PARQUE SHOPPING MACEIÓ, CRUZ DAS ALMAS, MACEIÓ - AL
        </p>
      </div>
    </div>
  )
}

export default index