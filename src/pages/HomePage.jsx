import "../css/HomePage.css";
import rioBackground from "../assets/images/Rio-de-Janeiro-orla-noite.webp";

export default function HomePage() {
  return (
    <div>
      <img className="rio-background-noite" src={rioBackground} />
      <div className="texto-hero">
        <h1>
          Especialista em direito imobiliário, execução de inventários, heranças
          e planejamento sucessório.
        </h1>
        <h2>
          Fundado em 1996 o escritório Accacio Monteiro Barrozo Assessoria
          Jurídica conta com advogados atenciosos e com décadas de experiência
          em direito imobiliário, sempre vizando o melhor para o cliente.
        </h2>
        {/*  <h3>Desde 1996 em defesa do seu património</h3> */}
      </div>
      <div className="gradient-imagem"></div>
      <div className="fale-connosco-div">
        <button className="fale-connosco-div-button">
          Agende uma consulta ou entre em contato!
        </button>
      </div>
      <div className="div-background-texto-hero"></div>
      <div className="div-areas-de-atuaçao-hero">
        <h2></h2>
      </div>
      <div className="div-container-3-quadros">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="segunda-parte-hero"></div>
    </div>
  );
}
