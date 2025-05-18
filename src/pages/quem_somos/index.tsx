function index() {
  return (
    <div className='flex flex-col w-full min-h-screen bg-white'>
        <div className='flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center p-5 md:p-30 mb-8'>
                <h1 className='text-xl md:text-3xl font-bold text-primary'>
                    Quem somos nós
                </h1>
                <p className='text-justify text-[10px] md:text-xl font-bold mt-4'>
                   Somos uma startup alagoana, acelerada pelo programa Centelha 2, que tem como objetivo impulsionar ideias inovadoras e transformar projetos em negócios de sucesso. Nossa missão é conectar pessoas a um universo de benefícios exclusivos, oferecendo descontos e ofertas em diversos segmentos, sempre com foco em qualidade, conveniência e inovação. Com o apoio do Centelha 2, buscamos crescer de forma sustentável, impactando positivamente a vida dos nossos membros e contribuindo para o desenvolvimento da economia local e regional.
                </p>
            </div>
            <div className='flex flex-col md:flex-row mb-12'>
                <div className='flex flex-col p-10 items-center md:w-1/3'>
                    <h1 className='text-xl md:text-2xl font-bold text-primary'>
                        Missão
                    </h1>
                    <p className='text-justify text-[10px] md:text-xl font-bold mt-4'>
                        Oferecer aos nossos membros acesso a benefícios exclusivos e personalizados, proporcionando experiências que agregam valor ao seu dia a dia e transformam a forma como consomem produtos e serviços, com foco em qualidade, conveniência e inovação.
                    </p>
                </div>
                <div className='flex flex-col p-10 items-center md:w-1/3'>
                    <h1 className='text-xl md:text-2xl font-bold text-primary'>
                        Visão
                    </h1>
                    <p className='text-justify text-[10px] md:text-xl font-bold mt-4'>
                        Ser o <span className='text-primary'>MAIOR</span> clube de benefícios do Brasil, reconhecido pela excelência em conectar pessoas a um mundo de vantagens.
                    </p>
                </div>
                <div className='flex flex-col items-center p-5 md:w-1/3'>
                    <h1 className='text-xl md:text-2xl font-bold text-primary mt-5'>
                        Valores
                    </h1>
                    <p className='text-justify text-[10px] md:text-xl font-bold'>
                        <span className='text-primary'>Compromisso:</span> Entregar sempre o melhor aos nossos membros, com responsabilidade e dedicação.<br/>
                        <span className='text-primary'>Inovação:</span> Buscar constantemente novas formas de oferecer benefícios exclusivos e de qualidade.<br/>
                        <span className='text-primary'>Conveniência:</span> Facilitar a vida dos nossos membros, proporcionando soluções práticas e acessíveis.<br/>
                        <span className='text-primary'>Ética e Transparência: </span>Atuar com honestidade, clareza e respeito em todas as nossas ações e relacionamentos.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index