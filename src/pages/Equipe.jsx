import React from "react";

// Example team data (replace with your real data)
const teamMembers = [
  {
    nome: "Accacio Monteiro Barrozo",
    cargo: "Sócio fundador",
    descricao:
      "Sócio-Fundador do escritório, é advogado especialista em Direito Imobiliário, atuando há mais de 22 anos na área.",
  },
  {
    nome: "Rodrigo Rodrigues Correa",
    cargo: "Advogado",
    descricao:
      "Advogado formado pelo Instituto Brasileiro de Mercado de Capitais – IBMEC, é pós-graduado em Direito Processual Civil e tem MBA em Gestão em Negócios.",
  },
  {
    nome: "Rodrigo Rodrigues Correa",
    cargo: "Advogado",
    descricao:
      "Advogado formado pelo Instituto Brasileiro de Mercado de Capitais – IBMEC, é pós-graduado em Direito Processual Civil e tem MBA em Gestão em Negócios.",
  },
  {
    nome: "Andre da Silva Francisco",
    cargo: "Advogado",
    descricao: "É advogado, formado pela Universidade Salgado de Oliveira.",
  },
  {
    nome: "Agnes Felippe",
    cargo: "Estagiária",
    descricao: "Estagiária do escritório, estudante de Direito.",
  },
];

export default function Equipe() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-[rgba(37,49,85,1)]">
        Equipe
      </h1>

      {/* Grid of team members */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {teamMembers.map((membro, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:-translate-y-1 transition-transform duration-200"
          >
            <h2 className="text-xl font-semibold text-[rgba(37,49,85,1)] mb-1">
              {membro.nome}
            </h2>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              {membro.cargo}
            </h3>
            <p className="text-gray-600 leading-relaxed">{membro.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
