"use client";

import React, { useState, useEffect } from "react";

import { handleAcceptCookies, handleDenyCookies } from "../lib/consentService";

function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica no localStorage se o usuário já fez uma escolha anteriormente.
    const consentChoiceMade = localStorage.getItem("cookie_consent_analytics");
    if (!consentChoiceMade) {
      // Se nenhuma escolha foi feita, mostra o banner.
      setIsVisible(true);
    }
  }, []); // Executa apenas uma vez, na montagem do componente.

  const onAccept = () => {
    handleAcceptCookies();
    setIsVisible(false); // Esconde o banner após a ação.
  };

  const onDeny = () => {
    handleDenyCookies();
    setIsVisible(false); // Esconde o banner após a ação.
  };

  if (!isVisible) {
    return null; // Não renderiza nada se o banner não deve ser visível.
  }

  return (
    <div
      className="
        fixed bottom-0 left-0 w-full
        bg-slate-800 text-slate-100
        p-4 md:p-6
        text-center
        z-50
        shadow-lg
        flex flex-col items-center justify-center gap-4
      "
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-consent-heading"
    >
      <div className="max-w-3xl w-full">
        <h2 id="cookie-consent-heading" className="sr-only">
          Aviso de Cookies
        </h2>{" "}
        {/* Para acessibilidade */}
        <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-0">
          Este site utiliza cookies para análise e para melhorar sua
          experiência. Ao clicar em "Aceitar", você concorda com o uso de
          cookies para esses fins. Você pode recusar clicando em "Recusar".
          {/* Para mais informações, visite nossa <a href="/politica-de-privacidade" className="text-blue-400 hover:text-blue-300 underline">Política de Privacidade</a>. */}
        </p>
      </div>
      <div
        className="
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-3 sm:gap-4
          w-full sm:w-auto
        "
      >
        <button
          onClick={onAccept}
          className="
          cursor-pointer
            w-full sm:w-auto
            py-2 px-5
            bg-green-600 hover:bg-green-700 text-white
            font-bold text-sm
            rounded-md
            transition-colors duration-300 ease-in-out
          "
        >
          Aceitar
        </button>
        <button
          onClick={onDeny}
          className="
            w-full sm:w-auto
            py-2 px-5
            bg-blue-400 hover:bg-red-800 text-white
            font-bold text-sm
            rounded-md
            transition-colors duration-300 ease-in-out
          "
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

export default CookieConsentBanner;
