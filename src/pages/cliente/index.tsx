import { Button } from "@/components/ui/button";


function index() {
  return (
    <div className='flex flex-col w-full h-full justify-center bg-white'>
      <div className=' bg-primary  flex-col w-full  justify-items-center items-center '>
        <h1 className='text-3xl text-white font-bold mb-5 mt-5 md:text-5xl'>
          Nossos Planos
        </h1>
        <div className='flex flex-col md:flex-row  gap-5 w-full h-full justify-center items-center lg:items-stretch p-2 '>
          <div className='bg-white w-[200px] h-[300px] rounded-lg shadow-lg flex flex-col justify-center items-center md:h-[300px] md:mt-7'>
            <h1 className='text-[15px] text-primary font-bold '>
              Plano Básico
            </h1>
            <p className='font-bold text-4xl'>
              <span className='text-[10px]'>R$</span>29,90
            </p>
            <p className='text-[10px]  mb-5'>
              Por mês!
            </p>
            <Button 
              variant="default"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdWfm7hib3maPR4FKf0M8tef61spSS45Hj1Ac1yTyxX5z8D2Q/viewform', '_blank', 'noopener,noreferrer')}
            >
              Eu Quero
            </Button>
          </div>
          

          <div className='bg-white w-[200px] h-[300px] md:h-[350px] rounded-lg shadow-lg flex flex-col justify-center items-center'>
            <h1 className='text-[15px] text-primary font-bold '>
              Plano Vitalício
            </h1>
            <p className='font-bold text-xl'>
              Preço a consultar*.
            </p>
            <p className='text-[10px]  mb-5'>
              Pagamento único a partir de US$ 10,00
            </p>
            <Button 
              variant="default"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmyMWsiI1PR6K4QOgRA4aSMLmcCtJ_ITrqDLRAr-4jnMsnRA/viewform', '_blank', 'noopener,noreferrer')}
            >
              Lista de espera
            </Button>
          </div>

          <div className='bg-white w-[200px] h-[300px] rounded-lg shadow-lg flex flex-col justify-center items-center md:h-[300px] md:mt-7'>
            <h1 className='text-[15px] text-primary font-bold '>
              Plano Anual
            </h1>
            <p className='font-bold text-4xl'>
              <span className='text-[10px]'>R$</span>249,90
            </p>
            <p className='text-[10px]  mb-5'>
              Por Ano!
            </p>
            <Button 
              variant="default"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdWfm7hib3maPR4FKf0M8tef61spSS45Hj1Ac1yTyxX5z8D2Q/viewform', '_blank', 'noopener,noreferrer')}
            >
              Eu Quero
            </Button>
          </div>

        </div>
      </div>
      
      <div className='bg-white pb-10 mt-10 flex flex-col w-full h-screen gap-4  items-center md:flex-row'>
        <div className='flex-col justify-items-center items-center md:w-1/2'>
          <h1 className='text-xl font-bold'>
            Preço do Plano Vitalício
          </h1>
          <div className=''>
            <p className='text-[10px] md:text-[20px] mb-5 p-10 text-justify'>
              Estamos oferecendo um número limitado de 10.000 passes vitalícios para o CISUM Club. Após esgotados, a associação será possível apenas por meio dos planos mensal e anual. <br />
              🔒O Plano Vitalício é pessoal, mas flexível: você terá a liberdade de revendê-lo no futuro, caso deseje. <br />
              💰Precificação Progressiva:Funciona como lotes de ingressos para eventos: a cada 100 passes vendidos, o valor aumenta em $10,00 (dólares). Quanto antes você garantir o seu, mais econômico será! <br />
              🎯Garanta já o seu lugar no CISUM Club e aproveite essa exclusividade antes que os preços subam! <br />
              A tabela ao lado mostra como funciona:
            </p>
          </div>
          <Button 
            variant="default"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmyMWsiI1PR6K4QOgRA4aSMLmcCtJ_ITrqDLRAr-4jnMsnRA/viewform', '_blank', 'noopener,noreferrer')}
            className="md:text-xl"
          >
            Lista de espera
          </Button>
          
        </div>
      <div className='flex-col mt-4 md:w-1/2 justify-items-center'>
        <h1 className='text-xl text-center font-bold mb-5'>
          Preço de Cada Unidade de Plano Vitalício
        </h1>
        <div className='flex p-5 gap-10 justify-between'>
          <div>
            <h1 className=' font-bold'>
              Nº DO LOTE
            </h1>
            <p className='text-[10px] md:text-2xl'>
              Cliente Vitalício 1 a 100 <br />
              Cliente Vitalício 101 a 200 <br />
              Cliente Vitalício 201 a 300 <br />
              Cliente Vitalício 301 a 400 <br />
              Cliente Vitalício 401 a 500 <br />
              Cliente Vitalício 501 a 600 <br />
              Cliente Vitalício 601 a 700 <br />
              Cliente Vitalício 701 a 800 <br />
              Cliente Vitalício 801 a 900 <br />
                        .                <br />
                        .                <br />
                        .                <br />
              Cliente Vitalício 9901 a 10000 <br />
            </p>
          </div>
          <div>
            <h1 className=' font-bold'>
              VALOR DO LOTE
            </h1>
            <p className='text-[10px] md:text-2xl'>
              U$10,00 <br />
              U$20,00 <br />
              U$30,00 <br />
              U$40,00 <br />
              U$50,00 <br />
              U$60,00 <br />
              U$70,00 <br />
              U$80,00 <br />
              U$90,00 <br />
                  .       <br />
                  .       <br />
                  .       <br />
              U$1.000,00 <br />
            </p>
          </div>

        </div>
        
      </div>
      </div>
    </div>
  )
}

export default index