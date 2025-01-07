import "../css/Contato.css";

export default function Contato() {
  return (
    <div className="container-geral">
      <h1>Entre em contato:</h1>
      <form className="formulario-contato">
        <label>Nome:</label>
        <input className="input-contato-nome" type="text" />
        <input className="input-contato-explique" type="text" />
        <input type="text" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
