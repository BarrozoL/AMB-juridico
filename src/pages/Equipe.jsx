import "../css/Equipe.css";

export default function Equipe() {
  return (
    <div className="container-geral">
      <div className="h1-title-equipe">
        <h1>Equipe</h1>
      </div>
      <div className="container-equipe">
        <div className="membro">
          <h2 className="nome">Accacio Monteiro Barrozo</h2>
          <h3 className="cargo">Sócio fundador</h3>
          <p className="descriçao">
            Sócio-Fundador do escritório, é advogado especialista em Direito
            Imobiliário, atuando há mais de 22 anos na área.
          </p>
        </div>

        <div className="membro">
          <h2 className="nome">Rodrigo Rodrigues Correa</h2>
          <h3 className="cargo">Advogado</h3>
          <p className="descriçao">
            Advogado formado pelo Instituto Brasileiro de Mercado de Capitais –
            IBMEC, é pós-graduado em Direito Processual Civil e tem MBA em
            Gestão em Negócios, ambos pelo Instituto a Vez do Mestre – UCAM.
          </p>
        </div>

        <div className="membro">
          <h2 className="nome">Rodrigo Rodrigues Correa</h2>
          <h3 className="cargo">Advogado</h3>
          <p className="descriçao">
            Advogado formado pelo Instituto Brasileiro de Mercado de Capitais –
            IBMEC, é pós-graduado em Direito Processual Civil e tem MBA em
            Gestão em Negócios, ambos pelo Instituto a Vez do Mestre – UCAM.
          </p>
        </div>

        <div className="membro">
          <h2 className="nome">Andre da Silva Francisco</h2>
          <h3 className="cargo">Advogado</h3>
          <p className="descriçao">
            É advogado, formado pela Universidade Salgado de Oliveira.
          </p>
        </div>

        <div className="membro">
          <h2 className="nome">Agnes Felippe</h2>
          <h3 className="cargo">Estagiária</h3>
          <p className="descriçao">
            Estagiária do escritório, estudante de Direito.
          </p>
        </div>
      </div>
    </div>
  );
}
