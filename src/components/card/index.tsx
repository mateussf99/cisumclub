import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '@/contexts/AuthContext';
import { api } from '@/services/api';
import { EllipsisVertical, Facebook, Globe, Image, Instagram, Linkedin, Pencil, Trash, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from 'react-toastify';

// Interface atualizada para refletir a estrutura dos dados
interface LinkItem {
  id: number | null;
  name: string;
  type: string;
}

interface CardProps {
  id: number; // ID do parceiro para exclusão
  title: string;
  operations?: string;
  benefit?: string;
  location?: string;
  links?: LinkItem[];
  onDelete?: () => void; // Callback opcional para atualizar a lista após exclusão
}

// Função auxiliar para truncar texto
const truncateText = (text: string | undefined, maxLength: number) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

// Função para determinar qual ícone mostrar baseado no tipo
const getSocialIcon = (type: string) => {
  const iconType = type.toLowerCase();
  
  switch (iconType) {
    case 'instagram':
      return <Instagram size={16} />;
    case 'facebook':
      return <Facebook size={16} />;
    case 'twitter':
      return <Twitter size={16} />;
    case 'linkedin':
      return <Linkedin size={16} />;
    case 'youtube':
      return <Youtube size={16} />;
    default:
      return <Globe size={16} />;
  }
};

function index(props: CardProps) {
  const maxChars = 45;
  const { isAuthenticated } = useAuth();
  
  // Estados para controlar a visibilidade dos diálogos
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  // Estados para os campos do formulário de edição
  const [editForm, setEditForm] = useState({
    title: props.title,
    operations: props.operations || '',
    benefit: props.benefit || '',
    location: props.location || ''
  });
  
  const [isDeleting, setIsDeleting] = useState(false);

  // Função para atualizar os campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Função para salvar as alterações
  const handleSaveChanges = async () => {
    try {
      // Preparar o payload conforme a estrutura esperada pela API
      const payload = {
        name: editForm.title,
        benefit: editForm.benefit,
        // Outros campos obrigatórios que podem ser mantidos do parceiro atual
        userId: "string", // Se disponível, use o valor original
        id: props.id,
        description: "", // Se disponível, use o valor original
        email: "", // Se disponível, use o valor original
        situation: "Active", // Manter ativo, a menos que você tenha um controle para isso
        associateImagemUrl: "", // Manter a URL original se disponível
        operations: [
          {
            name: editForm.operations
          }
        ]
      };

      // Fazer a chamada à API para atualizar o parceiro
      await api.put(`/associate/${props.id}`, payload);
      
      // Notificar sucesso
      toast.success(`O parceiro "${editForm.title}" foi atualizado com sucesso.`);
      
      // Fechar o diálogo após salvar
      setEditDialogOpen(false);
      
      // Atualizar a lista, se callback fornecido
      if (props.onDelete) {
        props.onDelete(); // Reutilizar o callback de delete para atualizar a lista
      }
    } catch (error: any) {
      console.error('Erro ao atualizar parceiro:', error);
      toast.error(error.response?.data?.message || "Ocorreu um erro ao atualizar o parceiro.");
    }
  };
  
  // Função para confirmar a exclusão
  const handleDeleteConfirm = async () => {
    if (!props.id) {
      toast.error("ID do parceiro não informado.");
      return;
    }
    
    setIsDeleting(true); 
    
    try {
      // Fazer a chamada à API para excluir o parceiro
      await api.delete(`/associate/${props.id}`);
      
      // Notificar sucesso
      toast.success(`O parceiro "${props.title}" foi excluído com sucesso.`);
      
      // Fechar o diálogo após exclusão
      setDeleteDialogOpen(false);
      
      // Chamar o callback para atualizar a lista, se fornecido
      if (props.onDelete) {
        props.onDelete();
      }
    } catch (error: any) {
      console.error('Erro ao excluir parceiro:', error);
      
      // Notificar erro
      toast.error(error.response?.data?.message || "Ocorreu um erro ao excluir o parceiro.");
    } finally {
      setIsDeleting(false); // ✅ Define como false no final
    }
  };
  
  return (
    <div className="flex items-center p-2 h-[200px] w-[360px] md:h-[300px] md:w-[600px] bg-white rounded-lg shadow-lg relative">
      
      {isAuthenticated && (
        <div className="absolute top-4 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical size={20} className="cursor-pointer hover:text-primary transition-colors" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-bold border-none bg-white">
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button 
                  className="font-bold flex items-center gap-2" 
                  variant='link'
                  onClick={() => setDeleteDialogOpen(true)}
                >
                  <Trash size={16} className="text-red-500" /> Excluir
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button 
                  className="font-bold flex items-center gap-2" 
                  variant='link'
                  onClick={() => setEditDialogOpen(true)}
                >
                  <Pencil size={16} className="text-blue-500" /> Editar
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      <div className="flex item-center justify-items-center w-[300px] md:w-[500px]">
        <div className="flex rounded-10 w-[100px] md:w-[200px] items-center justify-center">
          <Image className="text-gray-500 h-16 w-16 md:h-24 md:w-24" />
        </div>
        
        <div className="flex flex-col w-[150px] md:w-[300px]">
          <div className="flex items-center md:mb-2">
            <h2 className="text-[15px] md:text-xl font-bold truncate">{props.title}</h2>
          </div>
          
          <p className="w-full text-[11px] md:text-[15px] overflow-hidden text-ellipsis">
            <span className="font-bold">Área: </span>
            {props.operations}
          </p>
          
          <p className="w-full text-[11px] md:text-[15px] overflow-hidden text-ellipsis">
            <span className="font-bold">Benefício: </span>
            {truncateText(props.benefit, maxChars)}
          </p>
          
          <p className="w-full text-[11px] md:text-[15px] overflow-hidden text-ellipsis">
            <span className="font-bold">Modo de Participar: </span>
            Via CISUM Club
          </p>
          
          <p className="w-full text-[11px] md:text-[15px] overflow-hidden text-ellipsis">
            <span className="font-bold">Localização: </span>
            {truncateText(props.location, maxChars)}
          </p>
          
          {props.links && props.links.length > 0 && (
            <div className="w-full text-[11px] md:text-[15px] ">
              <span className="font-bold">Links: </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {props.links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.name} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm"
                    title={link.name}
                  >
                    {getSocialIcon(link.type)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
      
      {/* Diálogo de Edição */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Parceiro</DialogTitle>
            <DialogDescription>
              Faça alterações nas informações do parceiro. Clique em salvar quando terminar.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Nome
              </Label>
              <Input
                id="title"
                name="title"
                value={editForm.title}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="operations" className="text-right">
                Área
              </Label>
              <Input
                id="operations"
                name="operations"
                value={editForm.operations}
                onChange={handleInputChange}
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
                value={editForm.benefit}
                onChange={handleInputChange}
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
                value={editForm.location}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button type="button"  onClick={handleSaveChanges}>
              Salvar alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de Confirmação de Exclusão */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir o parceiro "{props.title}"? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter className="sm:justify-between">
            <Button type="button" variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              type="button" 
              onClick={handleDeleteConfirm}
              disabled={isDeleting} 
            >
              {isDeleting ? "Excluindo..." : "Excluir"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default index;