export default function ExecuçaoFiscal() {
  return (
    <>
      <header className="w-full bg-[#253155] text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-didot tracking-wide ">
          Execução Fiscal
        </h1>
      </header>
      <main className="w-full max-w-4xl mx-auto px-4 ">
        <section className="my-10 text-left">
          <h2 className="text-[#253155] text-[2rem] mb-3 border-b-2 border-[#253155] pb-1">
            Defendemos você na Execução Fiscal
          </h2>
          <p className="mb-10 text-justify leading-relaxed">
            A execução fiscal é o processo judicial movido pelo Município para
            cobrar dívidas de Imposto sobre a Propriedade Predial e Territorial
            Urbana (IPTU) não pagas pelos contribuintes.
          </p>
          <h2 className="text-[#253155] text-[1.7rem] mb-3 border-b-2 border-[#253155] pb-1">
            O que é execução fiscal por dívidas de IPTU?
          </h2>
          <p className="mb-8 text-justify leading-relaxed">
            A execução fiscal é o processo judicial movido pelo Município para
            cobrar dívidas de Imposto sobre a Propriedade Predial e Territorial
            Urbana (IPTU) não pagas pelos contribuintes.
          </p>

          <h2 className="text-[#253155] text-[1.7rem] mb-3 border-b-2 border-[#253155] pb-1">
            Quais são as consequências de não pagar o IPTU?
          </h2>
          <p className="mb-8 text-justify leading-relaxed">
            Se o contribuinte não pagar o IPTU, o Município pode iniciar uma
            execução fiscal, que pode resultar em penhora de bens, bloqueio de
            contas bancárias e até mesmo leilão do imóvel para quitação da
            dívida.
          </p>

          <h2 className="text-[#253155] text-[1.7rem] mb-3 border-b-2 border-[#253155] pb-1">
            Como posso defender meus direitos como contribuinte em uma execução
            fiscal por dívidas de IPTU?
          </h2>
          <p className="mb-8 text-justify leading-relaxed">
            Um advogado especializado em direito tributário pode ajudar a
            defender seus direitos como contribuinte, analisando a legalidade da
            dívida, verificando se houve algum erro no cálculo do imposto, erro
            no procedimento judicial ou negociando um parcelamento ou desconto.
          </p>

          <h2 className="text-[#253155] text-[1.7rem] mb-3 border-b-2 border-[#253155] pb-1">
            É possível parcelar ou negociar a dívida de IPTU?
          </h2>
          <p className="mb-8 text-justify leading-relaxed">
            Sim, é possível parcelar ou negociar a dívida de IPTU. O município
            pode oferecer opções de parcelamento ou desconto para contribuintes
            que estejam dispostos a pagar a dívida. O nosso escritório auxilia
            nesse processo.
          </p>

          <h2 className="text-[#253155] text-[1.7rem] mb-3 border-b-2 border-[#253155] pb-1">
            Quais são os principais argumentos de defesa em uma execução fiscal
            por dívidas de IPTU?
          </h2>
          <p className="mb-8 text-justify leading-relaxed">
            Alguns dos principais argumentos de defesa incluem: erro no cálculo
            do imposto, falta de notificação adequada, prescrição da dívida,
            entre outros.
          </p>

          <h2 className="text-[#253155] text-[1.7rem] mb-3 border-b-2 border-[#253155] pb-1">
            Posso contestar a dívida de IPTU se eu achar que é injusta ou
            excessiva?
          </h2>
          <p className="mb-8 text-justify leading-relaxed">
            Sim, é possível contestar a dívida de IPTU se você achar que é
            injusta ou excessiva. Um advogado especializado em direito
            tributário pode ajudar a avaliar a situação e apresentar os
            argumentos necessários.
          </p>

          <h2 className="text-[#253155] text-[1.7rem] mb-3 border-b-2 border-[#253155] pb-1">
            Quanto tempo tenho para responder a uma execução fiscal por dívidas
            de IPTU?
          </h2>
          <p className="mb-8 text-justify leading-relaxed">
            Quando o contribuinte é intimado, ele tem 5 dias para pagar a dívida
            ou nomear bens para garantir a dívida até o fim do processo. É muito
            importante que você procure um advogado dentro desse prazo para
            evitar que sejam adotadas outras medidas de constrição, como por
            exemplo, bloqueio de conta bancária.
          </p>
        </section>

        {/* Call-to-Action */}
        <section id="cta-contact" className="my-10 text-left">
          <h2 className="text-[#253155] text-[2rem] mb-3 border-b-2 border-[#253155] pb-1">
            Receba o Contato de um Advogado Especialista
          </h2>
          <p className="mb-4 text-justify leading-relaxed">
            Vamos conversar sobre o seu caso sem compromisso. O processo de
            execução fiscal pode ser complexo e, em momentos delicados, é
            fundamental contar com a assessoria jurídica adequada.
          </p>
          <button className="cta-button bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-6 py-3 rounded-full transition-colors">
            Fale com o especialista
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 text-sm text-gray-600 border-t border-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Accacio Monteiro Barrozo. Todos os
          direitos reservados.
        </p>
      </footer>
      <div></div>
    </>
  );
}
