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


interface LinkItem {
  id: number | null;
  name: string;
  type: string;
}

interface CardProps {
  id: number;
  title: string;
  operations?: string;
  benefit?: string;
  location?: string;
  links?: LinkItem[];
  situation?: string;
  associateImagemUrl?: string;
  onDelete?: () => void;
}


const truncateText = (text: string | undefined, maxLength: number) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};


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
  

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  const [editForm, setEditForm] = useState({
    title: props.title,
    benefit: props.benefit || '',
    location: props.location || '',
    links: props.links || [],
    situation: props.situation || '',
    associateImagemUrl: props.associateImagemUrl || '' 
  });
  

  const [newLink, setNewLink] = useState<{ name: string; type: string }>({
    name: '',
    type: ''
  });
  
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  
  const [imageError, setImageError] = useState(false);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };
  
  
  const handleAddLink = () => {
    if (!newLink.name || !newLink.type) {
      toast.error("URL e tipo do link são obrigatórios.");
      return;
    }
    
    setEditForm(prev => ({
      ...prev,
      links: [...prev.links, { id: null, ...newLink }]
    }));
    
    setNewLink({ name: '', type: '' });
  };

  
  const handleRemoveLink = (index: number) => {
    setEditForm(prev => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index)
    }));
  };
  
 
  const handleSaveChanges = async () => {
    if (!editForm.title) {
      toast.error("O nome do parceiro é obrigatório.");
      return;
    }
    
    setIsSaving(true);
    
    try {
      
      const payload = {
        name: editForm.title,
        benefit: editForm.benefit,
        userId: "string", 
        id: props.id,
        description: "", 
        email: "", 
        situation: editForm.situation,
        associateImagemUrl: editForm.associateImagemUrl,
        operations: [
          {
            name: props.operations || '' 
          }
        ],
        location: editForm.location,
        links: editForm.links
      };

      await api.put(`/associate/${props.id}`, payload);
      
      toast.success(`O parceiro "${editForm.title}" foi atualizado com sucesso.`);
      setEditDialogOpen(false);
      
      if (props.onDelete) {
        props.onDelete();
      }
    } catch (error: any) {
      console.error('Erro ao atualizar parceiro:', error);
      toast.error(error.response?.data?.message || "Ocorreu um erro ao atualizar o parceiro.");
    } finally {
      setIsSaving(false);
    }
  };
  
  
  const handleDeleteConfirm = async () => {
    if (!props.id) {
      toast.error("ID do parceiro não informado.");
      return;
    }
    
    setIsDeleting(true); 
    
    try {
      await api.delete(`/associate/${props.id}`);
      toast.success(`O parceiro "${props.title}" foi excluído com sucesso.`);
      setDeleteDialogOpen(false);
      
      if (props.onDelete) {
        props.onDelete();
      }
    } catch (error: any) {
      console.error('Erro ao excluir parceiro:', error);
      toast.error(error.response?.data?.message || "Ocorreu um erro ao excluir o parceiro.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center p-2 h-[250px] w-[360px] md:h-[300px] md:w-[600px] bg-white rounded-lg shadow-lg relative">
      
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

      <div className="flex item-center gap-1 justify-items-center w-[300px] md:w-[500px]">
        <div className="flex rounded-10 w-[130px] md:w-[200px] items-center justify-center">
          {props.associateImagemUrl && !imageError ? (
            <img 
              src={props.associateImagemUrl}
              alt={`Logo ${props.title}`}
              className="h-16 w-23 md:h-30 md:w-45  object-contain rounded-xl"
              onError={() => {
                setImageError(true);
              }}
            />
          ) : (
            <Image className="text-gray-500 h-16 w-16 md:h-24 md:w-24" />
          )}
        </div>
        
        <div className="flex flex-col w-[150px] md:w-[300px]">
          <div className="flex items-center md:mb-2">
            <h2 className="text-[15px] md:text-xl font-bold truncate">{props.title}</h2>
          </div>
          
          
          {isAuthenticated && props.situation && (
            <p className="w-full text-[11px] md:text-[15px] overflow-hidden text-ellipsis mb-1">
              <span className="font-bold">Situação: </span>
                {props.situation}
            </p>
          )}
          
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
              <Label htmlFor="imageUrl" className="text-right">
                Logo
              </Label>
              <div className="col-span-3">
                <Input
                  id="imageUrl"
                  name="associateImagemUrl"
                  value={editForm.associateImagemUrl || ''}
                  onChange={handleInputChange}
                  placeholder="URL (ex: https://link.com/)"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="situation" className="text-right">
                Situação
              </Label>
              <select
                id="situation"
                name="situation"
                value={editForm.situation}
                onChange={handleInputChange}
                className="col-span-3 h-10 rounded-md border border-input px-3 py-2 text-sm"
              >
                <option value="Primeiro Contato">Primeiro Contato</option>
                <option value="Parceria Concluída e Publicada">Parceria Concluída e Publicada</option>
                <option value="Parceria Rejeitada">Parceria Rejeitada</option>
              </select>
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
            
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label className="text-right">
                Links
              </Label>
              <div className="col-span-3">
                
                {editForm.links && editForm.links.length > 0 && (
                  <div className="mb-3 space-y-2">
                    {editForm.links.map((link, index) => (
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
                
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="URL (ex: https://link.com/)"
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
            <Button type="button" variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              type="button" 
              onClick={handleSaveChanges}
              disabled={isSaving}
            >
              {isSaving ? "Salvando..." : "Salvar alterações"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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