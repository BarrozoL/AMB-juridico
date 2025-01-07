import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

//Pages:
import QuemSomos from "./pages/QuemSomos";

import Juridico from "./pages/Juridico";
import BlogAmb from "./pages/BlogAmb";
import HomePage from "./pages/HomePage";
import Inventario from "./pages/Inventario";
import AreasDeAtuacao from "./pages/AreasDeAtuaçao";
import Equipe from "./pages/Equipe";

import Contato from "./pages/Contato";

//Imobiliário
import Imobiliario from "./pages/Imobiliario";
import AtrasoNaEntregaDaObra from "./pages/AtrasoNaEntregaDaObra";
import DefeitoNaObra from "./pages/DefeitoNaObra";
import DevolucaoDeImovel from "./pages/DevoluçaoDeImovel";
import DistratoDeCompra from "./pages/DistratoDeCompra";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/quem-somos" element={<QuemSomos />} />
        <Route exact path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
        <Route exact path="/equipe" element={<Equipe />} />
        <Route exact path="/inventario" element={<Inventario />} />

        {/* Routes Imobiliário: */}
        <Route exact path="/imobiliario" element={<Imobiliario />} />
        <Route exact path="/defeito-na-obra" element={<DefeitoNaObra />} />
        <Route
          exact
          path="/devoluçao-de-imovel"
          element={<DevolucaoDeImovel />}
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

        <Route exact path="/juridico" element={<Juridico />} />
        <Route exact path="/blog-amb" element={<BlogAmb />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
