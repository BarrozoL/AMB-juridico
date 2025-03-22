export default function BlogAmb() {
  return (
    <div className="container-geral">
      <h1>Blog AMB</h1>
      <section className="relative w-full bg-white pt-16 pb-20">
        {/* 3 Cards container */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-start">
            <img src={""} alt="Martelo" className="w-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Direito Imobiliário</h2>
            <p className="text-gray-700 mb-4">
              O escritório atua na área do Direito Imobiliário: contratos,
              disputas, e soluções jurídicas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button className="mt-auto bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-4 py-2 rounded transition-colors">
              Saiba Mais
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-start text-white">
            <img src={""} alt="Balança" className="w-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Inventário</h2>
            <p className="mb-4">
              O escritório atua na área de inventários e resolução de heranças,
              simplificando o processo para as famílias em momentos delicados.
            </p>
            <button className="mt-auto bg-white text-gray-800 hover:bg-gray-200 font-semibold px-4 py-2 rounded transition-colors">
              Saiba Mais
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-start">
            <img src={""} alt="Livro" className="w-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Direito Tributário</h2>
            <p className="text-gray-700 mb-4">
              O escritório atua na área do Direito Tributário: consultoria e
              planejamento fiscal para empresas e indivíduos.
            </p>
            <button className="mt-auto bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold px-4 py-2 rounded transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
      <p></p>
    </div>
  );
}
