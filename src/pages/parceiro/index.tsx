import { Button } from "@/components/ui/button";

function index() {
  return (
    <div className='flex flex-col w-full h-full justify-center bg-primary'>
      <div className='pb-2 mt-10 flex-col w-full  justify-items-center items-center '>
        <h1 className='text-2xl text-white font-bold mb-5 mt-5 md:text-4xl'>
          Para Empresas
        </h1>
        <div className='w-2/3'>
          <p className=' text-white text-[10px] md:text-xl mb-5'>
            Ao se tornar parceiro do NFTudio, sua empresa oferece benefícios exclusivos aos nossos clientes, sem custos de adesão. A parceria é facilitada por contrato e permite que você alcance uma nova base de clientes, com fácil gestão de acessos e validação de benefícios. Entre em contato para mais informações!
          </p>
        </div>
        <div className=' grid md:grid-cols-2 gap-50 h-full justify-items-center items-center'>
          <div className='flex-col h-[400px] w-[350px] justify-items-center rounded-lg  bg-white content-around '>
            <h1 className='text-xl text-center  font-bold mb-5 mt-5 md:text-2xl'>
              Sem custos de adesão
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              No CISUM Cub, sua empresa pode se tornar uma parceira sem custos de adesão. A parceria é totalmente gratuita, permitindo que você aproveite os benefícios de ampliar sua visibilidade e conquistar novos clientes sem precisar investir em taxas iniciais. Apenas firmamos um contrato que garante que seus clientes tenham acesso aos benefícios exclusivos, e você começa a colher os resultados imediatamente.
            </p>
            <Button 
            variant="default"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdt3aR3E5CMQpoPsEGZoZ_NHk_3LRlzdDGjZBHpFg9uIAVuOQ/viewform', '_blank', 'noopener,noreferrer')}
            >
              Quero ser Parceiro
            </Button>
          </div>

          <div className='flex-col h-[400px] w-[350px] justify-items-center rounded-lg content-around  bg-white '>
            <h1 className='text-xl text-center  font-bold mb-5 mt-5 md:text-2xl'>
              Acesso a uma nova base de clientes
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              Ser parceiro do CISUM Cub é uma excelente oportunidade para expandir o alcance de sua marca. Com nossa plataforma, sua empresa poderá se conectar com uma base de clientes altamente segmentada e interessada em ofertas exclusivas. Ao oferecer benefícios aos nossos usuários, sua empresa será exposta a um público novo e qualificado, aumentando suas chances de conversão e fidelização.
            </p>
            <Button 
            variant="default"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdt3aR3E5CMQpoPsEGZoZ_NHk_3LRlzdDGjZBHpFg9uIAVuOQ/viewform', '_blank', 'noopener,noreferrer')}
            >
              Quero ser Parceiro
            </Button>
          </div>

          <div className='flex-col h-[400px] w-[350px] justify-items-center rounded-lg  bg-white content-around '>
            <h1 className='text-xl text-center font-bold mb-5 mt-5 md:text-2xl'>
              Ofereça benefícios exclusivos
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              Com a parceria no CISUM Club, você tem a oportunidade de oferecer benefícios exclusivos aos nossos clientes, criando uma vantagem competitiva para sua empresa. Isso aumenta o valor percebido de seus produtos ou serviços, além de fidelizar clientes que buscam ofertas únicas. A personalização dessas ofertas é uma maneira eficiente de fortalecer a relação com o cliente e destacar sua empresa no mercado.
            </p>
            <Button 
            variant="default"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdt3aR3E5CMQpoPsEGZoZ_NHk_3LRlzdDGjZBHpFg9uIAVuOQ/viewform', '_blank', 'noopener,noreferrer')}
            >
              Quero ser Parceiro
            </Button>
          </div>
          <div className='flex-col h-[400px] w-[350px] justify-items-center rounded-lg  bg-white content-around '>
            <h1 className='text-xl text-center font-bold mb-5 mt-5 md:text-2xl'>
              Marketing Cruzado
            </h1>
            <p className='p-3 text-justify text-[13px]'>
              O marketing cruzado é uma estratégia poderosa que, ao ser aplicada no CISUM Club, permite que sua empresa aproveite o poder da colaboração para atingir um público mais amplo. Ao promover seus benefícios exclusivos em nossa plataforma, sua empresa se conecta com outras marcas e seus respectivos públicos, criando oportunidades para aumentar a visibilidade, atrair novos clientes e fortalecer sua presença no mercado. A parceria ganha-ganha torna o marketing mais eficaz e acessível.
            </p>
            <Button 
            variant="default"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdt3aR3E5CMQpoPsEGZoZ_NHk_3LRlzdDGjZBHpFg9uIAVuOQ/viewform', '_blank', 'noopener,noreferrer')}
            >
              Quero ser Parceiro
            </Button>
          </div>
        </div>
        
      </div>
      <div className='flex-col w-full h-screen bg-white justify-items-center items-center '>
        <h1 className='text-2xl text-primary font-bold mb-5 mt-13 md:text-4xl'>
          Como funciona o processo de verificação?
        </h1>
        <div className='flex flex-col gap-10 md:flex-row justify-items-center items-center mt-20 '>
          <div className='flex-col h-[350px] w-[350px] justify-items-center rounded-lg border border-primary bg-white relative content-around'>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
                1
              </div>
            </div>
            <h1 className='text-xl text-center font-bold mb-5 mt-5 md:text-2xl'>
              O cliente é membro e quer comprar, como faço?
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              O primeiro passo para se tornar um parceiro do CISUM Club é preencher o formulário de parceria disponível em nosso site. Nele, você fornecerá informações sobre sua empresa e os benefícios que deseja oferecer aos nossos clientes.
            </p>
            <Button 
            variant="default"
            onClick={() => window.open('https://wa.me/5582999181421', '_blank', 'noopener,noreferrer')}
            >
              Verificar Cliente
            </Button>
          </div>

          <div className='flex-col h-[350px] w-[350px] justify-items-center rounded-lg border border-primary p bg-white relative content-around '>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
                2
              </div>
            </div>
            <h1 className='text-xl text-center font-bold mb-5 mt-5 md:text-2xl'>
              O cadastro está válido, o que faço?
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              Perfeito! Se o cadastro está válido, basta fornecer o benefício definido pela parceria, e pronto! Simples assim!

            </p>
            <Button 
            variant="default"
            onClick={() => window.open('https://wa.me/5582999181421', '_blank', 'noopener,noreferrer')}
            >
              Verificar Cliente
            </Button>
          </div>

          <div className='flex-col h-[350px] w-[350px] justify-items-center rounded-lg border border-primary p bg-white relative content-around '>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
                3
              </div>
            </div>
            <h1 className='text-xl text-center font-bold mb-5 mt-5 md:text-2xl'>
              O cadastro está vencido! E agora?
            </h1>
            <p className='p-3 mb-5 text-justify text-[13px]'>
              Tranquilo, acontece. Agora você informa ao cliente que o cadastro dele está inválido, e por este motivo não conseguimos fornecer o benefício pré acordado. Pede para ele entrar em contato com a gente para que possamos entender o por quê e viabilizar da melhor maneira para que ele possa renovar e voltar a ser membro!

            </p>
            <Button 
            variant="default"
            onClick={() => window.open('https://wa.me/5582999181421', '_blank', 'noopener,noreferrer')}
            >
              Verificar Cliente
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default index