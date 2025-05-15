import Header from '../../components/hearder';
import { Button } from "@/components/ui/button";

function index() {
  return (
    <div className='flex flex-col w-full h-full justify-center bg-primary'>
      <div className='fixed top-0 left-0 w-full z-10 '>
        <Header />
      </div>
      <div className='pb-2 mt-10 flex-col w-full  justify-items-center items-center '>
        <h1 className='text-2xl text-white font-bold mb-5 mt-5 md:text-4xl'>
          Para Empresas
        </h1>
        <div className='w-2/3'>
          <p className=' text-white text-[10px] md:text-xl mb-5'>
            Ao se tornar parceiro do NFTudio, sua empresa oferece benefícios exclusivos aos nossos clientes, sem custos de adesão. A parceria é facilitada por contrato e permite que você alcance uma nova base de clientes, com fácil gestão de acessos e validação de benefícios. Entre em contato para mais informações!
          </p>
        </div>
        <div className=' grid md:grid-cols-2 gap-5 w-full h-full justify-items-center items-center'>
          <div className='flex-col h-[350px] w-[350px] justify-items-center rounded-lg p bg-white '>
            <h1 className='text-xl text-center  font-bold mb-5 mt-5 md:text-2xl'>
              Sem custos de adesão
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              No CISUM Cub, sua empresa pode se tornar uma parceira sem custos de adesão. A parceria é totalmente gratuita, permitindo que você aproveite os benefícios de ampliar sua visibilidade e conquistar novos clientes sem precisar investir em taxas iniciais. Apenas firmamos um contrato que garante que seus clientes tenham acesso aos benefícios exclusivos, e você começa a colher os resultados imediatamente.
            </p>
            <Button variant="default">Quero ser Parceiro</Button>
          </div>

          <div className='flex-col h-[350px] w-[350px] justify-items-center rounded-lg p bg-white '>
            <h1 className='text-xl text-center  font-bold mb-5 mt-5 md:text-2xl'>
              Acesso a uma nova base de clientes
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              Ser parceiro do CISUM Cub é uma excelente oportunidade para expandir o alcance de sua marca. Com nossa plataforma, sua empresa poderá se conectar com uma base de clientes altamente segmentada e interessada em ofertas exclusivas. Ao oferecer benefícios aos nossos usuários, sua empresa será exposta a um público novo e qualificado, aumentando suas chances de conversão e fidelização.
            </p>
            <Button variant="default">Quero ser Parceiro</Button>
          </div>

          <div className='flex-col h-[350px] w-[350px] justify-items-center rounded-lg p bg-white '>
            <h1 className='text-xl text-center font-bold mb-5 mt-5 md:text-2xl'>
              Ofereça benefícios exclusivos
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              Com a parceria no CISUM Club, você tem a oportunidade de oferecer benefícios exclusivos aos nossos clientes, criando uma vantagem competitiva para sua empresa. Isso aumenta o valor percebido de seus produtos ou serviços, além de fidelizar clientes que buscam ofertas únicas. A personalização dessas ofertas é uma maneira eficiente de fortalecer a relação com o cliente e destacar sua empresa no mercado.
            </p>
            <Button variant="default">Quero ser Parceiro</Button>
          </div>
          <div className='flex-col h-[350px] w-[350px] justify-items-center rounded-lg p bg-white '>
            <h1 className='text-xl text-center font-bold mb-5 mt-5 md:text-2xl'>
              Marketing Cruzado
            </h1>
            <p className='p-3 text-justify text-[13px]'>
              O marketing cruzado é uma estratégia poderosa que, ao ser aplicada no CISUM Club, permite que sua empresa aproveite o poder da colaboração para atingir um público mais amplo. Ao promover seus benefícios exclusivos em nossa plataforma, sua empresa se conecta com outras marcas e seus respectivos públicos, criando oportunidades para aumentar a visibilidade, atrair novos clientes e fortalecer sua presença no mercado. A parceria ganha-ganha torna o marketing mais eficaz e acessível.
            </p>
            <Button variant="default">Quero ser Parceiro</Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default index