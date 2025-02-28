import { useState } from "react";
import "../css/AtrasoNaEntrega.css";

export default function AtrasoNaEntrega() {
  const [isLeiOpen, setIsLeiOpen] = useState(true);
  const [isCasoOpen, setIsCasoOpen] = useState(true);

  const toggleLeiSection = () => {
    setIsLeiOpen(!isLeiOpen);
  };

  const toggleCasoSection = () => {
    setIsCasoOpen(!isCasoOpen);
  };

  const handleContactClick = () => {
    alert(
      "Aqui você pode abrir um modal de contato ou redirecionar para uma página."
    );
  };

  return (
    <div className="container-atraso">
      <header className="atraso-header">
        <h1>Atraso na Entrega da Obra</h1>
        <button className="btn-specialista" onClick={handleContactClick}>
          Fale com o especialista
        </button>
      </header>

      {/* Intro / Explanation Section */}
      <section className="intro-section">
        <p>
          Atrasos na entrega de imóveis comprados na planta se tornaram cada vez
          mais comuns no meio imobiliário. Esse desrespeito pode causar
          transtornos aos compradores e gerar uma série de consequências, como o
          pagamento de indenizações pelas construtoras por danos materiais e
          morais, até o cancelamento do negócio, com a possibilidade, inclusive,
          de devolução integral das quantias pagas. Além de indenizar o
          consumidor pela frustração causada, a construtora deve, ainda, arcar
          com gastos de aluguéis.
        </p>

        <p>
          Quem passa por esta situação nem sempre está preparado ou sabe quais
          são os seus direitos. Se o comprador optar por continuar com o imóvel
          mesmo com o atraso, tem direito a, entre outras coisas, indenização de
          1% do valor efetivamente pago à incorporadora, para cada mês de
          atraso, <em>pro rata die</em>, corrigido monetariamente conforme
          índice estipulado no contrato.
        </p>

        <p>
          Se quiser desistir do negócio, existe ainda a possibilidade de
          resolução do contrato com a devolução do que foi pago devidamente
          corrigido com base no índice contratualmente estabelecido, acrescido
          de danos morais, materiais e lucros cessantes, caso comprovado em
          juízo.
        </p>

        <p>
          Importante contemplar a nova Lei Nº 13.786, DE 27 DE DEZEMBRO DE 2018:
          por atraso na obra, por culpa exclusiva da construtora, poderá ser
          promovida a devolução da integralidade de todos os valores pagos e da
          multa.
        </p>
      </section>

      {/* Lei Collapsible */}
      <section className="collapsible-wrapper">
        <div className="collapsible-header" onClick={toggleLeiSection}>
          <h2>Lei Nº 13.786, de 27 de dezembro de 2018</h2>
          <span className="arrow">{isLeiOpen ? "▲" : "▼"}</span>
        </div>
        {isLeiOpen && (
          <div className="collapsible-content">
            <p>
              “Art. 43-A. A entrega do imóvel em até 180 (cento e oitenta) dias
              corridos da data estipulada contratualmente como data prevista
              para conclusão do empreendimento, desde que expressamente
              pactuado, de forma clara e destacada, não dará causa à resolução
              do contrato por parte do adquirente nem ensejará o pagamento de
              qualquer penalidade pelo incorporador.
            </p>
            <p>
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
      <section className="collapsible-wrapper">
        <div className="collapsible-header" onClick={toggleCasoSection}>
          <h2>Veja um Caso Resolvido</h2>
          <span className="arrow">{isCasoOpen ? "▲" : "▼"}</span>
        </div>
        {isCasoOpen && (
          <div className="collapsible-content">
            <p>
              <strong>
                Construtora é condenada a pagar R$ 41,3 mil por não entregar
                imóvel no prazo
              </strong>
            </p>
            <p>
              A Porto Freire Engenharia e Incorporação deve pagar R$ 10 mil de
              indenização moral para cliente que comprou imóvel e não recebeu no
              prazo. Também terá de devolver os valores pagos, a título de
              sinal, no total de R$ 30 mil, e o aluguel de R$ 1,3 mil, gastos
              pela cliente por causa do atraso na entrega do imóvel. A decisão,
              proferida nessa quarta-feira (22/05), é da 1ª Câmara de Direito
              Privado do Tribunal de Justiça do Ceará (TJCE).
            </p>
            <p>
              Segundo a relatora do processo, desembargadora Vera Lúcia Correia
              Lima, “a inexecução do contrato pelo promitente vendedor, que não
              entrega o imóvel na data estipulada, causa, além do dano
              emergente, figurado nos valores das parcelas pagas pelo promitente
              comprador, lucros cessantes a título de alugueres”.
            </p>
            <p>
              Conforme os autos, em setembro de 2012, a mulher adquiriu o imóvel
              (apartamento), no Condomínio Cruzeiro do Sul, localizado na
              avenida Ministro José Américo, em Fortaleza. A previsão de entrega
              era junho de 2015, com tolerância de 180 dias. No entanto, o prazo
              não foi cumprido.
            </p>
            <p>
              Por isso, ela ajuizou ação requerendo a rescisão do contrato com o
              reembolso do valor que pagou, devidamente atualizado, além de
              indenização por danos morais e materiais. Alegou que, em virtude
              da demora, teve de pagar aluguel, o que causou grande
              constrangimento, pois à época estava grávida.
            </p>
            <p>
              Na contestação, a Porto Freire defendeu que o movimento grevista
              da classe dos trabalhadores da construção civil e as fortes chuvas
              afetaram a obra e a entrega do imóvel. Sustentou o não cabimento
              dos danos moral e material e pleiteou a improcedência do pleito
              autoral.
            </p>
            <p>
              Em março de 2017, o Juízo da 29ª Vara Cível de Fortaleza condenou
              a construtora a ressarcir os valores já pagos, no total de R$ 41,3
              mil, além de rescindir o contrato de compra e venda. Inconformada
              com a decisão, a construtora interpôs apelação (nº
              0117493-94.2016.8.06.0001) no TJCE, reiterando os mesmos
              argumentos da contestação.
            </p>
            <p>
              Ao analisar o caso, a 1ª Câmara de Direito Privado negou
              provimento ao recurso da empresa, mantendo a sentença de 1º Grau.
              Para a relatora, “a indenização, como cediço, deve ser fixada
              segundo critérios de razoabilidade e proporcionalidade, buscando
              compensar a parte lesada pelos prejuízos vivenciados, sem implicar
              no enriquecimento indevido do indenizado, e punir o agente,
              inibindo-o na adoção de novas condutas ilícitas”.
            </p>
            <p className="fonte-text">
              Fonte: TJCE - Tribunal de Justiça do Ceará - 24/05/2019
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
