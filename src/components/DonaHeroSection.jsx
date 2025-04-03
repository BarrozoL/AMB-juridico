import { useState } from "react";

import estatuaBackground from "../assets/images/estatua-direito-amb.jpg";

export default function DonaHeroSection() {
  const [imageIndex, setImageIndex] = useState(0);

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
  );
}
