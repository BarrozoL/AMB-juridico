import { useState } from "react";

import accacioBarrozoImagem from "../assets/images/accacio-barrozo-imagem.jpg";

import iconeOlga from "../assets/images/imagem-review-olga-torres-amb.png";
import iconeThais from "../assets/images/imagem-review-thais-moraes-amb.png";
import iconeDanielle from "../assets/images/imagem-review-danielle-lindenmeyer-amb.png";

// Components
import DonaHeroSection from "../components/DonaHeroSection";
import HeroSection from "../components/HeroSection";
import PracticeAreasCarousel from "../components/PracticeAreasCarroussel";
import PerguntasFrequentes from "../components/PerguntasFrequentes";

export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen mb-16">
      {/* ========== HERO SECTION ========== */}
      <HeroSection />

      {/* ========== PRACTICE AREAS SECTION ========== */}
      <PracticeAreasCarousel />

      {/* ========== EXPERIENCE & STATS SECTION ========== */}
      <section className="bg-gray-100 py-15">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Title and description */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            29 Anos de Experiência Jurídica
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            Desde 1996 o escritório luta para defender os direitos de seus
            clientes
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Single Stat Box */}
            <div className="bg-[rgba(37,49,85,1)] text-white rounded-lg p-6">
              <div className="text-3xl font-semibold mb-2">1,500+</div>
              <div className="text-sm uppercase tracking-wide">
                Causas Vencidas
              </div>
            </div>
            {/* Single Stat Box */}
            <div className="bg-[rgba(37,49,85,1)] text-white rounded-lg p-6">
              <div className="text-3xl font-semibold mb-2">140+</div>
              <div className="text-sm uppercase tracking-wide">
                Execuções fiscais defendidas
              </div>
            </div>
            {/* Single Stat Box */}
            <div className="bg-[rgba(37,49,85,1)] text-white rounded-lg p-6">
              <div className="text-3xl font-semibold mb-2">2,000+</div>
              <div className="text-sm uppercase tracking-wide">Clientes</div>
            </div>
            {/* Single Stat Box */}
            <div className="bg-[rgba(37,49,85,1)] text-white rounded-lg p-6">
              <div className="text-3xl font-semibold mb-2">20+</div>
              <div className="text-sm uppercase tracking-wide">
                Artigos e reportagens
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Opiniões de Clientes
          </h2>

          {/* Reviews Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* ======= Review Card 1 ======= */}
            <div className="flex flex-col justify-between h-full bg-white border rounded-lg p-6 shadow-md">
              <div className="flex justify-center items-center mb-4 text-yellow-500">
                {/* Simple star icons (Unicode). Replace with an icon component if you'd like */}
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Meu contato com a equipe é sempre muito satisfatório. Todos são
                extremamente profissionais, gentis e atenciosos. Em todos os
                momentos sinto segurança em como tudo é conduzido, demonstrando
                conhecimento e competência."
              </p>

              <div className="flex items-center justify-center">
                <img
                  src={iconeOlga}
                  alt="Client photo"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Olga Torres</h4>
                  <span className="text-sm text-gray-500"></span>
                </div>
              </div>
            </div>

            {/* ======= Review Card 2 ======= */}
            <div className="flex flex-col justify-between h-full bg-white border rounded-lg p-6 shadow-md">
              <div className="flex justify-center items-center mb-4 text-yellow-500">
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Excelente empresa! Foram mto atenciosos em todos os
                atendimentos, tiraram todas as minhas dúvidas com paciência,
                fizeram tudo da melhor forma e o inventário foi super rápido!"
              </p>

              <div className="flex left-0 items-center justify-center">
                <img
                  src={iconeThais}
                  alt="Client photo"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Thais Moraes</h4>
                  <span className="text-sm text-gray-500"></span>
                </div>
              </div>
            </div>

            {/* ======= Review Card 3 ======= */}
            <div className="flex flex-col justify-between h-full bg-white border rounded-lg p-6 shadow-md ">
              <div className="flex justify-center items-center mb-4 text-yellow-500">
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
                <span className="mx-1 text-xl">&#9733;</span>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Excelente atendimento e ajuda ao meu pai, rápido o processo de
                estorno da aposentadoria, tinha sido bloqueada por impostos da
                empresa que não foram pagos. Ficamos muito felizes e aliviados
                pela devolução da aposentadoria mensal do meu pai em Dezembro de
                2022. Parabéns pelo profissionalismo Dra. Tatiana Pontes
                Barrozo. Sucesso!!!"
              </p>

              <div className="flex items-center justify-center">
                <img
                  src={iconeDanielle}
                  alt="Client photo"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">
                    Danielle Lindenmeyer
                  </h4>
                  <span className="text-sm text-gray-500"></span>
                </div>
              </div>
            </div>
          </div>

          <a
            target="blank"
            href="https://www.google.com/search?sa=X&sca_esv=1fcf1833b6ed7c4a&rlz=1C1YTUH_pt-PTPT1033PT1033&hl=pt-PT&tbm=lcl&sxsrf=AHTn8zrKttevCg_4p7gpWyxdke3pUZXqlQ:1743027136855&q=Accacio+Monteiro+Barrozo+Assessoria+Jur%C3%ADdica+Cr%C3%ADticas&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDMxtzQytrAwMTK3tLS0MDI3M9nAyPiK0dwxOTkxOTNfwTc_ryQ1syhfwSmxqCi_Kl_Bsbg4tbg4vygzUcGrtOjw2pTM5EQFZyCjBMgoXsRKrk4AHXR2uY8AAAA&rldimm=16479238842799982764&ved=2ahUKEwje2s2K4qiMAxUZ0wIHHf95IJsQ9fQKegQISxAF&biw=1707&bih=791&dpr=1.5#lkt=LocalPoiReviews"
          >
            <button className="cursor-pointer mt-8 bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Ver mais avaliações
            </button>
          </a>
        </div>
      </section>

      {/* ========== PERGUNTAS FREQUENTES SECTION ========== */}

      <PerguntasFrequentes />

      {/* confidence section */}
      <section className="relative w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT COLUMN: Text */}
          <div>
            <span className="text-sm uppercase text-gray-500 tracking-wide">
              Informações
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
              Garantia de Qualidade
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <button className="mt-6 bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Mains informações
            </button>
          </div>

          {/* RIGHT COLUMN: Image + Overlay Box */}
          <div className="relative flex items-center justify-center">
            <img
              src={accacioBarrozoImagem}
              alt="Imagem advogado Accacio Barrozo"
              className="max-w-[21em] sm:max-w-[24em] object-cover rounded shadow-lg"
            />

            {/* Overlay box, adjust position as needed */}
            <div
              className="absolute flex items-center justify-center bg-white shadow-md border border-gray-200 rounded p-6"
              style={{ top: "10%", right: "-5%" }}
            >
              <div className="flex flex-col items-center text-gray-800">
                <span className="text-4xl font-bold">30</span>
                <span className=" text-center">
                  anos de experiência <br />
                  jurídica
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
