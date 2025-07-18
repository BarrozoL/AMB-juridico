export default function QuemSomos() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="w-full max-w-5xl mx-auto px-11 py-8">
          <header className="text-center bg-gradient-to-r from-[#005f40] to-[#253155] text-white py-16 rounded-md mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Quem Somos</h1>
            <p className="text-base md:text-lg opacity-90">
              Conheça nossa história, missão, visão e valores
            </p>
          </header>

          <section className="bg-white rounded-md p-6 mb-8 shadow-md">
            <h2 className="text-2xl text-[#253155] font-bold mb-4">
              Nossa História
            </h2>
            <p className="mb-4 text-justify">
              O escritório{" "}
              <strong>Accacio Monteiro Barrozo Assessoria Jurídica </strong>
              está consolidado há quase 30 anos no mundo jurídico, superando a
              marca de dois mil clientes, atuando de forma preventiva,
              consultiva e contenciosa em procedimentos judiciais e
              extrajudiciais.
            </p>
            <p className="mb-4 text-justify">
              Accacio Monteiro Barrozo é o sócio fundador do escritório,
              pós-graduado em Direito Imobiliário pela Escola da Magistratura do
              Estado do Rio de Janeiro (Emerj), Direito da Empresa e da Economia
              pela Fundação Getúlio Vargas e Direito Processual Civil pela
              Universidade Cândido Mendes. Além disso, é bacharel em
              Administração de Empresas.
            </p>
            <p className="mb-4 text-justify">
              Sob a gestão de seu sócio fundador, o escritório conta com uma
              equipe jurídica multidisciplinar, oferecendo serviços de
              excelência, desde 1996, nas áreas imobiliária, registral,
              inventário e sucessões e Direito Tributário, focado na defesa dos
              contribuintes nas execuções fiscais.
            </p>
          </section>

          {/* Missão */}
          <section className="bg-white rounded-md p-6 mb-8 shadow-md">
            <h2 className="text-2xl text-[#253155] font-bold mb-4">Missão</h2>
            <p className="mb-4 text-justify">
              Defender os direitos dos nossos clientes com a prestação de
              serviços jurídicos de alta qualidade, buscando a solução de
              conflitos de forma rápida e eficiente.
            </p>
          </section>

          {/* Visão */}
          <section className="bg-white rounded-md p-6 mb-8 shadow-md">
            <h2 className="text-2xl text-[#253155] font-bold mb-4">Visão</h2>
            <p className="mb-4 text-justify">
              Alcançar reconhecimento nacional, defendendo cada vez mais
              clientes e causas sociais relevantes, de modo a tornar a justiça
              sempre mais acessível.
            </p>
          </section>

          {/* Valores */}
          <section className="bg-white rounded-md p-6 mb-8 shadow-md">
            <h2 className="text-2xl text-[#253155] font-bold mb-4">Valores</h2>
            <p className="mb-4 text-justify">
              Ética, respeito, lealdade, trabalho em equipe, transparência,
              entusiasmo e comprometimento.
            </p>
          </section>
          <div className="md:col-span-1"></div>
        </div>
      </div>
    </>
  );
}
