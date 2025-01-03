import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

//Pages:
import QuemSomos from "./pages/QuemSomos";
import Imobiliario from "./pages/Imobiliario";
import Juridico from "./pages/Juridico";
import BlogAmb from "./pages/BlogAmb";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/" element={<QuemSomos />} />
        <Route exact path="/quem-somos" element={<QuemSomos />} />
        <Route exact path="/imobiliario" element={<Imobiliario />} />
        <Route exact path="/juridico" element={<Juridico />} />
        <Route exact path="/blog-amb" element={<BlogAmb />} />
      </Routes>
    </Router>
  );
}

export default App;
