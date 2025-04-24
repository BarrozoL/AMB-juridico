import React from "react";

export default function DefeitoNaObra() {
  return (
    <>
      <header className="text-center bg-[#253155] text-white py-14">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Defeito na Obra
        </h1>
      </header>
      <div className="w-4/5 max-w-[1000px] mx-auto my-5 bg-white p-4 sm:p-5 rounded shadow-md">
        <section className="mb-5">
          <p className="mb-4 text-justify text-gray-800 leading-relaxed">
            A responsabilidade do construtor por defeitos na obra é um tema de
            grande relevância no Direito Imobiliário. De acordo com o Código
            Civil Brasileiro, o prazo de garantia é de cinco anos, durante os
            quais o construtor responde independentemente de culpa pelos danos
            decorrentes de vícios ou defeitos na construção.
          </p>
          <p className="mb-4 text-justify text-gray-800 leading-relaxed">
            Além disso, o prazo prescricional para o proprietário ajuizar ação
            contra o construtor é de dez anos, conforme entendimento consolidado
            pelo Superior Tribunal de Justiça (STJ). Isso significa que o
            proprietário tem até dez anos para buscar reparação pelos danos
            causados por defeitos na obra.
          </p>
          <p className="mb-4 text-justify text-gray-800 leading-relaxed">
            É fundamental que os proprietários estejam cientes desses prazos e
            direitos para que possam agir tempestivamente na defesa de seus
            interesses. Caso identifique algum defeito na construção, é
            recomendável buscar assessoria jurídica especializada para orientar
            sobre as medidas cabíveis.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f9f9f9] p-4 sm:p-5 border-l-4 border-l-[#253155] mt-5 rounded">
          <h2 className="text-2xl font-bold text-[#253155] mb-2">
            Entre em Contato
          </h2>
          <p className="mb-4">
            Se você está enfrentando{" "}
            <strong>problemas relacionados a defeitos na obra,</strong>
            <br />
            nossa equipe está pronta para auxiliá-lo. Entre em contato conosco
            para uma avaliação detalhada do seu caso.
          </p>
          <button className="w-full sm:w-auto bg-[#253155] text-white px-5 py-2 rounded transition-colors duration-300 hover:bg-[#1d2747]">
            Fale com um Especialista
          </button>
        </section>
      </div>
    </>
  );
}
