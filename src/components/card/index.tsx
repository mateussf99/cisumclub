import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Facebook, Globe, Image, Instagram, Linkedin, Pencil, Trash, Twitter, Youtube } from "lucide-react";

// Interface atualizada para refletir a estrutura dos dados
interface LinkItem {
  id: number | null;
  name: string;
  type: string;
}

interface CardProps {
  title: string;
  operations?: string;
  benefit?: string;
  location?: string;
  links?: LinkItem[];
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
  
  return (
    <div className="flex items-center p-2  h-[200px] w-[360px] md:h-[300px] md:w-[600px] bg-white rounded-lg shadow-lg relative">
      <div className="absolute top-4 right-2 ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical size={20} className="cursor-pointer hover:text-primary transition-colors" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-bold border-none bg-white">
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Button className="font-bold flex items-center gap-2" variant='link'>
                <Trash size={16} className="text-red-500" /> Excluir
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button className="font-bold flex items-center gap-2" variant='link'>
                <Pencil size={16} className="text-blue-500" /> Editar
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex item-center justify-items-center w-[300px] md:w-[500px]">
        <div className="flex rounded-10 w-[100px] md:w-[200px] items-center justify-center">
          {/* Remova a prop size e use classes responsivas */}
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
    </div>
  )
}

export default index