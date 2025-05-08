
import Header from '../../components/hearder'
import { Button } from "@/components/ui/button";
import Image1 from "../../assets/image1.png";

const index = () => {
  return (
    
    <div className='flex flex-col w-full h-screen justify-center bg-primary md:bg-white'>
      <div className='fixed top-0 left-0 w-full z-10 '>
        <Header />
      </div>
      <div className='flex md:mt-14 p-1 items-center h-screen justify-center md:p-4  md:justify-between md:w-full md:h-screen'>
        <div className='flex p-10 gap-4 bg-white rounded-[10px] h-1/2 w-[400px] flex-col  items-center justify-center md:w-1/2 md:h-screen '>
          <h1 className='text-3xl md:text-5xl text-primary font-bold '>
            Benefícios Exclusivos para Todos, em um Só Lugar.
          </h1>
          <p className='md:text-3xl mt-5'>
            Acesse um clube que conecta empresas e clientes, oferecendo benefícios exclusivos e personalizados de forma simples e prática.
          </p>
          <Button variant="default" className='md:text-xl h-11'>Empresas Paceiras</Button>
        </div>
        <div className='hidden md:flex'>
          <img src={Image1} alt="imagem que mostra pesoas conectadas"/>
        </div>  
      </div>
      <div className='flex flex-col w-full h-screen items-center'>
        <h1 className='text-primary font-bold text-5xl'>
          Nossos Parceiros
        </h1>
        <div></div>
      </div>

    </div>
  )
}

export default index