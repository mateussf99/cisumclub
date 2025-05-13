import Header from '../../components/hearder'
import { Button } from "@/components/ui/button";

function index() {
  return (
    <div className='flex flex-col w-full h-full justify-center bg-white'>
        <div className='fixed top-0 left-0 w-full z-10 '>
            <Header />
        </div>
        <div className='bg-primary  mt-10 flex-col w-full h-full justify-center items-center'>
          <div className='flex justify-center'>
            <h1 className='text-2xl text-white font-bold mb-5'>
            Nossos Planos
          </h1>
          </div>
          
          <div className=' bg-primary flex-col w-full h-screen justify-center items-center'>
            <div className='flex flex-col  gap-5 w-full h-full justify-center items-center'>
              <div className='bg-white w-[200px] h-[250px] rounded-lg shadow-lg flex flex-col justify-center items-center'>
                <h1 className='text-[15px] text-primary font-bold '>
                  Plano Básico
                </h1>
                <p className='font-bold text-4xl'>
                  <span className='text-[10px]'>R$</span> 29,90
                </p>
                <p className='text-[10px]  mb-5'>
                  Por mês!
                </p>
                <Button variant="default">Eu Quero</Button>
              </div>
              

              <div className='bg-white w-[200px] h-[250px] rounded-lg shadow-lg flex flex-col justify-center items-center'>
                <h1 className='text-[15px] text-primary font-bold '>
                  Plano Vitalício
                </h1>
                <p className='font-bold text-xl'>
                  Preço a consultar*.
                </p>
                <p className='text-[8px]  mb-5'>
                  Pagamento único a partir de US$ 10,00
                </p>
                <Button variant="default">Lista de espera</Button>
              </div>

              <div className='bg-white w-[200px] h-[250px] rounded-lg shadow-lg flex flex-col justify-center items-center'>
                <h1 className='text-[15px] text-primary font-bold '>
                  Plano Anual
                </h1>
                <p className='font-bold text-4xl'>
                  <span className='text-[10px]'>R$</span> 249,90
                </p>
                <p className='text-[10px]  mb-5'>
                  Por Ano!
                </p>
                <Button variant="default">Eu Quero</Button>
              </div>

            </div>
          </div>

        </div>
    </div>
  )
}

export default index