import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import ambLogo from "../assets/images/amb-logo.png";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img className="logo" src={ambLogo} />
      </NavLink>

      <nav className="navbar-nav">
        <ul>
          <li className="nav-item">
            <NavLink to="/quem-somos" className="nav-item nav-link">
              Quem Somos +
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink
                  to="/areas-de-atuacao"
                  className="nav-item nav-link dropdown-nav-link"
                >
                  Áreas de Atuação
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/equipe"
                  className="nav-item nav-link dropdown-nav-link"
                >
                  Equipe
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Dropdown imobiliário */}
          <li className="nav-item">
            <NavLink to="/imobiliario" className="nav-item nav-link">
              Imobiliário +
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink
                  to="/atraso-na-entrega-da-obra"
                  className="nav-item nav-link"
                >
                  Atraso na Entrega da Obra
                </NavLink>
              </li>
              <li>
                <NavLink to="/defeito-na-obra" className="nav-item nav-link">
                  Defeito na Obra
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/devoluçao-de-imovel"
                  className="nav-item nav-link"
                >
                  Devolução de Imóvel
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/distrato-de-compra-do-imovel"
                  className="nav-item nav-link"
                >
                  Distrato de Compra do Imóvel
                </NavLink>
              </li>
            </ul>
          </li>

          <NavLink to="/juridico" className="nav-item nav-link">
            Jurídico
          </NavLink>

          <NavLink to="/inventario" className="nav-item nav-link">
            Inventário
          </NavLink>

          <NavLink to="/blog-amb" className="nav-item nav-link">
            Blog AMB
          </NavLink>
          <NavLink to="/contato" className="nav-item nav-link">
            Contato
          </NavLink>
        </ul>
      </nav>
      <div className="entre-em-contato-nav">
        <p>Fale com o Dr. Accacio agora mesmo:</p>
        <p className="numero-contato-nav">(21) 3506-4713</p>
      </div>
    </div>
  );
};

export default Navbar;
