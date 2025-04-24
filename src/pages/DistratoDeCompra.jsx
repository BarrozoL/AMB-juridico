import React from "react";

export default function DistratoDeCompra() {
  return (
    <>
      <header className="text-center bg-[#253155] text-white py-15">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Distrato de Compra do Imóvel
        </h1>
      </header>
      <div className="w-[90%] max-w-[800px] mx-auto my-5 bg-white p-4 sm:p-5 rounded shadow-md">
        <section className="mb-5">
          <p className="mb-4 leading-relaxed text-gray-800 text-justify">
            O distrato de compra do imóvel ocorre quando o comprador, por motivo
            pessoal ou por descumprimento da incorporadora, solicita a rescisão
            do contrato de compra e venda.
          </p>
          <p className="mb-4 leading-relaxed text-gray-800 text-justify">
            Em muitos casos, o comprador pode reaver uma porcentagem
            significativa do valor investido, especialmente se houver
            inadimplência por parte da construtora.
          </p>
          <p className="mb-4 leading-relaxed text-gray-800 text-justify">
            É importante que o consumidor esteja ciente de seus direitos e
            busque orientação jurídica especializada para garantir a restituição
            adequada dos valores pagos e evitar cláusulas contratuais abusivas.
          </p>
        </section>

        {/* Rights Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold text-[#253155] mb-4">
            Saiba seus direitos
          </h2>
          <p className="mb-4 leading-relaxed text-gray-800 text-justify">
            Mesmo que os contratos de compra e venda contenham cláusulas de
            irretratabilidade, a legislação brasileira permite o direito de
            arrependimento e a rescisão contratual em determinadas
            circunstâncias.
          </p>
          <p className="mb-4 leading-relaxed text-gray-800 text-justify">
            Em casos de inadimplência do comprador, é possível solicitar o
            distrato, embora possam ser aplicadas multas ou retenções
            proporcionais.
          </p>
          <p className="mb-4 leading-relaxed text-gray-800 text-justify">
            Se a construtora não cumprir os prazos ou entregar o imóvel com
            defeitos, o comprador tem direito à restituição integral dos valores
            pagos.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f9f9f9] p-4 sm:p-5 border-l-4 border-l-[#253155] mt-5 rounded">
          <h2 className="text-2xl font-bold text-[#253155] mb-2">
            Entre em Contato
          </h2>
          <p className="mb-4 text-gray-800">
            Se você está enfrentando problemas relacionados ao distrato de
            compra do imóvel, nossa equipe está pronta para auxiliá-lo. Entre em
            contato conosco para uma avaliação detalhada do seu caso.
          </p>
          <button className="w-full sm:w-auto bg-[#253155] text-white px-5 py-2 rounded transition-colors duration-300 hover:bg-[#1d2747]">
            Fale com um Especialista
          </button>
        </section>
      </div>
    </>
  );
}
