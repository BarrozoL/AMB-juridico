import { useState } from "react";

export default function PopUp() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={() => setIsVisible(false)}
        >
          &#10005;
        </button>
        <h2 className="text-lg text-center font-bold text-gray-800 mb-4">
          🎉Comemorando 29 Anos de Excelência! 🎉
        </h2>
        <p className="text-justify text-gray-600">
          Em celebração ao nosso 29º aniversário, estamos muito felizes em
          apresentar o novo design do nosso website! 🎉 Confira o nosso novo
          site e aproveite para explorar os nossos serviços!
        </p>
        <div className="w-full h-[2px] bg-blue-500 my-4"></div>
        <p className="text-justify text-gray-600 mt-4">
          🔒 Atenção: Este escritório realiza contatos apenas pelo telefone:
        </p>
        <ul className="text-justify text-gray-600 mb-2">
          <li> (21) 99968-4428</li>
        </ul>
        <p className="text-justify text-gray-600 mb-2">e pelos e-mails:</p>
        <ul className="text-justify text-gray-600 mb-2">
          <li>financeiro@accaciobarrozo.com.br</li>
          <li>juridico@accaciobarrozo.com.br</li>
        </ul>
        <p className="text-justify text-gray-600 mb-2">
          🛡️ Confirme a identidade do seu advogado na plataforma digital
          disponibilizada pela OAB em: {""}
        </p>
        <a
          className="text-blue-700 underline"
          href="https://confirmadv.oab.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          confirmadv.oab.org.br
        </a>
      </div>
    </div>
  );
}
