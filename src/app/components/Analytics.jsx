"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Script from "next/script";
import ReactGA from "react-ga4";
import { applyStoredConsent } from "../lib/consentService";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Loads the GA tag, sets default Consent‑Mode = denied,
 * then initialises ReactGA and tracks SPA navigation.
 */
export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasInit = useRef(false); // dev‑server HMR guard

  /* —— 1. load the GA script & Consent‑Mode bootstrap —— */
  if (!GA_ID) return null; // no ID → skip analytics

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="ga-consent-default"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage:        'denied',
              analytics_storage: 'denied',
              ad_user_data:      'denied',
              ad_personalization:'denied',
              wait_for_update: 500
            });
          `,
        }}
      />

      {/* 2. React side: init once, then track route changes */}
      <GaClient
        pathname={pathname}
        search={searchParams.toString()}
        hasInit={hasInit}
      />
    </>
  );
}

function GaClient({ pathname, search, hasInit }) {
  /* ----- run once on first mount ----- */
  useEffect(() => {
    if (hasInit.current || !GA_ID) return;

    ReactGA.initialize(GA_ID); // 🔑  create GA instance
    applyStoredConsent(); // 🔑  honour stored choice
    hasInit.current = true;
  }, []);

  /* ----- fire a page‑view on every route change ----- */
  useEffect(() => {
    if (!hasInit.current) return; // GA not ready yet
    const url = search ? `${pathname}?${search}` : pathname;
    ReactGA.send({ hitType: "pageview", page: url, title: document.title });
  }, [pathname, search]);

  return null;
}
