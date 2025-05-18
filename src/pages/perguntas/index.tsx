
function index() {
  return (
     <div className="max-w-4xl mx-auto p-6 space-y-12 text-justify">
      <section>
        <h1 className="text-4xl font-bold text-center">Perguntas Frequentes (FAQ) - CISUM Club</h1>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">O que é o CISUM Club?</h2>
        <p>
          O CISUM Club é um programa de benefícios que oferece vantagens exclusivas em estabelecimentos
          parceiros. Nossos membros podem usufruir de descontos e promoções especiais ao apresentarem seu
          CPF nos locais participantes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Como posso me tornar um membro do CISUM Club?</h2>
        <p>
          Para se associar, acesse nosso site oficial e escolha o plano que melhor se adapta às suas necessidades.
          Após a confirmação do pagamento, seu CPF será habilitado para utilização nos estabelecimentos
          parceiros.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Quais são os planos de assinatura disponíveis?</h2>
        <p>Oferecemos os seguintes planos:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Mensal:</strong> R$ 29,90 por mês</li>
          <li><strong>Anual:</strong> R$ 249,90 por ano</li>
          <li><strong>Vitalício:</strong> Valor em pagamento único A PARTIR de US$ 10,00</li>
        </ul>
        <p className="mt-2">
          Os valores podem ser alterados a qualquer momento, mas garantimos que o preço do seu plano permanecerá o mesmo durante o período contratado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Como utilizo os benefícios do CISUM Club nos estabelecimentos parceiros?</h2>
        <p>
          Ao visitar um estabelecimento parceiro, informe que é membro do CISUM Club e forneça seu CPF. O atendente verificará seu status de membro ativo e aplicará o benefício correspondente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Existe um limite de uso dos benefícios?</h2>
        <p>
          Não. Você pode aproveitar os benefícios do CISUM Club quantas vezes desejar, respeitando as regras específicas de cada estabelecimento parceiro.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Posso revender meu passe vitalício?</h2>
        <p>
          Sim! Os passes vitalícios do CISUM Club podem ser revendidos, mas somente através do próprio CISUM Club. Caso deseje vender seu passe, basta entrar em contato conosco para disponibilizá-lo para revenda. Assim que um novo comprador adquiri-lo, realizaremos a transferência de titularidade, e o novo proprietário poderá usufruir dos benefícios. O processo de atualização no sistema será concluído em até 72 horas após a venda.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Qual o limite de passes vitalícios que posso comprar?</h2>
        <p>
          No CISUM Club, não há limite para a quantidade de passes vitalícios que um usuário pode adquirir, desde que respeite as regras do Sistema de Precificação Progressiva (SPP). Isso significa que o valor dos passes aumentará conforme mais unidades forem vendidas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Como faço para cancelar minha assinatura?</h2>
        <p>
          O cancelamento pode ser realizado a qualquer momento através do nosso e-mail. O processo de atualização no sistema será concluído em até 72 horas após a sua solicitação.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Posso indicar novos parceiros para o CISUM Club?</h2>
        <p>
          Sim! Valorizamos as sugestões dos nossos membros. Se você conhece um estabelecimento que gostaria de ver como parceiro, entre em contato conosco através do e-mail: contato@cisumclub.com
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Como posso entrar em contato com o suporte do CISUM Club?</h2>
        <p>
          Estamos à disposição para ajudá-lo. Você pode nos contatar pelo e-mail contato@cisumclub.com
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Os benefícios são válidos em todas as cidades?</h2>
        <p>
          Atualmente, nossos parceiros estão localizados principalmente em Maceió e em algumas cidades de Alagoas. Estamos constantemente expandindo nossa rede de parceiros para outras cidades. Mantenha-se atualizado através do nosso site para novidades.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Como posso acompanhar as novidades e novos parceiros do CISUM Club?</h2>
        <p>
          Recomendamos que você visite regularmente nosso site e siga nossas redes sociais para ficar por dentro das últimas atualizações e novos parceiros adicionados ao CISUM Club.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Como funciona o Sistema de Precificação Progressiva para os passes vitalícios?</h2>
        <p>
          O CISUM Club adota um modelo de precificação progressiva para os passes vitalícios, onde o preço aumenta conforme mais passes são vendidos. O valor inicial começa em $10 para os primeiros 100 compradores e aumenta $10 a cada novo grupo de 100 passes vendidos. Assim, os passes de 101 a 200 custam $20, os de 201 a 300 custam $30, e assim por diante. Esse sistema continua até que os últimos 100 passes disponíveis (de 9.901 a 10.000) alcancem o valor final de $1.000 cada.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Ainda tem dúvidas?</h2>
        <p className="mt-2">
          Entre em contato conosco através do e-mail: <span className="text-blue-600 font-medium">contato@cisumclub.com</span>
        </p>
      </section>
    </div>
  )
}

export default index