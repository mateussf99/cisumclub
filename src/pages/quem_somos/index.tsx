
import Header from '../../components/hearder'

function index() {
  return (
    <div className='flex flex-col w-full h-full justify-center bg-white'>
        <div className='fixed top-0 left-0 w-full z-10 '>
            <Header />
        </div>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center p-5'>
                <h1 className='text-xl font-bold text-primary'>
                    Quem somos nós
                </h1>
                <p className=' text-justify text-[10px] font-bold  mt-4'>
                   Somos uma startup alagoana, acelerada pelo programa Centelha 2, que tem como objetivo impulsionar ideias inovadoras e transformar projetos em negócios de sucesso. Nossa missão é conectar pessoas a um universo de benefícios exclusivos, oferecendo descontos e ofertas em diversos segmentos, sempre com foco em qualidade, conveniência e inovação. Com o apoio do Centelha 2, buscamos crescer de forma sustentável, impactando positivamente a vida dos nossos membros e contribuindo para o desenvolvimento da economia local e regional.
                </p>
            </div>
        </div>
    </div>
  )
}

export default index