import React from "react";

export default function ContatoPage() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* ===== Left Side: Info ===== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Tem dúvidas sobre sua situação jurídica? Deseja agendar uma
            consulta? Entre em contato conosco preenchendo o formulário ou
            utilizando os dados abaixo.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5521999684428&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <button className="bg-[#253155] cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Fale com um especialista
            </button>
          </a>
          <br />
          <br />
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              <span className="font-semibold">Whatsapp:</span>
              <br />
              (21) 99968-4428
            </p>
            <p>
              <span className="font-semibold">Telefone:</span>
              <br />
              (21) 3506-4713
            </p>
            <p>
              <span className=" font-semibold ">Endereço:</span>
              <br />
              Av. Rio Branco,185, sala: 1.113
              <br />
              Centro – Rio de Janeiro – RJ.
              <br />
              Cep.: 20.040-007
            </p>
            <p>
              <span className="font-semibold">Email:</span>
              <br />
              juridico@accaciobarrozo.com.br
            </p>

            <p>
              <span className="font-semibold">Horário de Atendimento:</span>
              <br />
              Segunda à Sexta, das 9h às 18h
            </p>
          </div>
        </div>

        {/* ===== Right Side: Form ===== */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(37,49,85,1)]"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(37,49,85,1)]"
                placeholder="Seu email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(37,49,85,1)]"
                placeholder="Seu telefone"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                rows="5"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[rgba(37,49,85,1)]"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white font-semibold py-2 rounded transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
