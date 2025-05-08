
import Header from '../../components/hearder'
import { Button } from "@/components/ui/button";
import Image1 from "../../assets/image1.png";

const index = () => {
  return (
    
    <div className='flex flex-col w-full h-screen bg-white'>
      <div className='fixed top-0 left-0 w-full z-10'>
        <Header />
      </div>
      <div className='flex p-4 items-center justify-between w-full h-screen'>
        <div className='flex gap-4 flex-col p-10 items-center justify-center w-1/2 h-full'>
          <h1 className='text-5xl text-primary font-bold text-center mt-10'>Benefícios Exclusivos para Todos, em um Só Lugar</h1>
          <p className='text-center text-3xl mt-5'>Acesse um clube que conecta empresas e clientes, oferecendo benefícios exclusivos e personalizados de forma simples e prática.</p>
          <Button variant="default" className='text-xl h-11'>Empresas Paceiras</Button>
        </div>
        <div className='hidden md:flex'>
          <img src={Image1} alt="" />
        </div>  
      </div>

    </div>
  )
}

export default index