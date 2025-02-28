import "../css/devoluçaoDeImovel.css";
import React from "react";

const DevolucaoImovel = () => {
  return (
    <div className="devolucao-container">
      <header className="devolucao-header">
        <h1>Devolução de Imóvel</h1>
        <p>
          Na maioria dos casos, você pode reaver mais de 80% do valor investido.
        </p>
        <br />
        <button className="contact-button">Fale com um Especialista</button>
        <br />
        <br />
      </header>

      <section className="devolucao-content">
        <p>
          Com a crise econômica que o país vem passando, é cada vez maior o
          número de pessoas que necessitam desistir da compra do seu tão sonhado
          imóvel. O Distrato de Contrato de Imóvel se tornou uma das principais
          causas de processos contra construtoras em todo território nacional.
        </p>
        <p>
          Ninguém adquire um imóvel planejando desistir da compra, mas situações
          adversas tornam o distrato de imóvel a única opção. Pessoas que
          perderam o emprego ou estão com uma renda inferior ao planejado, não
          têm mais condições de arcar com os custos das parcelas mensalmente.
        </p>
        <p>
          Nessas situações, o consumidor tem o direito de distrato de imóvel,
          que está previsto em Lei (Lei 4.591/64). Os valores devem ser
          devolvidos devidamente corrigidos em parcela única pela construtora,
          sendo o comprador inadimplente ou não. Contudo, solicitar esse
          rompimento de contrato não é uma tarefa fácil.
        </p>
      </section>

      <section className="devolucao-rights">
        <h2>Saiba seus direitos</h2>
        <p>
          Existem casos em que a construtora tenta reter todo o dinheiro
          investido pelo comprador, ou então, promete um valor irrisório. Por
          isso, o mais recomendável é conversar com um advogado especializado
          para que ninguém saia lesado. Na maioria dos casos, a construtora terá
          direito ao quantitativo de 10% das prestações pagas, referentes a
          multas e taxas administrativas, sendo que valores maiores estão sendo
          considerados abusivos pelos tribunais. Portanto, nunca assine nenhum
          acordo antes de falar com um especialista.
        </p>
        <p>
          É importante que o consumidor saiba que, mesmo que os contratos de
          compra e venda do imóvel, inclusive os na planta, tragam em suas
          cláusulas a irretratabilidade e impossibilidade do comprador desistir
          do negócio, a legislação permite o direito de arrependimento e a
          rescisão do contrato.
        </p>
        <p>
          Em nenhuma hipótese a construtora pode reter todo o valor pago pelo
          consumidor. A súmula do Superior Tribunal de Justiça (STJ) deixa isso
          claro:
        </p>
        <blockquote>
          <p>
            Súmula 543 – Na hipótese de resolução de contrato de promessa de
            compra e venda de imóvel submetido ao Código de Defesa do
            Consumidor, deve ocorrer a imediata restituição das parcelas pagas
            pelo promitente comprador – integralmente, em caso de culpa
            exclusiva do promitente vendedor/construtor, ou parcialmente, caso
            tenha sido o comprador quem deu causa ao desfazimento. (Súmula 543,
            SEGUNDA SEÇÃO, julgado em 26/08/2015, DJe 31/08/2015)
          </p>
        </blockquote>
        <p>
          Ou seja, o consumidor pode fazer o pedido do distrato se a construtora
          não cumprir com prazos ou entregar o imóvel com problemas. Nestes
          casos, o comprador tem direito a 100% do valor investido.
        </p>
        <p>
          O STJ também já encerrou a discussão e aprovou a súmula que estabelece
          como devem ser devolvidos os valores nos distratos: sempre à vista, de
          forma imediata e com as devidas correções.
        </p>
        <p>
          Todas essas situações podem trazer dor de cabeça e preocupações reais
          para os consumidores. Dependendo de como ocorreram os problemas, o
          consumidor pode pleitear danos morais e materiais. Em todo o caso, a
          melhor maneira para não sair prejudicado é consultando um
          especialista.
        </p>
      </section>

      <section className="devolucao-contact">
        <h2>Entre em Contato</h2>
        <p>
          Se você está enfrentando problemas relacionados à devolução de imóvel,
          nossa equipe está pronta para auxiliá-lo. Entre em contato conosco
          para uma avaliação detalhada do seu caso.
        </p>
        <button className="contact-button">Fale com um Especialista</button>
      </section>
    </div>
  );
};

export default DevolucaoImovel;
