import { useState, useEffect } from "react";
import "../css/HomePage.css";
import rioBackground from "../assets/images/Rio-de-Janeiro-orla-noite.webp";
import iconeMartelo from "../assets/images/martelo-direito.png.png";
import iconeBalança from "../assets/images/balança-direito.png.png";
import iconeLivro from "../assets/images/livro-direito.png.png";
import estatuaBackground from "../assets/images/estatua-direito-amb.jpg";

export default function HomePage() {
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
      text: "Inventário Familiar e Resolução de Heranças",
    },
  ];

  const prevImage = () => {
    setImageIndex((newIndex) =>
      newIndex === 0 ? slides.length - 1 : newIndex - 1
    );
  };

  const nextImage = () => {
    setImageIndex((newIndex) =>
      newIndex === slides.length - 1 ? 0 : newIndex + 1
    );
  };
  console.log(imageIndex);

  return (
    <div>
      <div className="change-images-button">
        <button onClick={prevImage} className="previous-button">
          ❮
        </button>
        <button onClick={nextImage} className="next-button">
          ❯
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`dot ${index === imageIndex ? "active" : ""}`}
            onClick={() => setImageIndex(index)}
          ></span>
        ))}
      </div>
      {
        <img
          className="estatua-dona-background"
          src={slides[imageIndex]?.image}
        />
      }
      <div className="texto-hero">
        <h1>{slides[imageIndex].text}</h1>
        <h2>Desde 1996</h2>
        {/*  <h3>Desde 1996 em defesa do seu património</h3> */}
      </div>

      <div className="gradient-imagem"></div>
      <div className="fale-connosco-div">
        <button className="fale-connosco-div-button">
          Agende uma consulta!
        </button>
      </div>
      <div className="div-background-texto-hero"></div>
      {/*    <div className="div-areas-de-atuaçao-hero">
        <h2></h2>
      </div> */}
      <div className="div-container-3-quadros">
        <div className="div-container-3-quadros-quadro-1">
          <img src={iconeMartelo} />
          <h2 className="texto-h2-quadrado-hero">Direito Imobiliário</h2>
          <p className="texto-p-quadrado-hero">
            O escritório atua na área do Direito Imobiliário O escritório atua
            na área do Direito Imobiliário O escritório atua na área do Direito
            Imobiliário
          </p>
        </div>
        <div className="div-container-3-quadros-quadro-2">
          <img src={iconeBalança} />
          <h2 className="texto-h2-quadrado-hero">Inventário</h2>
          <p className="texto-p-quadrado-hero">
            O escritório atua na área de inventários e resolução de heranças O
            escritório atua na área de inventários e resolução de heranças
          </p>
        </div>
        <div className="div-container-3-quadros-quadro-3">
          <img src={iconeLivro} />
          <h2 className="texto-h2-quadrado-hero">Direito Tributário</h2>
          <p className="texto-p-quadrado-hero">
            O escritório atua na área do Direito Tributário O escritório atua na
            área do Direito Tributário O escritório atua na área do Direito
            Tributário O escritório atua na área do Direito Tributário
          </p>
        </div>
      </div>
      <div className="segunda-parte-hero"></div>
    </div>
  );
}
