import React, { useState, useEffect } from "react";
import iconeMartelo from "../assets/images/martelo-direito.png.png";
import iconeBalanca from "../assets/images/balança-direito.png.png";
import iconeLivro from "../assets/images/livro-direito.png.png";

import marteloPreto from "../assets/images/icone-martelo-preto-areas-atuacao.png";
import balacaBranca from "../assets/images/icone-balanca-branca-areas-atuacao.png";
import livroPreto from "../assets/images/icone-livro-preto-areas-atuacao.png";
import marteloBranco from "../assets/images/icone-martelo-branco-areas-atuacao.png";
import casaPreta from "../assets/images/icone-casa-preta-areas-atuacao.png";

const areas = [
  {
    icon: casaPreta,
    title: "Direito Imobiliário",
    description:
      "Assessoria e regularização de imóveis, elaboração de contratos de compra e venda, locação e financiamento.",
  },
  {
    icon: marteloBranco,
    title: "Inventário e Sucessões",
    description:
      "Planejamento sucessório, condução de inventários judiciais e extrajudiciais e resolução de conflitos familiares.",
  },
  {
    icon: livroPreto,
    title: "Direito Tributário",
    description:
      "Suporte jurídico para evitar abusos e garantir que os tributos sejam cobrados dentro dos limites da lei.",
  },
  {
    icon: balacaBranca,
    title: "Execução Fiscal",
    description: "Defesa na execução fiscal.",
  },
  /*  {
    icon: marteloPreto,
    title: "Direito de Família",
    description:
      "Divórcio, guarda, pensão e outras questões familiares delicadas.",
  },
  {
    icon: iconeLivro,
    title: "Direito Previdenciário",
    description:
      "Aposentadoria, benefícios do INSS e revisão de cálculos previdenciários.",
  }, */
];

export default function PracticeAreasCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Set visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = areas.length - visibleCards;

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Áreas de Atuação
        </h2>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="cursor-pointer absolute -ml-2 h-15 w-10 left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
            disabled={index === 0}
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer absolute h-15 w-10 right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
            disabled={index >= maxIndex}
          >
            ❯
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(areas.length / visibleCards) * 100}%`,
                transform: `translateX(-${(index * 100) / areas.length}%)`,
              }}
            >
              {areas.map((area, i) => (
                <div
                  key={i}
                  className="w-full"
                  style={{
                    width: `${100 / areas.length}%`,
                  }}
                >
                  <div
                    className={`h-full rounded-lg p-6 mx-4 mb-4 ${
                      i % 2 === 0
                        ? "bg-gray-100 text-gray-800"
                        : "bg-[#232e50] text-white"
                    }`}
                  >
                    <img
                      src={area.icon}
                      alt={area.title}
                      className="w-13 mb-4 mx-auto"
                    />
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-md text-center mb-4">
                      {area.description}
                    </p>

                    <button
                      className={`mt-8 cursor-pointer font-semibold px-4 py-2 rounded transition-colors ${
                        i % 2 === 0
                          ? "bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white"
                          : "bg-white hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      Saiba Mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
