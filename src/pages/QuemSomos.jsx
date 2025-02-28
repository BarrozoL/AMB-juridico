import "../css/QuemSomos.css";

export default function QuemSomos() {
  return (
    <div>
      <div className="quem-somos-container">
        <header className="hero-section">
          <h1 className="titulo">Quem Somos</h1>
          <p className="subtitulo">
            Conheça nossa história, missão, visão e valores
          </p>
        </header>

        <section className="conteudo">
          <h2 className="secao-titulo">Nossa História</h2>
          <p>
            O escritório{" "}
            <strong>Accacio Monteiro Barrozo Assessoria Jurídica </strong>
            está consolidado há mais de 22 anos no mundo jurídico, superando a
            marca de dois mil clientes, atuando de forma preventiva, consultiva
            e contenciosa em procedimentos judiciais e extrajudiciais.
          </p>
          <p>
            Especializado nas áreas imobiliária, registral, empresarial, cível,
            trabalhista e administrativa, dispomos de um departamento exclusivo
            para perícias técnicas. Somos um grupo formado por advogados
            especializados e com larga experiência jurídica.
          </p>
          <p>
            Graças à liderança e ao conhecimento adquiridos ao longo desse
            trajeto, nossa equipe se mantém vitoriosa nas diversas áreas em que
            atua.
          </p>
        </section>

        {/* Missão */}
        <section className="conteudo">
          <h2 className="secao-titulo">Missão</h2>
          <p>
            Defender os direitos dos nossos clientes com a prestação de serviços
            jurídicos de alta qualidade, buscando a solução de conflitos de
            forma rápida e eficiente.
          </p>
        </section>

        {/* Visão */}
        <section className="conteudo">
          <h2 className="secao-titulo">Visão</h2>
          <p>
            Alcançar reconhecimento nacional, defendendo cada vez mais clientes
            e causas sociais relevantes, de modo a tornar a justiça sempre mais
            acessível.
          </p>
        </section>

        {/* Valores */}
        <section className="conteudo">
          <h2 className="secao-titulo">Valores</h2>
          <p>
            Ética, respeito, lealdade, trabalho em equipe, transparência,
            entusiasmo e comprometimento.
          </p>
        </section>
      </div>
    </div>
  );
}
