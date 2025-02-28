import "../css/DistratoDeCompra.css";

export default function DistratoDeCompra() {
  return (
    <div className="distrato-container">
      <header className="distrato-header">
        <h1>Distrato de Compra do Imóvel</h1>
        <button className="contact-button">Fale com um Especialista</button>
      </header>

      <section className="distrato-content">
        <p>
          O distrato de compra do imóvel ocorre quando o comprador, por motivo
          pessoal ou por descumprimento da incorporadora, solicita a rescisão do
          contrato de compra e venda.
        </p>
        <p>
          Em muitos casos, o comprador pode reaver uma porcentagem significativa
          do valor investido, especialmente se houver inadimplência por parte da
          construtora.
        </p>
        <p>
          É importante que o consumidor esteja ciente de seus direitos e busque
          orientação jurídica especializada para garantir a restituição adequada
          dos valores pagos e evitar cláusulas contratuais abusivas.
        </p>
      </section>

      <section className="distrato-rights">
        <h2>Saiba seus direitos</h2>
        <p>
          Mesmo que os contratos de compra e venda contenham cláusulas de
          irretratabilidade, a legislação brasileira permite o direito de
          arrependimento e a rescisão contratual em determinadas circunstâncias.
        </p>
        <p>
          Em casos de inadimplência do comprador, é possível solicitar o
          distrato, embora possam ser aplicadas multas ou retenções
          proporcionais.
        </p>
        <p>
          Se a construtora não cumprir os prazos ou entregar o imóvel com
          defeitos, o comprador tem direito à restituição integral dos valores
          pagos.
        </p>
      </section>

      <section className="distrato-contact">
        <h2>Entre em Contato</h2>
        <p>
          Se você está enfrentando problemas relacionados ao distrato de compra
          do imóvel, nossa equipe está pronta para auxiliá-lo. Entre em contato
          conosco para uma avaliação detalhada do seu caso.
        </p>
        <button className="contact-button">Fale com um Especialista</button>
      </section>
    </div>
  );
}
