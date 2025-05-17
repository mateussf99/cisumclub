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
    
    <div className='flex flex-col w-full h-full justify-center bg-primary lg:bg-white'>
      <div className='flex p-1 items-center h-screen justify-center md:p-4  lg:justify-between md:w-full md:h-screen'>
        <div className='flex p-10 gap-4 mt-4 bg-white rounded-[10px] h-[450px] w-[350px] flex-col  items-center justify-center lg:w-1/2 md:h-screen '>
          <h1 className='text-3xl md:text-5xl text-primary font-bold '>
            Benefícios Exclusivos para Todos, em um Só Lugar.
          </h1>
          <p className='text-justify md:text-3xl mt-5'>
            Acesse um clube que conecta empresas e clientes, oferecendo benefícios exclusivos e personalizados de forma simples e prática.
          </p>
          <Button variant="default" className='md:text-xl h-11'>Empresas Paceiras</Button>
        </div>
        <div className='hidden lg:flex'>
          <img src={Image1} alt="imagem que mostra pesoas conectadas"/>
        </div>  
      </div>
      <div className=' bg-primary mb-10 flex flex-col w-full h-full md:h-screen items-center justify-center'>

        <div className='flex flex-col   lg:h-[700px] lg:w-[900px] rounded-2xl  items-center  '>
          <h1 className='text-white font-bold text-3xl md:text-5xl mt-10'>
            Nossos Apoiadores
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10'>
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
      </div>
      <div className='flex flex-col h-full md:h-screen w-full bg-white items-center md:flex-row '>
        <div className='flex flex-col   items-center  '>
          <h1 className='text-primary font-bold text-xl lg:text-5xl mt-10 mb-4'>
            Estratégia de marketing
          </h1>
          <p className='text-justify p-10 pt-0 md:text-xl'>
            Buscamos empresas parceiras comprometidas em oferecer descontos exclusivos aos nossos membros. Para os clientes, conseguem obter benefícios relevantes que agregam valor à sua experiência no clube. Já para as empresas parceiras, adquirem maior visibilidade, atração de novos clientes e fortalecimento da marca.
          </p>
        </div>
        <div className='flex flex-col  items-center  '>
          <h1 className='text-primary font-bold text-xl lg:text-5xl mt-10 mb-4'>
            Clubes de Benefícios
          </h1>
          <p className='text-justify p-10 pt-0 md:text-xl'>
            O clube de benefícios conecta clientes a descontos exclusivos em empresas parceiras, criando uma rede vantajosa para todos. Os membros do clube aproveitam vantagens exclusivas que agregam valor ao seu dia a dia, enquanto as empresas parceiras aumentam sua visibilidade, atraem um público qualificado e fortalecem sua reputação no mercado, ampliando suas oportunidades de crescimento.
          </p>
        </div>
      </div>
      <div className='flex-row  h-screen w-full bg-white justify-center md:flex-col'>
        <div className='flex flex-col m-4  items-center  '>
          <h1 className='text-primary mt-7 font-bold text-2xl md:text-5xl '>
            Como o Cisum Club Funciona
          </h1>
          <div className='flex-col items-center grid md:grid-cols-3 rounded-2xl '>
            <div className='flex-col border border-primary m-4  items-center rounded-2xl md:h-[210px]  '>
              <h1 className='text-primary pt-0 pb-0 p-10 font-bold md:text-[15px] lg:text-[20px] mt-10 mb-4'>
                01 CADASTRO
              </h1>
              <p className='text-justify p-10 pt-0 md:text-[10px] lg:text-[15px] '>
                Negociamos benefícios e  descontos com empresas para clientes que forem membros do clube.
              </p>
            </div>
            <div className='flex-col border border-primary m-4  items-center rounded-2xl md:h-[210px]  '>
              <h1 className='text-primary pt-0 pb-0 p-10 font-bold md:text-[15px] lg:text-[20px] mt-5 mb-4'>
                02 MÍDIAS
              </h1>
              <p className='text-justify p-10 pt-0 md:text-[10px] lg:text-[15px]'>
                A empresa será destacada no site do CISUM Club e em nossa redes sociais, por meio de marketing de conteúdo, como objetivo de atrair novos clientes
              </p>
            </div>
            <div className='flex-col border border-primary m-4  items-center rounded-2xl md:h-[210px]  '>
              <h1 className='text-primary pt-0 pb-0 p-10 font-bold md:text-[15px] lg:text-[20px] mt-5 mb-4'>
                03 CUSTO
              </h1>
              <p className='text-justify p-10 pt-0 md:text-[10px] lg:text-[15px]'>
                O único custo para empresa é o benefício ou desconto que ela oferece. E será efetivado somente quando o cliente optar por utilizar o serviço da empresa, identificando-se como membro do CISUM Club
              </p>
            </div>
            <div className='flex-col border border-primary m-4  items-center rounded-2xl md:h-[210px]  '>
              <h1 className='text-primary pt-0 pb-0 p-10 font-bold md:text-[15px] lg:text-[20px] mt-5 mb-4'>
                04 PROCEDIMENTO DO CLIENTE
              </h1>
              <p className='text-justify p-10 pt-0 md:text-[10px] lg:text-[15px]'>
                O cliente adquire um acesso mensal, anualou vitalício e, deve apresentar um documento de indentificação com foto e CPF à empresa, e a empresa após verifica a validade do cadastro concede o benefício. 
              </p>
            </div>
            <div className='flex-col border border-primary m-4  items-center rounded-2xl md:h-[210px] '>
              <h1 className='text-primary pt-0 pb-0 p-10 font-bold md:text-[15px] lg:text-[20px] mt-5 mb-4'>
                05 NETWORKING CRUZADO
              </h1>
              <p className='text-justify p-10 pt-0 md:text-[10px] lg:text-[15px]'>
                O cliente explora serviços no site do clube e, ao encontrar uma empresa, pode descobrir outros serviços. Assim, aempresa não só atende o cliente inicial, mas tambem fica em evidência pela busca de clientes de outras empresas parceiras.
              </p>
            </div>
            <div className='flex-col border border-primary m-4  items-center rounded-2xl md:h-[210px] '>
              <h1 className='text-primary pt-0 pb-0 p-10 font-bold md:text-[15px] lg:text-[20px] mt-5 mb-4'>
                06 COMO TORNAR PARCEIRO?
              </h1>
              <p className='text-justify p-10 pt-0 md:text-[10px] lg:text-[15px]'>
                Você pode informar qual benefício ou desconto oferecer, ou nos contatar para definirmos juntos a meçhor proposta para nossas clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index