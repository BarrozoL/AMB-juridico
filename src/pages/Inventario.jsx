import React from "react";
import "../css/Inventario.css";

function Inventario() {
  return (
    <div className="container-geral">
      {/* Hero Section */}
      <header className="hero">
        <h1>Inventário</h1>
        <button className="cta-button">Fale com um especialista</button>
      </header>

      <main>
        {/* What is Inventário */}
        <section className="section-inventario" id="o-que-e-inventario">
          <h2>O que é o Inventário?</h2>
          <p>
            O inventário é o procedimento utilizado para apuração dos bens,
            direitos e dívidas do falecido. Portanto, o inventário pode ser
            judicial, extrajudicial e negativo, sendo os dois primeiros mais
            comumente realizados. O escritório Accacio Monteiro Barrozo conta
            com equipe de advogados especializados em Direito Imobiliário e
            Sucessório, com 22 anos de forte atuação na advocacia carioca,
            estando ávidos para atender nossos clientes com o que há de mais
            moderno e eficiente no âmbito jurídico.
          </p>
        </section>

        {/* Processo de Inventário – Explicação Ampla */}
        <section className="section-inventario" id="processo-inventario">
          <h2>Entenda o Processo de Inventário</h2>
          <p>
            Fazer inventário não é apenas listar os bens do falecido. Envolve a
            verificação dos sucessores legais, quitação das dívidas do espólio e
            a divisão dos bens entre os beneficiários.
          </p>
          <h3>Inventário Extrajudicial</h3>
          <p>
            Realizado em cartório por meio de escritura pública, desde que não
            haja testamento e todos os herdeiros sejam maiores de idade e
            estejam de acordo com a divisão proposta. É imprescindível a
            assistência de um advogado.
          </p>
          <h3>Inventário Judicial</h3>
          <p>
            Realizado sob supervisão judicial, é necessário quando há
            divergências entre os herdeiros, testamento, ou quando há herdeiros
            incapazes. Deve ser iniciado em até 60 dias após o óbito para evitar
            multas.
          </p>
          <h3>Quem pode solicitar a abertura do inventário judicial?</h3>
          <p>
            Cônjuge, companheiro supérstite, herdeiros, legatário,
            testamenteiro, credores, Ministério Público, Fazenda Pública ou a
            administração judicial da falência do herdeiro podem solicitar a
            abertura.
          </p>
          <h3>Questões adicionais</h3>
          <p>
            Quando há testamento, a legislação garante que apenas 50% do
            patrimônio pode ser livremente disposto. O advogado responsável
            realiza o levantamento dos bens e dívidas, e um inventariante é
            nomeado para representar o patrimônio até a conclusão do inventário.
          </p>
          <h3>Divisão dos Bens e Formal de Partilha</h3>
          <p>
            Na ausência de testamento, a divisão dos bens segue a lei, podendo
            haver acordos entre os herdeiros. Após a sentença, é emitido o
            formal de partilha, que permite a transferência dos bens para os
            herdeiros.
          </p>
          <h3>Impostos e Taxas</h3>
          <p>
            Os custos do inventário incluem ITCMD, honorários advocatícios,
            custas judiciais/cartorárias, e demais taxas e certidões, que variam
            conforme o patrimônio e a legislação do estado.
          </p>
          <p>
            Uma excelente ideia é procurar quem possui vasta experiência no ramo
            de inventários e partilhas de bens. Procure o Facilitando Inventário
            – Escritório especializado em Inventário e Sucessão (
            <a
              href="https://facilitandoinventario.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              facilitandoinventario.com.br
            </a>
            ) e esteja bem orientado em todas as etapas!
          </p>
        </section>

        {/* Inventário Extrajudicial / Cartório */}
        <section className="section-inventario" id="inventario-extrajudicial">
          <h2>Inventário Extrajudicial/Cartório</h2>
          <p>
            A Lei 11.441/07 desburocratizou o procedimento de inventário ao
            permitir a sua realização em cartório, por meio de escritura
            pública. No entanto, mesmo sendo simples e rápida, alguns requisitos
            precisam ser cumpridos:
          </p>
          <h3>Requisitos do inventário em cartório</h3>
          <ul>
            <li>Não pode haver testamento.</li>
            <li>Herdeiros maiores de idade e civilmente capazes.</li>
            <li>
              Deve ser amigável e haver consenso entre os herdeiros quanto à
              divisão dos bens.
            </li>
          </ul>
          <h3>Documentação necessária</h3>
          <ol>
            <li>Guia de Lançamento de ITCMD;</li>
            <li>DARJ (Documento de Arrecadação do Rio de Janeiro) pago;</li>
            <li>Certidão de óbito do autor da herança;</li>
            <li>Identidade e CPF da meeira, dos herdeiros e do falecido;</li>
            <li>
              Certidão comprobatória do vínculo de parentesco dos herdeiros;
            </li>
            <li>
              Certidão de casamento do cônjuge sobrevivente e dos herdeiros
              casados (pacto antenupcial, se houver);
            </li>
            <li>
              Documentos que comprovem a titularidade dos bens imóveis, móveis e
              direitos;
            </li>
            <li>
              Certidão dos Distribuidores em nome do falecido, do espólio e pelo
              endereço do imóvel;
            </li>
            <li>Certidão para verificação se o falecido deixou testamento;</li>
            <li>Certidão de Interdições e Tutelas dos sucessores;</li>
            <li>
              Certidão negativa da Justiça Federal em nome do “de cujus” e do
              espólio;
            </li>
            <li>
              Certidão negativa de Tributos Federais em nome do “de cujus”;
            </li>
            <li>
              Certidão de Inexistência de Testamento, expedida pela referida
              CENSEC.
            </li>
          </ol>
        </section>

        {/* Necessidade do Advogado */}
        <section
          className="section-inventario"
          id="advogado-inventario-cartorio"
        >
          <h2>O advogado é necessário para fazer inventário em cartório?</h2>
          <p>
            Por força da Lei 11.441/07, é necessária a participação de um
            advogado em todas as modalidades de inventário. Os herdeiros podem
            nomear um único patrono ou cada um pode constituir seu próprio
            representante legal.
          </p>
        </section>

        {/* Inventário Judicial e demais questões */}
        <section className="section-inventario" id="inventario-judicial">
          <h2>Inventário Judicial</h2>
          <p>
            O inventário judicial é realizado sob a supervisão de um juiz,
            especialmente quando há divergência entre os herdeiros, existência
            de testamento ou presença de herdeiros incapazes.
          </p>
          <h3>Inventário Negativo</h3>
          <p>
            O inventário negativo é utilizado para comprovar a inexistência de
            bens a partilhar.
          </p>
          <h3>União Estável</h3>
          <p>
            Se o falecido vivia em união estável, os herdeiros podem reconhecer
            essa união na escritura. Caso o companheiro seja o único herdeiro ou
            haja conflito, o reconhecimento deverá ser feito judicialmente.
          </p>
          <h3>Quanto custa?</h3>
          <p>
            O custo do inventário depende do valor do patrimônio. Em geral, o
            inventário em cartório é mais acessível do que o judicial. Os custos
            básicos incluem:
          </p>
          <ul>
            <li>Emolumentos cartorários e custas processuais;</li>
            <li>
              Emolumentos registrais para transferência de titularidade de bens
              imóveis;
            </li>
            <li>
              Imposto de Transmissão com alíquota progressiva conforme o valor
              do imóvel;
            </li>
            <li>
              Honorários advocatícios, definidos de acordo com a complexidade do
              caso.
            </li>
          </ul>
        </section>

        {/* Diferenciais do Escritório */}
        <section className="section-inventario" id="diferenciais">
          <h2>Nossos Diferenciais</h2>
          <p>
            Descubra o que podemos oferecer para você. Nosso diferencial está na
            utilização de inovadoras técnicas de argumentação lógico-jurídica,
            que proporcionam alta transparência e eficiência. Aqui, o cliente é
            sempre informado – desde o número do processo até o acompanhamento
            do andamento judicial – e não é atendido por estagiários.
          </p>
        </section>

        {/* Call-to-Action */}
        <section className="section-inventario" id="cta-contact">
          <h2>Receba o Contato de um Advogado Especialista</h2>
          <p>
            Vamos conversar sobre o seu caso sem compromisso. O processo de
            inventário pode ser complexo e, em momentos delicados, é fundamental
            contar com a assessoria jurídica adequada.
          </p>
          <button className="cta-button">Fale com o especialista</button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Accacio Monteiro Barrozo. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Inventario;
