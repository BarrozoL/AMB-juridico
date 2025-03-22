import React from "react";

export default function AreasDeAtuacao() {
  return (
    <div className="container-geral py-10 px-5">
      {/* Outer container, max width ~1200px, centered */}
      <div className="max-w-[1200px] mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">Áreas de Atuação</h1>

        {/* Grid container replicating 'repeat(auto-fit, minmax(250px, 1fr))' */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-14">
          {/* CARD 1 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            {/* If you have an image, add the src below */}
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] m-[15px] text-[rgba(37,49,85,1)]">
              Consultoria Tributária
            </h3>
            <p className="flex-grow mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Analisamos em detalhes os dados financeiros e tributários do seu
              negócio para garantir a regularidade do negócio e formular um
              planejamento estratégico eficaz.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] m-[15px] text-[rgba(37,49,85,1)]">
              Auditoria Fiscal
            </h3>
            <p className="flex-grow mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              É um serviço indicado para empresas que desejam ter a gestão
              financeira apurada e transparente, com foco na redução de custos e
              riscos de penalizações.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] m-[15px] text-[rgba(37,49,85,1)]">
              Blindagem Patrimonial
            </h3>
            <p className="flex-grow mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Planejamento tributário e jurídico dos bens pessoais e
              empresariais para resguardar o patrimônio, visando a melhor
              estruturação na constituição de sociedades.
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
            <h3 className="text-[1.2rem] m-[15px] text-[rgba(37,49,85,1)]">
              Recuperar empresas
            </h3>
            <p className="flex-grow mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Empresas em situação de crise econômica podem ter apoio para
              reestruturar suas dívidas de maneira judicial. Seja em processo de
              recuperação ou na prevenção de falências.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 5 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] m-[15px] text-[rgba(37,49,85,1)]">
              Contabilidade
            </h3>
            <p className="flex-grow mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Serviços de contabilidade personalizados para atender às
              necessidades fiscais, trabalhistas e gerenciais do seu negócio.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 6 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] m-[15px] text-[rgba(37,49,85,1)]">
              Contratos Artísticos
            </h3>
            <p className="flex-grow mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Elaboração e revisão de contratos para artistas, agências e
              produtores, garantindo segurança jurídica e remuneração adequada.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>

          {/* CARD 7 */}
          <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex flex-col transition-transform ease-in-out duration-200 hover:-translate-y-[5px]">
            <img src="" alt="" className="w-full h-auto block" />
            <h3 className="text-[1.2rem] m-[15px] text-[rgba(37,49,85,1)]">
              Marcas e Patentes
            </h3>
            <p className="flex-grow mx-[15px] mb-[15px] text-[#555] leading-[1.4]">
              Proteja sua propriedade intelectual registrando marcas e patentes,
              assegurando direitos exclusivos de uso e exploração comercial.
            </p>
            <a
              href="#"
              className="inline-block mx-[15px] mb-[15px] px-[20px] py-[10px] bg-[rgba(37,49,85,1)] text-white no-underline uppercase font-bold rounded-[4px] transition-colors duration-300 hover:bg-[rgb(50,78,161)]"
            >
              Saiba Mais
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
