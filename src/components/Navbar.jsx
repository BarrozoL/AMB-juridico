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
          <NavLink to="/quem-somos" className="nav-link">
            Quem Somos
          </NavLink>

          <NavLink to="/imobiliario" className="nav-link">
            Imobiliário
          </NavLink>

          <NavLink to="/juridico" className="nav-link">
            Jurídico
          </NavLink>

          <NavLink to="/inventario" className="nav-link">
            Inventário
          </NavLink>

          <NavLink to="/blog-amb" className="nav-link">
            Blog AMB
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
