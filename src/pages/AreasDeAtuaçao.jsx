import PracticeAreasCarousel from "../components/PracticeAreasCarroussel";

import balacaBranca from "../assets/images/icone-balanca-branca-areas-atuacao.png";
import livroPreto from "../assets/images/icone-livro-preto-areas-atuacao.png";
import marteloBranco from "../assets/images/icone-martelo-branco-areas-atuacao.png";
import casaPreta from "../assets/images/icone-casa-preta-areas-atuacao.png";

const areas = [
  {
    icon: casaPreta,
    slug: "/direito-imobiliario",
    title: "Direito Imobiliário",
    description:
      "Assessoria e regularização de imóveis, elaboração de contratos de compra e venda, locação e financiamento.",
  },
  {
    icon: marteloBranco,
    slug: "/inventario",
    title: "Inventário e Sucessões",
    description:
      "Planejamento sucessório, condução de inventários judiciais e extrajudiciais e resolução de conflitos familiares.",
  },
  {
    icon: livroPreto,
    slug: "/execuçao-fiscal",
    title: "Direito Tributário",
    description:
      "Suporte jurídico para evitar abusos e garantir que os tributos sejam cobrados dentro dos limites da lei.",
  },
  {
    icon: balacaBranca,
    slug: "/execuçao-fiscal",
    title: "Execução Fiscal",
    description: "Defesa na execução fiscal.",
  },
];

export default function AreasDeAtuacao() {
  return (
    <>
      <header className="text-center bg-[#253155] text-white py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Áreas de Atuação
        </h1>
      </header>

      <div className="py-12 mb-40 px-6">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6">
          {areas.map((area, i) => (
            <div
              key={i}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <div
                className={`h-full rounded-lg p-6 transition-transform ease-in-out duration-200 hover:-translate-y-[5px] ${
                  i % 2 === 0
                    ? "bg-gray-100 text-gray-800"
                    : "bg-[#232e50] text-white"
                }`}
              >
                <img
                  src={area.icon}
                  alt={area.title}
                  className="w-16 h-16 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {area.title}
                </h3>
                <p className="text-md text-center mb-4">{area.description}</p>

                <div className="text-center">
                  <a href={area.slug}>
                    <button
                      className={`mt-4 cursor-pointer font-semibold px-6 py-2 rounded transition-colors ${
                        i % 2 === 0
                          ? "bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white"
                          : "bg-white hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      Saiba Mais
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
