import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '@/contexts/AuthContext';
import { api } from '@/services/api';
import { Plus, Search, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../../components/card';

// Atualize a interface para incluir links
interface NewPartnerForm {
  name: string;
  operations: string;
  benefit: string;
  location: string;
  links: {
    id: number | null;
    name: string;
    type: string;
  }[];
}

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
  const { isAuthenticated } = useAuth();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [uniqueLocations, setUniqueLocations] = useState<string[]>([]);
  const [uniqueOperations, setUniqueOperations] = useState<string[]>([]);
  // Adicionar estes novos estados
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newPartnerForm, setNewPartnerForm] = useState<NewPartnerForm>({
    name: '',
    operations: '',
    benefit: '',
    location: '',
    links: []
  });
  const [newLink, setNewLink] = useState<{ name: string; type: string }>({
    name: '',
    type: ''
  });

  // Função para buscar os parceiros da API
  const fetchPartners = async () => {
    try {
      setLoading(true);
      
      // Escolher a rota com base no estado de autenticação
      const endpoint = isAuthenticated ? '/associate/manage' : '/associate/home';
      
      // Adicionar parâmetros de paginação para obter todos os registros
      // Usando um valor alto para pageSize e começando na página 1
      const response = await api.get<ApiResponse>(`${endpoint}?pageNumber=1&pageSize=1000`);
      
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
    
    const matchesLocation = locationFilter === '' || 
      (partner.location && partner.location.toLowerCase().includes(locationFilter.toLowerCase()));
    
    return matchesSearch && matchesArea && matchesLocation;
  });

  const handleNewPartnerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPartnerForm(prev => ({ ...prev, [name]: value }));
  };

  // Função para adicionar um link à lista
  const handleAddLink = () => {
    if (!newLink.name || !newLink.type) {
      toast.error("URL e tipo do link são obrigatórios.");
      return;
    }
    
    setNewPartnerForm(prev => ({
      ...prev,
      links: [...prev.links, { id: null, ...newLink }]
    }));
    
    setNewLink({ name: '', type: '' }); // Limpar o formulário do link
  };

  // Função para remover um link da lista
  const handleRemoveLink = (index: number) => {
    setNewPartnerForm(prev => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index)
    }));
  };

  const handleCreatePartner = async () => {
    if (!newPartnerForm.name) {
      toast.error("O nome do parceiro é obrigatório.");
      return;
    }

    setIsCreating(true);

    try {
      // Preparar o payload para a API
      const payload = {
        name: newPartnerForm.name,
        benefit: newPartnerForm.benefit,
        userId: "string",
        description: "",
        email: "",
        situation: "",
        associateImagemUrl: "",
        operations: [
          {
            name: newPartnerForm.operations
          }
        ],
        location: newPartnerForm.location,
        links: newPartnerForm.links  // Adicione esta linha
      };

      // Enviar para a API
      await api.post('/associate', payload);
      
      // Notificar sucesso
      toast.success(`Parceiro "${newPartnerForm.name}" criado com sucesso!`);
      
      // Resetar o formulário e fechar o diálogo
      setNewPartnerForm({
        name: '',
        operations: '',
        benefit: '',
        location: '',
        links: []
      });
      setCreateDialogOpen(false);
      
      // Recarregar a lista
      fetchPartners();
    } catch (error: any) {
      console.error('Erro ao criar parceiro:', error);
      toast.error(error.response?.data?.message || "Ocorreu um erro ao criar o parceiro.");
    } finally {
      setIsCreating(false);
    }
  };

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
              className="w-full lg:w-[300px] pl-10 bg-white border-none focus-visible:broder-none focus-visible:ring-0" 
              placeholder="Pesquisar parceiros..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Adicionar botão de criação */}
          {isAuthenticated && (
            <Button 
              variant="outline"
              className=" "
              onClick={() => setCreateDialogOpen(true)}
            >
              <Plus size={16} /> Novo Parceiro
            </Button>
          )}
        </div>
      </div>
      
      {loading ? (
        <div className="text-white text-xl">Carregando parceiros...</div>
      ) : error ? (
        <div className="text-red-400 bg-white p-4 rounded">{error}</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner) => (
              <Card 
                key={partner.id}
                id={partner.id}
                title={partner.name}
                benefit={partner.benefit || 'Benefício não especificado'}
                operations={partner.operations.length > 0 ? partner.operations[0] : 'Não especificado'}
                location={partner.location || 'Maceió - AL'}
                links={partner.links}
                situation={partner.situation} 
                onDelete={fetchPartners}
              />
            ))
          ) : (
            <div className="text-white text-xl col-span-2 text-center">
              Nenhum parceiro encontrado com os filtros atuais.
            </div>
          )}
        </div>
      )}

      {/* Diálogo para criar novo parceiro */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar Novo Parceiro</DialogTitle>
            <DialogDescription>
              Preencha os dados para criar um novo parceiro. Clique em salvar quando terminar.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input
                id="name"
                name="name"
                value={newPartnerForm.name}
                onChange={handleNewPartnerInputChange}
                className="col-span-3"
                required
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="operations" className="text-right">
                Área
              </Label>
              <Input
                id="operations"
                name="operations"
                value={newPartnerForm.operations}
                onChange={handleNewPartnerInputChange}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="benefit" className="text-right">
                Benefício
              </Label>
              <Textarea
                id="benefit"
                name="benefit"
                value={newPartnerForm.benefit}
                onChange={handleNewPartnerInputChange}
                className="col-span-3"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Localização
              </Label>
              <Input
                id="location"
                name="location"
                value={newPartnerForm.location}
                onChange={handleNewPartnerInputChange}
                className="col-span-3"
              />
            </div>

            {/* Seção de links */}
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label className="text-right">
                Links
              </Label>
              <div className="col-span-3">
                {/* Lista de links já adicionados */}
                {newPartnerForm.links.length > 0 && (
                  <div className="mb-3 space-y-2">
                    {newPartnerForm.links.map((link, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                        <div className="truncate mr-2 text-sm">
                          <span className="font-semibold">{link.type}:</span> {link.name}
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveLink(index)}
                          className="h-6 w-6 p-0"
                        >
                          <Trash size={14} />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Formulário para adicionar novo link */}
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="URL (ex: https://linkedin.com/company)"
                      value={newLink.name}
                      onChange={(e) => setNewLink(prev => ({ ...prev, name: e.target.value }))}
                    />
                    <select
                      className="h-10 rounded-md border border-input px-3 py-2 text-sm"
                      value={newLink.type}
                      onChange={(e) => setNewLink(prev => ({ ...prev, type: e.target.value }))}
                    >
                      <option value="">Tipo</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="twitter">Twitter</option>
                      <option value="youtube">YouTube</option>
                      <option value="website">Website</option>
                    </select>
                  </div>
                  <Button 
                    type="button"
                    onClick={handleAddLink}
                    size="sm"
                    className="w-full"
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              type="button" 
              onClick={handleCreatePartner}
              disabled={isCreating}
            >
              {isCreating ? "Criando..." : "Criar Parceiro"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default index;



