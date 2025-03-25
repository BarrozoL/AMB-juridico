import { useState } from "react";

// Import your images here
import estatuaBackground from "../assets/images/estatua-direito-amb.jpg";
import iconeMartelo from "../assets/images/martelo-direito.png.png";
import iconeBalanca from "../assets/images/balança-direito.png.png";
import iconeLivro from "../assets/images/livro-direito.png.png";

import accacioBarrozoImagem from "../assets/images/accacio-barrozo-imagem.jpg";

import iconeOlga from "../assets/images/imagem-review-olga-torres-amb.png";
import iconeThais from "../assets/images/imagem-review-thais-moraes-amb.png";
import iconeDanielle from "../assets/images/imagem-review-danielle-lindenmeyer-amb.png";

export default function HomePage() {
  const [imageIndex, setImageIndex] = useState(0);

  // Example slides array; replace images as needed
  const slides = [
    { image: estatuaBackground, text: "Defesa na Execução Fiscal de Dívidas" },
    {
      image: estatuaBackground,
      text: "Problemas com Atraso na Entrega da Obra?",
    },
    {
      image: estatuaBackground,
      text: "Inventário Familiar e Resolução de Heranças",
    },
    {
      image: estatuaBackground,
      text: "Direito Tributário e Planejamento Fiscal",
    },
  ];

  const prevImage = () => {
    setImageIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-screen mb-16">
      {/* ========== HERO SECTION (FULL SCREEN) ========== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            key={imageIndex}
            src={slides[imageIndex].image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay (same size as image) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 to-transparent" />

        {/* Carousel Controls (Arrows) */}
        <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 z-20 transform -translate-y-1/2">
          <button
            onClick={prevImage}
            className="text-white bg-gray-800 bg-opacity-60 hover:bg-[rgb(50,78,161)] rounded-full w-10 h-10 flex items-center justify-center"
          >
            ❮
          </button>
          <button
            onClick={nextImage}
            className=" text-white bg-gray-800 bg-opacity-60 hover:bg-[rgb(50,78,161)] rounded-full w-10 h-10 flex items-center justify-center"
          >
            ❯
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setImageIndex(index)}
              className={`block w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === imageIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* Hero Text & CTAs */}
        <div className="absolute left-20 top-70 transform -translate-y-1/2 z-20 flex flex-col items-start justify-center h-full max-w-2xl px-6">
          <p className="text-white text-sm md:text-base font-light mb-2"></p>
          <h1
            key={imageIndex}
            className="text-white text-3xl md:text-5xl font-didot mb-3 leading-tight animate-fadeIn"
          >
            {slides[imageIndex].text}
          </h1>
          <h2 className="text-white text-lg md:text-xl font-light italic mb-8">
            Desde 1996 em defesa do seu patrimônio
          </h2>
          <div className="flex space-x-4">
            <button className="bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Agende uma consulta
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full transition-colors">
              Envie sua pergunta
            </button>
          </div>
        </div>
      </section>

      {/* ========== PRACTICE AREAS SECTION ========== */}
      <section className="relative w-full bg-white pt-16 p-0 pb-20">
        {/* 3 Cards container */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-start">
            <img src={iconeMartelo} alt="Martelo" className="w-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Direito Imobiliário</h2>
            <p className="text-gray-700 mb-4">
              O escritório atua na área do Direito Imobiliário: contratos,
              disputas, e soluções jurídicas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button className="mt-auto bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-4 py-2 rounded transition-colors">
              Saiba Mais
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-start text-white">
            <img src={iconeBalanca} alt="Balança" className="w-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Inventário</h2>
            <p className="mb-4">
              O escritório atua na área de inventários e resolução de heranças,
              simplificando o processo para as famílias em momentos delicados.
            </p>
            <button className="mt-auto bg-white text-gray-800 hover:bg-gray-200 font-semibold px-4 py-2 rounded transition-colors">
              Saiba Mais
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-start">
            <img src={iconeLivro} alt="Livro" className="w-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Direito Tributário</h2>
            <p className="text-gray-700 mb-4">
              O escritório atua na área do Direito Tributário: consultoria e
              planejamento fiscal para empresas e indivíduos.
            </p>
            <button className="mt-auto bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-4 py-2 rounded transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE & STATS SECTION ========== */}
      <section className="bg-gray-100 py-16">
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
              <div className="text-3xl font-semibold mb-2">350+</div>
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
              <div className="text-3xl font-semibold mb-2">500+</div>
              <div className="text-sm uppercase tracking-wide">
                Clientes satisfeitos
              </div>
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
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Opiniões de Clientes
          </h2>

          {/* Reviews Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* ======= Review Card 1 ======= */}
            <div className="bg-white border rounded-lg p-6 shadow-md">
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
            <div className="bg-white border rounded-lg p-6 shadow-md">
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

              <div className="flex items-center justify-center">
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
            <div className="bg-white border rounded-lg p-6 shadow-md">
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

            {/* ======= Add more review cards as needed ======= */}
          </div>

          {/* "View More" Button (optional) */}
          <button className="mt-8 bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-6 py-3 rounded-full transition-colors">
            View More
          </button>
        </div>
      </section>

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
                <span className="text-4xl font-bold">14</span>
                <span className="text-base">Clientes satisfeitos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
