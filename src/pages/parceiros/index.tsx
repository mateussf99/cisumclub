import { Input } from "@/components/ui/input";
import { api } from '@/services/api';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Card from '../../components/card';

// Interface para tipar os dados da API
interface Partner {
  id: number;
  name: string;
  description: string | null;
  email: string | null;
  benefit: string | null;
  location: string | null;
  situation: string;
  associateImagemUrl: string | null;
  operations: string[];
  links: {
    id: number | null;
    name: string;
    type: string;
  }[];
}

interface ApiResponse {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  data: Partner[];
  message: string | null;
}

function index() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [uniqueLocations, setUniqueLocations] = useState<string[]>([]);
  const [uniqueOperations, setUniqueOperations] = useState<string[]>([]);

  // Função para buscar os parceiros da API
  const fetchPartners = async () => {
    try {
      setLoading(true);
      const response = await api.get<ApiResponse>('/associate/home');
      setPartners(response.data.data);
      
      // Extrair localizações únicas
      const locations = response.data.data
        .map(partner => partner.location)
        .filter((location): location is string => location !== null && location !== '')
        .sort();
      setUniqueLocations(Array.from(new Set(locations)));

      // Extrair operações únicas
      const operations = response.data.data
        .flatMap(partner => partner.operations)
        .filter(op => op !== '')
        .sort();
      setUniqueOperations(Array.from(new Set(operations)));
      
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar parceiros:', err);
      setError('Falha ao carregar parceiros. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  // Filtrar parceiros com base nos filtros
  const filteredPartners = partners.filter(partner => {
    const matchesSearch = searchTerm === '' || 
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (partner.benefit && partner.benefit.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesArea = areaFilter === '' || 
      (partner.operations && partner.operations.some(op => op.toLowerCase().includes(areaFilter.toLowerCase())));
    
    // Nota: Como não temos um campo location direto, este filtro pode precisar de ajustes
    // ou ser removido se você não tiver essa informação
    const matchesLocation = locationFilter === '';
    
    return matchesSearch && matchesArea && matchesLocation;
  });

  return (
    <div className='flex flex-col items-center min-h-screen bg-primary'>
      <div className='flex flex-col items-center justify-center mt-2 mb-5'>
        <h1 className='text-3xl text-white font-bold mb-5'>
          Clube de Benefícios
        </h1>
        <p className='text-white text-justify text-[9px] md:text-[15px] p-4  md:w-1/2'>
          Estamos empolgados em apresentar nossas empresas parceiras que se uniram a nós para criar clubes de benefícios exclusivos! Além de oferecer seus serviços, essas empresas proporcionam uma série de vantagens e recompensas para quem fizer parte do CISUM Club. Venha se juntar a nós e aproveite uma experiência única cheia de benefícios especiais!
        </p>
      </div>
      
      <div className="w-full max-w-3xl mb-8 px-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-48">
            <select 
              className="w-full h-10 rounded-md bg-white px-3 py-2 text-sm focus:outline-none focus:ring-0"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">Localização</option>
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          
          <div className="w-full md:w-48">
            <select 
              className="w-full h-10 rounded-md bg-white px-3 py-2 text-sm focus:outline-none focus:ring-0"
              value={areaFilter}
              onChange={(e) => setAreaFilter(e.target.value)}
            >
              <option value="">Área</option>
              {uniqueOperations.map((operation) => (
                <option key={operation} value={operation}>
                  {operation}
                </option>
              ))}
            </select>
          </div>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="w-full pl-10 bg-white border-none focus-visible:broder-none focus-visible:ring-0" 
              placeholder="Pesquisar parceiros..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="text-white text-xl">Carregando parceiros...</div>
      ) : error ? (
        <div className="text-red-400 bg-white p-4 rounded">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner) => (
              <Card 
                key={partner.id}
                title={partner.name}
                benefit={partner.benefit || 'Benefício não especificado'}
                operations={partner.operations.length > 0 ? partner.operations[0] : 'Não especificado'}
                location={partner.location || 'Maceió - AL'}
                links={partner.links}
              />
            ))
          ) : (
            <div className="text-white text-xl col-span-2 text-center">
              Nenhum parceiro encontrado com os filtros atuais.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default index;



