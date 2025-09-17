import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsentBanner from "./components/cookieConsentBanner";
import Analytics from "./components/Analytics";
import GoogleTagManager, {
  GoogleTagManagerNoscript,
} from "./components/GoogleTagManager";

import FloatingWhatsAppButton from "./components/FloatingWhatsappButton";

import { FloatingWhatsAppAnimated } from "./components/FloatingWhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.accaciobarrozo.com"),
  title: {
    default: "Accacio Monteiro Barrozo Assessoria Jurídica",
    template: "%s | Accacio Monteiro Barrozo Assessoria Jurídica",
  },
  description:
    "Advogado especializado em direito imobiliário no Rio de Janeiro. Resolução de execução fiscal, IPTU, e atraso na entrega da obra. Atendimento personalizado e resultados comprovados.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
    maxVideoPreview: -1,
  },
  openGraph: {
    type: "website",
    siteName: "Accacio Monteiro Barrozo Assessoria Jurídica",
    url: "https://www.accaciobarrozo.com/",
    title:
      "Accacio Monteiro Barrozo Assessoria Jurídica — Direito Imobiliário e Execução Fiscal",
    description:
      "Atendimento humano e estratégico em Direito Imobiliário e Execução Fiscal.",
    images: [{ url: "/og/accaciobarrozo-og.jpg", width: 1200, height: 630 }],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Accacio Monteiro Barrozo Assessoria Jurídica - Direito Imobiliário, Execução Fiscal e IPTU",
    description:
      "Advogado especializado em direito imobiliário, execução fiscal e IPTU",
    images: ["/og/accaciobarrozo-og.jpg"],
  },

  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  themeColor: "#253155",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManagerNoscript />
        <Navbar />
        {children}
        <Footer />
        <CookieConsentBanner />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <FloatingWhatsAppAnimated />
        <GoogleTagManager />
      </body>
    </html>
  );
}
