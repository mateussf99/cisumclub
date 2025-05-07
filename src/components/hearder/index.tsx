import Logo from '../../assets/Logo.png';
import { Button } from "@/components/ui/button"
function Index() {

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10 object-contain" src={Logo} alt="" />
        <h1 className="font-bold text-2xl text-primary">cisum club</h1>
      </div>
      <div className="gap-[10px] flex items-center">
        <Button variant="default" className="text-white hover:bg-primary/80">
          Inicio
        </Button>
        <Button variant="outline" >Quem somos</Button>
        <Button variant="outline" >Quero ser cliente</Button>
        <Button variant="outline" >Quero ser parceiro</Button>
        <Button variant="outline" >Parceiros</Button>
        <Button variant="outline" >Login</Button>
      </div>
    </div>
  );
}

export default Index;