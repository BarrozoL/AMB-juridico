import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import "./App.css";

import CookieConsentBanner from "./components/cookieConsentBanner";
import { applyStoredConsent } from "./services/cookieConsentService";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages:
import QuemSomos from "./pages/QuemSomos";
import HomePage from "./pages/HomePage";
import Inventario from "./pages/Inventario";
import AreasDeAtuacao from "./pages/AreasDeAtuaçao";

import EscrituraDefinitivaNegada from "./pages/EscrituraDefinitivaNegada";
import ExecuçaoFiscal from "./pages/ExecuçaoFiscal";

//Imobiliário
import Imobiliario from "./pages/Imobiliario";
import AtrasoNaEntregaDaObra from "./pages/AtrasoNaEntregaDaObra";
import DefeitoNaObra from "./pages/DefeitoNaObra";
import DevoluçaoDeImovel from "./pages/DevoluçaoDeImovel";
import DistratoDeCompra from "./pages/DistratoDeCompra";

//Blog
import BlogAmb from "./pages/BlogAmb";
import BlogPostsAmb from "./pages/BlogPostsAmb";

//Causas Vencidas
import CausasVencidas from "./pages/CausasVencidas";
import CausasVencidasPosts from "./pages/CausasVencidasPosts";

import Contato from "./pages/Contato";
import FormCompletePage from "./pages/FormCompletePage";
import ErrorPage from "./pages/ErrorPage";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

// Componente para rastrear mudanças de rota (visualizações de página SPA)
function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    // Verifica se o ReactGA foi inicializado antes de enviar um pageview
    if (ReactGA.isInitialized) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
        title: document.title, // Pega o título da página atual
      });
      console.log(
        `GA: Pageview sent via react-ga4 for ${
          location.pathname + location.search
        }`
      );
    }
  }, [location]); // Dispara sempre que a 'location' (rota) mudar

  return null; // Não renderiza nada visualmente
}

function App() {
  // Inicializa o ReactGA uma vez quando o App é montado
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      // 4. CHAMAR applyStoredConsent ANTES de ReactGA.initialize
      applyStoredConsent();

      ReactGA.initialize(GA_MEASUREMENT_ID);
      console.log(
        "ReactGA initialized with ID (from env var):",
        GA_MEASUREMENT_ID
      );
    } else {
      console.warn(
        "Google Analytics Measurement ID (VITE_GA_ID) not found in .env. ReactGA Tracking will be disabled."
      );
    }
  }, []);

  return (
    <Router>
      {/* Renderiza o RouteChangeTracker apenas se o GA ID estiver presente para evitar erros */}
      {GA_MEASUREMENT_ID && <RouteChangeTracker />}

      <CookieConsentBanner />

      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/quem-somos" element={<QuemSomos />} />
        <Route exact path="/areas-de-atuacao" element={<AreasDeAtuacao />} />

        <Route exact path="/inventario" element={<Inventario />} />

        <Route exact path="/execuçao-fiscal" element={<ExecuçaoFiscal />} />

        {/* Routes Imobiliário: */}
        <Route exact path="/imobiliario" element={<Imobiliario />} />
        <Route exact path="/defeito-na-obra" element={<DefeitoNaObra />} />
        <Route
          exact
          path="/devoluçao-de-imovel"
          element={<DevoluçaoDeImovel />}
        />
        <Route
          exact
          path="/atraso-na-entrega-da-obra"
          element={<AtrasoNaEntregaDaObra />}
        />
        <Route
          exact
          path="/distrato-de-compra-do-imovel"
          element={<DistratoDeCompra />}
        />

        <Route
          exact
          path="/escritura-definitiva-negada"
          element={<EscrituraDefinitivaNegada />}
        />

        <Route exact path="/blog-amb" element={<BlogAmb />} />
        <Route path="/blog/:slug" element={<BlogPostsAmb />} />

        <Route exact path="/causas-vencidas" element={<CausasVencidas />} />
        <Route
          path="/causas-vencidas/:slug"
          element={<CausasVencidasPosts />}
        />

        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/form-complete" element={<FormCompletePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
