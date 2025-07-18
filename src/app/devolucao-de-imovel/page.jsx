import React from "react";

export default function DevolucaoImovel() {
  return (
    <>
      <header className="text-center bg-[#253155] text-white py-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Devolução de Imóvel
        </h1>
        <p className="text-gray-150 my-5">
          Na maioria dos casos, você pode reaver mais de 80% do valor investido.
        </p>
      </header>
      <div className="w-[90%] max-w-[900px] mx-auto my-5 bg-white p-5 rounded shadow-md">
        <header className="text-center mb-5">
          <h1 className="text-3xl font-bold text-[#253155]"></h1>

          <div className="my-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5521999684428&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <button className="bg-[#253155] cursor-pointer text-white px-5 py-2 rounded transition-colors duration-300 hover:bg-[#1d2747]">
                Fale com um Especialista
              </button>
            </a>
          </div>
        </header>

        <section className="mb-5">
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            A responsabilidade do construtor por defeitos na obra é um tema de
            grande relevância no Direito Imobiliário. De acordo com o Código
            Civil Brasileiro, o prazo de garantia é de cinco anos, durante os
            quais o construtor responde independentemente de culpa pelos danos
            decorrentes de vícios ou defeitos na construção.
          </p>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            Além disso, o prazo prescricional para o proprietário ajuizar ação
            contra o construtor é de dez anos, conforme entendimento consolidado
            pelo Superior Tribunal de Justiça (STJ). Isso significa que o
            proprietário tem até dez anos para buscar reparação pelos danos
            causados por defeitos na obra.
          </p>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            É fundamental que os proprietários estejam cientes desses prazos e
            direitos para que possam agir tempestivamente na defesa de seus
            interesses. Caso identifique algum defeito na construção, é
            recomendável buscar assessoria jurídica especializada para orientar
            sobre as medidas cabíveis.
          </p>
        </section>

        {/* Rights Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold text-[#253155] mt-5 mb-4">
            Saiba seus direitos
          </h2>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            Existem casos em que a construtora tenta reter todo o dinheiro
            investido pelo comprador, ou então, promete um valor irrisório. Por
            isso, o mais recomendável é conversar com um advogado especializado
            para que ninguém saia lesado. Na maioria dos casos, a construtora
            terá direito ao quantitativo de 10% das prestações pagas, referentes
            a multas e taxas administrativas, sendo que valores maiores estão
            sendo considerados abusivos pelos tribunais. Portanto, nunca assine
            nenhum acordo antes de falar com um especialista.
          </p>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            É importante que o consumidor saiba que, mesmo que os contratos de
            compra e venda do imóvel, inclusive os na planta, tragam em suas
            cláusulas a irretratabilidade e impossibilidade do comprador
            desistir do negócio, a legislação permite o direito de
            arrependimento e a rescisão do contrato.
          </p>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            Em nenhuma hipótese a construtora pode reter todo o valor pago pelo
            consumidor. A súmula do Superior Tribunal de Justiça (STJ) deixa
            isso claro:
          </p>
          <blockquote className="bg-[#f9f9f9] border-l-4 border-[#253155] p-4 my-5 text-gray-600 italic">
            <p>
              Súmula 543 – Na hipótese de resolução de contrato de promessa de
              compra e venda de imóvel submetido ao Código de Defesa do
              Consumidor, deve ocorrer a imediata restituição das parcelas pagas
              pelo promitente comprador – integralmente, em caso de culpa
              exclusiva do promitente vendedor/construtor, ou parcialmente, caso
              tenha sido o comprador quem deu causa ao desfazimento. (Súmula
              543, SEGUNDA SEÇÃO, julgado em 26/08/2015, DJe 31/08/2015)
            </p>
          </blockquote>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            Ou seja, o consumidor pode fazer o pedido do distrato se a
            construtora não cumprir com prazos ou entregar o imóvel com
            problemas. Nestes casos, o comprador tem direito a 100% do valor
            investido.
          </p>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            O STJ também já encerrou a discussão e aprovou a súmula que
            estabelece como devem ser devolvidos os valores nos distratos:
            sempre à vista, de forma imediata e com as devidas correções.
          </p>
          <p className="mb-4 text-gray-800 leading-relaxed text-justify">
            Todas essas situações podem trazer dor de cabeça e preocupações
            reais para os consumidores. Dependendo de como ocorreram os
            problemas, o consumidor pode pleitear danos morais e materiais. Em
            todo o caso, a melhor maneira para não sair prejudicado é
            consultando um especialista.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f9f9f9] p-4 sm:p-5 border-l-4 border-l-[#253155] mt-5 rounded">
          <h2 className="text-2xl font-bold text-[#253155] mb-2">
            Entre em Contato
          </h2>
          <p className="mb-4 text-gray-800">
            Se você está enfrentando problemas relacionados à devolução de
            imóvel, nossa equipe está pronta para auxiliá-lo. Entre em contato
            conosco para uma avaliação detalhada do seu caso.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5521999684428&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <button className="bg-[#253155] text-white px-5 py-2 rounded transition-colors duration-300 hover:bg-[#1d2747]">
              Fale com um Especialista
            </button>
          </a>
        </section>
      </div>
    </>
  );
}
