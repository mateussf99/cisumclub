
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
import Apoiador8 from "../../assets/apoiador8.png";


const index = () => {
  return (
    
    <div className='flex flex-col w-full h-full justify-center bg-primary md:bg-white'>
      <div className='fixed top-0 left-0 w-full z-10 '>
        <Header />
      </div>
      <section className='flex md:mt-14 p-1 items-center h-screen justify-center md:p-4  md:justify-between md:w-full md:h-screen'>
        <div className='flex p-10 gap-4 mt-4 bg-white rounded-[10px] h-[450px] w-[400px] flex-col  items-center justify-center md:w-1/2 md:h-screen '>
          <h1 className='text-3xl md:text-5xl text-primary font-bold '>
            Benefícios Exclusivos para Todos, em um Só Lugar.
          </h1>
          <p className='text-justify md:text-3xl mt-5'>
            Acesse um clube que conecta empresas e clientes, oferecendo benefícios exclusivos e personalizados de forma simples e prática.
          </p>
          <Button variant="default" className='md:text-xl h-11'>Empresas Paceiras</Button>
        </div>
        <div className='hidden md:flex'>
          <img src={Image1} alt="imagem que mostra pesoas conectadas"/>
        </div>  
      </section>
      <section className=' bg bg-primary mb-10 flex flex-col w-full h-full md:h-screen items-center justify-center'>

        <div className='flex flex-col m-4  md:h-[700px] md:w-[900px] rounded-2xl  items-center  '>
          <h1 className='text-white font-bold text-3xl md:text-5xl mt-10'>
            Nossos Apoiadores
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador1} alt=""/>
            </div>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador2} alt=""/>
            </div>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador3} alt=""/>
            </div>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador4} alt=""/>
            </div>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador5} alt=""/>
            </div>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador6} alt=""/>
            </div>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador7} alt=""/>
            </div>
            <div className=' h-35 w-40 bg-white rounded-[10px] flex items-center justify-center md:h-55 md:w-55'>
              <img src={Apoiador8} alt=""/>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col h-screen w-full bg-white items-center md:flex-row '>

        <div className='flex flex-col m-4  items-center  '>
          <h1 className='text-primary font-bold text-2xl md:text-5xl mt-10 mb-4'>
            Estratégia de marketing
          </h1>
          <p className='text-justify p-10 pt-0 md:text-2xl'>
            Buscamos empresas parceiras comprometidas em oferecer descontos exclusivos aos nossos membros. Para os clientes, conseguem obter benefícios relevantes que agregam valor à sua experiência no clube. Já para as empresas parceiras, adquirem maior visibilidade, atração de novos clientes e fortalecimento da marca.
          </p>
        </div>

        <div className='flex flex-col  m-4  items-center  '>
          <h1 className='text-primary font-bold text-2xl md:text-5xl mt-10 mb-4'>
            Clubes de Benefícios
          </h1>
          <p className='text-justify p-10 pt-0 md:text-2xl'>
            O clube de benefícios conecta clientes a descontos exclusivos em empresas parceiras, criando uma rede vantajosa para todos. Os membros do clube aproveitam vantagens exclusivas que agregam valor ao seu dia a dia, enquanto as empresas parceiras aumentam sua visibilidade, atraem um público qualificado e fortalecem sua reputação no mercado, ampliando suas oportunidades de crescimento.
          </p>
        </div>

      </section>
    </div>
  )
}

export default index