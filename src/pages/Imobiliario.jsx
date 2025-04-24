import { useState } from "react";

export default function Imobiliario() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="text-center bg-[#253155] text-white py-15">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Direito Imobiliário – Problemas com Obras/Construtoras
        </h1>
      </header>

      <div className="w-full bg-white p-10 mx-auto text-justify text-center rounded-lg h-full">
        <div className="space-y-4">
          <p className="">
            Em razão do aquecimento do mercado imobiliário, muitos imóveis estão
            sendo oferecidos no mercado. Proporcionalmente ao aumento de vendas,
            tem-se observado o aumento das Ações Judiciárias em relação à
            reparação de defeitos no imóvel comprado, atraso na entrega da obra
            ou escritura definitiva (registro RGI) negada, por dívida da
            construtora junto ao banco.
          </p>
          <p className="">
            O desrespeito no ramo imobiliário, seja pelo descumprimento de
            prazos ou imperfeição na obra, tem se mostrado constante entre as
            construtoras, até mesmo nas grandes empreiteiras. Infelizmente, as
            tentativas amigáveis com as construtoras não alcançam sucesso, não
            restando outra opção ao consumidor, senão a de se socorrer no Poder
            Judiciário, para ter seu direito à indenização ou reparação do dano.
          </p>
          <p className="">
            Toda e qualquer empresa de engenharia e arquitetura tem, como
            primeiro dever legal, assegurar e responder pela perfeição da obra
            que realiza, ainda que essa circunstância não conste em nenhuma
            cláusula contratual, pois é inerente ao serviço. Este é apenas um
            exemplo do direito que o consumidor tem e deve saber para se
            proteger de possíveis danos adquiridos no processo de compra de um
            imóvel.
          </p>
          <p className="">
            A insatisfação com o financiamento do imóvel também é crescente e o
            conhecimento do consumidor sobre os seus direitos, escasso. Um fato
            que vem ocorrendo com certa frequência é a desistência da compra da
            casa própria. Tal fato se dá por diversas razões, como a do
            comprador não conseguir arcar com prestações excessivamente onerosas
            ou até a insatisfação com os serviços da construtora.
          </p>
          <p>
            <strong>
              Conheça os direitos dos compradores de imóveis na planta,
              diretamente com construtoras.
            </strong>
          </p>
        </div>

        <section className="mt-8">
          <div
            className="flex justify-between items-center cursor-pointer bg-[#253155] text-white p-4 rounded"
            onClick={toggleSection}
          >
            <h2 className="text-base m-0">
              Principais problemas e vitórias nos tribunais
            </h2>
            <span className="text-base">{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && (
            <div className="p-4 border border-[#253155] border-opacity-30 border-t-0 rounded-b animate-fadeIn">
              <ul className="list-disc ml-6">
                <li className="mb-1">Atraso na entrega da obra</li>
                <li className="mb-1">Taxa Sati</li>
                <li className="mb-1">Comissão de corretagem</li>
                <li className="mb-1">Taxa de transferência</li>
                <li className="mb-1">Problemas estruturais no imóvel</li>
                <li className="mb-1">
                  Lucro cessante pela perda da oportunidade de alugar o imóvel
                </li>
                <li className="mb-1">
                  Indenização por dano moral – “Quebra de contrato”
                </li>
                <li className="mb-1">Correção do saldo devedor</li>
                <li className="mb-1">
                  Conferência do empreendimento com o memorial descritivo por
                  Perito Engenheiro
                </li>
                <li className="mb-1">Construção Civil</li>
                <li className="mb-1">Comissão de representantes</li>
                <li className="mb-1">Cobrança de Laudêmio</li>
                <li className="mb-1">
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
    </>
  );
}
