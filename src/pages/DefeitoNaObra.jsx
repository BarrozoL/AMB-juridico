import React from "react";
import "../css/defeitoNaObra.css";

const DefeitoNaObra = () => {
  return (
    <div className="defeito-container">
      <header className="defeito-header">
        <h1>Defeito na Obra</h1>
      </header>

      <section className="defeito-content">
        <p>
          A responsabilidade do construtor por defeitos na obra é um tema de
          grande relevância no Direito Imobiliário. De acordo com o Código Civil
          Brasileiro, o prazo de garantia é de cinco anos, durante os quais o
          construtor responde independentemente de culpa pelos danos decorrentes
          de vícios ou defeitos na construção.
        </p>

        <p>
          Além disso, o prazo prescricional para o proprietário ajuizar ação
          contra o construtor é de dez anos, conforme entendimento consolidado
          pelo Superior Tribunal de Justiça (STJ). Isso significa que o
          proprietário tem até dez anos para buscar reparação pelos danos
          causados por defeitos na obra.
        </p>

        <p>
          É fundamental que os proprietários estejam cientes desses prazos e
          direitos para que possam agir tempestivamente na defesa de seus
          interesses. Caso identifique algum defeito na construção, é
          recomendável buscar assessoria jurídica especializada para orientar
          sobre as medidas cabíveis.
        </p>
      </section>

      <section className="defeito-contact">
        <h2>Entre em Contato</h2>
        <p>
          Se você está enfrentando{" "}
          <strong>problemas relacionados a defeitos na obra, </strong>
          <br />
          nossa equipe está pronta para auxiliá-lo. Entre em contato conosco
          para uma avaliação detalhada do seu caso.
        </p>
        <button className="contact-button">Fale com um Especialista</button>
      </section>
    </div>
  );
};

export default DefeitoNaObra;
