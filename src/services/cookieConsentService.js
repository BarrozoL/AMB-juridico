import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

/**
 * Atualiza o consentimento do Google Analytics para ACEITO.
 * Armazena a escolha do usuário no localStorage.
 */
export const handleAcceptCookies = () => {
  if (GA_MEASUREMENT_ID && ReactGA.isInitialized) {
    // Garanta que o ReactGA está inicializado
    ReactGA.gtag("consent", "update", {
      ad_storage: "granted", // Pode ajustar conforme sua necessidade para anúncios
      analytics_storage: "granted", // Essencial para o rastreamento do GA
    });
    localStorage.setItem("cookie_consent_analytics", "granted");
    console.log(
      "GA Consent updated to GRANTED for analytics_storage by user action."
    );
  } else {
    if (!GA_MEASUREMENT_ID)
      console.warn(
        "GA_MEASUREMENT_ID not found in consentService.js for accept."
      );
    if (GA_MEASUREMENT_ID && !ReactGA.isInitialized)
      console.warn("ReactGA not initialized when trying to accept consent.");
  }
};

/**
 * Atualiza o consentimento do Google Analytics para RECUSADO.
 * Armazena a escolha do usuário no localStorage.
 */
export const handleDenyCookies = () => {
  if (GA_MEASUREMENT_ID && ReactGA.isInitialized) {
    // Garanta que o ReactGA está inicializado
    ReactGA.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
    localStorage.setItem("cookie_consent_analytics", "denied");
    console.log(
      "GA Consent updated to DENIED for analytics_storage by user action."
    );
  } else {
    if (!GA_MEASUREMENT_ID)
      console.warn(
        "GA_MEASUREMENT_ID not found in consentService.js for deny."
      );
    if (GA_MEASUREMENT_ID && !ReactGA.isInitialized)
      console.warn("ReactGA not initialized when trying to deny consent.");
  }
};

/**
 * Verifica o localStorage por um consentimento previamente armazenado e o aplica.
 * Esta função deve ser chamada o mais cedo possível na inicialização do app.
 */
export const applyStoredConsent = () => {
  const storedConsent = localStorage.getItem("cookie_consent_analytics");

  if (GA_MEASUREMENT_ID) {
    // Verifica se o ID do GA está disponível
    if (storedConsent === "granted") {
      ReactGA.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
      console.log("Applied stored consent: GRANTED for analytics_storage.");
    } else if (storedConsent === "denied") {
      ReactGA.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
      console.log("Applied stored consent: DENIED for analytics_storage.");
    } else {
      // Nenhuma escolha armazenada, o padrão 'denied' do index.html se aplica.
      console.log(
        "No stored consent found. GA will use default consent settings from index.html."
      );
    }
  } else {
    console.warn(
      "GA_MEASUREMENT_ID not found in consentService.js for applyStoredConsent."
    );
  }
};
