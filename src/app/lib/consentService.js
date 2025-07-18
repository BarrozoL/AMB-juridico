import ReactGA from "react-ga4";

/** ⬇️  Next.js exposes client‑side env vars as process.env.NEXT_PUBLIC_* */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

/* ---------- Accept ---------- */
export const handleAcceptCookies = () => {
  if (typeof window === "undefined") return; // SSR safety

  if (GA_MEASUREMENT_ID && ReactGA.isInitialized) {
    ReactGA.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    localStorage.setItem("cookie_consent_analytics", "granted");
    console.log("GA consent set to GRANTED");
  } else {
    console.warn(
      "handleAcceptCookies: GA ID missing or ReactGA not initialised"
    );
  }
};

/* ---------- Deny ---------- */
export const handleDenyCookies = () => {
  if (typeof window === "undefined") return; // SSR safety

  if (GA_MEASUREMENT_ID && ReactGA.isInitialized) {
    ReactGA.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
    localStorage.setItem("cookie_consent_analytics", "denied");
    console.log("GA consent set to DENIED");
  } else {
    console.warn("handleDenyCookies: GA ID missing or ReactGA not initialised");
  }
};

/* ---------- Apply stored choice on page load ---------- */
export const applyStoredConsent = () => {
  if (typeof window === "undefined") return; // SSR safety

  const stored = localStorage.getItem("cookie_consent_analytics");

  if (!GA_MEASUREMENT_ID) {
    console.warn("applyStoredConsent: GA ID missing");
    return;
  }
  if (stored === "granted") {
    ReactGA.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  } else if (stored === "denied") {
    ReactGA.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
  } else {
    console.log("No stored consent; default (denied) remains.");
  }
};
