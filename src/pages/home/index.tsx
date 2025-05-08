
import Header from '../../components/hearder'
import { Button } from "@/components/ui/button";
import Image1 from "../../assets/image1.png";
import Apoiador1 from "../../assets/apoiador1.png";
import Apoiador2 from "../../assets/apoiador2.jpg";
import Apoiador3 from "../../assets/apoiador3.png";
import Apoiador4 from "../../assets/apoiador4.png";
import Apoiador5 from "../../assets/apoiador5.png";
import Apoiador6 from "../../assets/apoiador6.png";
import Apoiador7 from "../../assets/apoiador7.png";


const index = () => {
  return (
    
    <div className='flex flex-col w-full h-full justify-center bg-primary md:bg-white'>
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
      <div className=' bg bg-primary flex flex-col w-full h-screen items-center justify-center'>

        <div className='flex flex-col  h-[700px] w-[1000px] rounded-2xl  items-center  '>
          <h1 className='text-white font-bold text-5xl mt-10'>
            Nossos Apoiadores
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              <img src={Apoiador1} alt=""/>
            </div>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              <img src={Apoiador2} alt=""/>
            </div>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              <img src={Apoiador3} alt=""/>
            </div>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              <img src={Apoiador4} alt=""/>
            </div>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              <img src={Apoiador5} alt=""/>
            </div>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              <img src={Apoiador6} alt=""/>
            </div>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              <img src={Apoiador7} alt=""/>
            </div>
            <div className='h-60 w-60 bg-white rounded-[10px] flex items-center justify-center'>
              d
            {/* <img src={Apoiador8} alt=""/> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default index