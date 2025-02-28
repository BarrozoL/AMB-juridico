import { useState } from "react";
import "../css/Imobiliario.css";

export default function Imobiliario() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-geral imobiliario">
      <h1 className="main-title">
        Direito Imobiliário – Problemas com Obras/Construtoras
      </h1>

      <div className="intro-text">
        <p>
          Em razão do aquecimento do mercado imobiliário, muitos imóveis estão
          sendo oferecidos no mercado. Proporcionalmente ao aumento de vendas,
          tem-se observado o aumento das Ações Judiciárias em relação à
          reparação de defeitos no imóvel comprado, atraso na entrega da obra ou
          escritura definitiva (registro RGI) negada, por dívida da construtora
          junto ao banco.
        </p>

        <p>
          O desrespeito no ramo imobiliário, seja pelo descumprimento de prazos
          ou imperfeição na obra, tem se mostrado constante entre as
          construtoras, até mesmo nas grandes empreiteiras. Infelizmente, as
          tentativas amigáveis com as construtoras não alcançam sucesso, não
          restando outra opção ao consumidor, senão a de se socorrer no Poder
          Judiciário, para ter seu direito à indenização ou reparação do dano.
        </p>

        <p>
          Toda e qualquer empresa de engenharia e arquitetura tem, como primeiro
          dever legal, assegurar e responder pela perfeição da obra que realiza,
          ainda que essa circunstância não conste em nenhuma cláusula
          contratual, pois é inerente ao serviço. Este é apenas um exemplo do
          direito que o consumidor tem e deve saber para se proteger de
          possíveis danos adquiridos no processo de compra de um imóvel.
        </p>

        <p>
          A insatisfação com o financiamento do imóvel também é crescente e o
          conhecimento do consumidor sobre os seus direitos, escasso. Um fato
          que vem ocorrendo com certa frequência é a desistência da compra da
          casa própria. Tal fato se dá por diversas razões, como a do comprador
          não conseguir arcar com prestações excessivamente onerosas ou até a
          insatisfação com os serviços da construtora.
        </p>

        <p>
          <strong>
            Conheça os direitos dos compradores de imóveis na planta,
            diretamente com construtoras.
          </strong>
        </p>
      </div>

      <section className="problemas-section">
        <div className="problemas-header" onClick={toggleSection}>
          <h2>Principais problemas e vitórias nos tribunais</h2>
          <span className="arrow">{isOpen ? "▲" : "▼"}</span>
        </div>

        {isOpen && (
          <div className="problemas-content">
            <ul>
              <li>Atraso na entrega da obra</li>
              <li>Taxa Sati</li>
              <li>Comissão de corretagem</li>
              <li>Taxa de transferência</li>
              <li>Problemas estruturais no imóvel</li>
              <li>
                Lucro cessante pela perda da oportunidade de alugar o imóvel
              </li>
              <li>Indenização por dano moral – “Quebra de contrato”</li>
              <li>Correção do saldo devedor</li>
              <li>
                Conferência do empreendimento com o memorial descritivo por
                Perito Engenheiro
              </li>
              <li>Construção Civil</li>
              <li>Comissão de representantes</li>
              <li>Cobrança de Laudêmio</li>
              <li>
                Problema: Imóvel já quitado e ainda sem a baixa da hipoteca do
                imóvel por motivo de dívida da construtora com o banco
                financiador da obra.
                <br />
                <em>Solução: Ação de obrigação de fazer.</em>
              </li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
