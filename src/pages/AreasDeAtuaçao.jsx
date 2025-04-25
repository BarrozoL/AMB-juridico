import React from "react";

export default function AreasDeAtuacao() {
  return (
    <div className="container-geral py-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Áreas de Atuação</h1>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-14">
          {/* CARD 1 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] text-center m-[15px] text-[rgba(37,49,85,1)]">
              Direito Imobiliário
            </h3>
            <p className="flex-grow justify-text text-center mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Assessoria e regularização de imóveis, elaboração de contratos de
              compra e venda, locação e financiamento.
            </p>
            <a
              href="/imobiliario"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] text-center m-[15px] text-[rgba(37,49,85,1)]">
              Inventário e Sucessões
            </h3>
            <p className="flex-grow text-center mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Planejamento sucessório, condução de inventários judiciais e
              extrajudiciais e resolução de conflitos familiares.
            </p>
            <a
              href="/inventario"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] text-center m-[15px] text-[rgba(37,49,85,1)]">
              Direito Tributário
            </h3>
            <p className="flex-grow text-center mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Suporte jurídico para evitar abusos e garantir que os tributos
              sejam cobrados dentro dos limites da lei.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 4 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] text-center m-[15px] text-[rgba(37,49,85,1)]">
              Execução Fiscal
            </h3>
            <p className="flex-grow text-center mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Defesa na execução fiscal.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 5 */}
          {/*   <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] text-center m-[15px] text-[rgba(37,49,85,1)]">
              Direito de Família
            </h3>
            <p className="flex-grow text-center mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Divórcio, guarda, pensão e outras questões familiares delicadas.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div> */}

          {/* CARD 6 */}
          {/*  <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] text-center m-[15px] text-[rgba(37,49,85,1)]">
              Direito Previdenciário
            </h3>
            <p className="flex-grow text-center mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Aposentadoria, benefícios do INSS e revisão de cálculos
              previdenciários.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div> */}
        </section>
      </div>
    </div>
  );
}
