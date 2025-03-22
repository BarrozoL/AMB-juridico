import { useState } from "react";

export default function AtrasoNaEntrega() {
  const [isLeiOpen, setIsLeiOpen] = useState(true);
  const [isCasoOpen, setIsCasoOpen] = useState(true);

  const toggleLeiSection = () => setIsLeiOpen((prev) => !prev);
  const toggleCasoSection = () => setIsCasoOpen((prev) => !prev);

  const handleContactClick = () => {
    alert(
      "Aqui você pode abrir um modal de contato ou redirecionar para uma página."
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 my-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-[#253155] text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
          Atraso na Entrega da Obra
        </h1>
        <button
          onClick={handleContactClick}
          className="bg-[#253155] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Fale com o especialista
        </button>
      </header>

      {/* Intro / Explanation Section */}
      <section className="mb-8">
        <p className="text-base leading-7 text-gray-700 mb-4">
          Atrasos na entrega de imóveis comprados na planta se tornaram cada vez
          mais comuns no meio imobiliário. Esse desrespeito pode causar
          transtornos aos compradores e gerar uma série de consequências, como o
          pagamento de indenizações pelas construtoras por danos materiais e
          morais, até o cancelamento do negócio, com a possibilidade, inclusive,
          de devolução integral das quantias pagas. Além de indenizar o
          consumidor pela frustração causada, a construtora deve, ainda, arcar
          com gastos de aluguéis.
        </p>
        <p className="text-base leading-7 text-gray-700 mb-4">
          Quem passa por esta situação nem sempre está preparado ou sabe quais
          são os seus direitos. Se o comprador optar por continuar com o imóvel
          mesmo com o atraso, tem direito a, entre outras coisas, indenização de
          1% do valor efetivamente pago à incorporadora, para cada mês de
          atraso, <em>pro rata die</em>, corrigido monetariamente conforme
          índice estipulado no contrato.
        </p>
        <p className="text-base leading-7 text-gray-700 mb-4">
          Se quiser desistir do negócio, existe ainda a possibilidade de
          resolução do contrato com a devolução do que foi pago devidamente
          corrigido com base no índice contratualmente estabelecido, acrescido
          de danos morais, materiais e lucros cessantes, caso comprovado em
          juízo.
        </p>
        <p className="text-base leading-7 text-gray-700">
          Importante contemplar a nova Lei Nº 13.786, DE 27 DE DEZEMBRO DE 2018:
          por atraso na obra, por culpa exclusiva da construtora, poderá ser
          promovida a devolução da integralidade de todos os valores pagos e da
          multa.
        </p>
      </section>

      {/* Lei Collapsible */}
      <section className="mb-8 border border-blue-200 rounded overflow-hidden">
        <div
          onClick={toggleLeiSection}
          className="bg-[#253155] hover:bg-blue-700 text-white px-4 py-3 flex justify-between items-center cursor-pointer"
        >
          <h2 className="text-lg font-semibold">
            Lei Nº 13.786, de 27 de dezembro de 2018
          </h2>
          <span className="text-xl">{isLeiOpen ? "▲" : "▼"}</span>
        </div>
        {isLeiOpen && (
          <div className="bg-gray-50 px-6 py-4">
            <p className="text-base leading-7 text-gray-800 mb-4">
              “Art. 43-A. A entrega do imóvel em até 180 (cento e oitenta) dias
              corridos da data estipulada contratualmente como data prevista
              para conclusão do empreendimento, desde que expressamente
              pactuado, de forma clara e destacada, não dará causa à resolução
              do contrato por parte do adquirente nem ensejará o pagamento de
              qualquer penalidade pelo incorporador.
            </p>
            <p className="text-base leading-7 text-gray-800">
              §1º Se a entrega do imóvel ultrapassar o prazo estabelecido no
              caput deste artigo, desde que o adquirente não tenha dado causa ao
              atraso, poderá ser promovida por este a resolução do contrato, sem
              prejuízo da devolução da integralidade de todos os valores pagos e
              da multa estabelecida, em até 60 (sessenta) dias corridos contados
              da resolução, corrigidos nos termos do § 8º do art. 67-A desta
              Lei.”
            </p>
          </div>
        )}
      </section>

      {/* Caso Resolvido Collapsible */}
      <section className="mb-8 border border-blue-200 rounded overflow-hidden">
        <div
          onClick={toggleCasoSection}
          className="bg-[#253155] hover:bg-blue-700 text-white px-4 py-3 flex justify-between items-center cursor-pointer"
        >
          <h2 className="text-lg font-semibold">Veja um Caso Resolvido</h2>
          <span className="text-xl">{isCasoOpen ? "▲" : "▼"}</span>
        </div>
        {isCasoOpen && (
          <div className="bg-gray-50 px-6 py-4">
            <p className="text-base leading-7 text-gray-800 mb-4 font-semibold">
              Construtora é condenada a pagar R$ 41,3 mil por não entregar
              imóvel no prazo
            </p>
            <p className="text-base leading-7 text-gray-800 mb-4">
              A Porto Freire Engenharia e Incorporação deve pagar R$ 10 mil de
              indenização moral para cliente que comprou imóvel e não recebeu no
              prazo. Também terá de devolver os valores pagos, a título de
              sinal, no total de R$ 30 mil, e o aluguel de R$ 1,3 mil, gastos
              pela cliente por causa do atraso na entrega do imóvel. A decisão,
              proferida nessa quarta-feira (22/05), é da 1ª Câmara de Direito
              Privado do Tribunal de Justiça do Ceará (TJCE).
            </p>
            <p className="text-base leading-7 text-gray-800 mb-4">
              Segundo a relatora do processo, desembargadora Vera Lúcia Correia
              Lima, “a inexecução do contrato pelo promitente vendedor, que não
              entrega o imóvel na data estipulada, causa, além do dano
              emergente, figurado nos valores das parcelas pagas pelo promitente
              comprador, lucros cessantes a título de alugueres”.
            </p>
            <p className="text-base leading-7 text-gray-800 mb-4">
              Conforme os autos, em setembro de 2012, a mulher adquiriu o imóvel
              (apartamento), no Condomínio Cruzeiro do Sul, localizado na
              avenida Ministro José Américo, em Fortaleza. A previsão de entrega
              era junho de 2015, com tolerância de 180 dias. No entanto, o prazo
              não foi cumprido.
            </p>
            <p className="text-base leading-7 text-gray-800 mb-4">
              Por isso, ela ajuizou ação requerendo a rescisão do contrato com o
              reembolso do valor que pagou, devidamente atualizado, além de
              indenização por danos morais e materiais. Alegou que, em virtude
              da demora, teve de pagar aluguel, o que causou grande
              constrangimento, pois à época estava grávida.
            </p>
            <p className="text-base leading-7 text-gray-800 italic">
              Fonte: TJCE - Tribunal de Justiça do Ceará - 24/05/2019
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
