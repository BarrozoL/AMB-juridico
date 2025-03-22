import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ambLogo from "../assets/images/amb-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = (
    <ul className="flex flex-col md:flex-row md:items-center list-none m-0 p-0">
      <li
        className="relative text-black uppercase font-bold group hover:bg-[rgb(106,106,101)]"
        onClick={closeMobileMenu}
      >
        <NavLink
          to="/areas-de-atuacao"
          className="block p-2 rounded-sm text-[15px]"
        >
          Áreas de Atuação
        </NavLink>
      </li>
      <li
        className="relative text-black uppercase font-bold group hover:bg-[rgb(106,106,101)]"
        onClick={closeMobileMenu}
      >
        <NavLink to="/quem-somos" className="block p-2 rounded-sm text-[15px]">
          Quem Somos +
        </NavLink>
        <ul className="hidden group-hover:block absolute top-full left-0 bg-gray-400 p-2 rounded-md w-max mt-1">
          <li className="mb-2">
            <NavLink
              to="/quem-somos"
              className="block p-2 rounded-sm text-[15px]"
            >
              Sobre a empresa
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipe" className="block p-2 rounded-sm text-[15px]">
              Equipe
            </NavLink>
          </li>
        </ul>
      </li>
      <li
        className="relative text-black uppercase font-bold group hover:bg-[rgb(106,106,101)]"
        onClick={closeMobileMenu}
      >
        <NavLink to="/imobiliario" className="block p-2 rounded-sm text-[15px]">
          Imobiliário +
        </NavLink>
        <ul className="hidden group-hover:block absolute top-full left-0 bg-gray-400 p-2 rounded-md w-max mt-1">
          <li className="mb-2">
            <NavLink
              to="/atraso-na-entrega-da-obra"
              className="block p-2 rounded-sm text-[15px]"
            >
              Atraso na Entrega da Obra
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/defeito-na-obra"
              className="block p-2 rounded-sm text-[15px]"
            >
              Defeito na Obra
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/devoluçao-de-imovel"
              className="block p-2 rounded-sm text-[15px]"
            >
              Devolução de Imóvel
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/distrato-de-compra-do-imovel"
              className="block p-2 rounded-sm text-[15px]"
            >
              Distrato de Compra do Imóvel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/escritura-definitiva-negada"
              className="block p-2 rounded-sm text-[15px]"
            >
              Escritura Definitiva Negada
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="text-black uppercase font-bold" onClick={closeMobileMenu}>
        <NavLink to="/inventario" className="block p-2 rounded-sm text-[15px]">
          Inventário +
        </NavLink>
        <ul className="hidden group-hover:block absolute top-full left-0 bg-gray-400 p-2 rounded-md w-max mt-1">
          <li className="mb-2">
            <NavLink
              to="/inventario"
              className="block p-2 rounded-sm text-[15px]"
            >
              O que é um inventário?
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/partilha-de-herança"
              className="block p-2 rounded-sm text-[15px]"
            >
              Partilha de herança
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventario-judicial-e-extrajudicial"
              className="block p-2 rounded-sm text-[15px]"
            >
              Inventário judicial e extrajudicial
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="text-black uppercase font-bold" onClick={closeMobileMenu}>
        <NavLink to="/blog-amb" className="block p-2 rounded-sm text-[15px]">
          Blog AMB
        </NavLink>
      </li>
      <li className="text-black uppercase font-bold" onClick={closeMobileMenu}>
        <NavLink to="/contato" className="block p-2 rounded-sm text-[15px]">
          Contato
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="w-screen fixed top-0 left-0 z-[1001] bg-white shadow-md">
      <div className="flex items-center justify-between w-full max-w-7xl px-4 py-2 relative">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={ambLogo}
            alt="AMB Logo"
            className="max-w-[11em] sm:max-w-[14em] p-1 mt-2 sm:mt-0"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:block">{navLinks}</nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl text-black focus:outline-none"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Contact Info (visible on desktop) */}
        <div className="hidden md:absolute md:right-4 md:top-4 text-black">
          <p className="font-sans text-sm">
            Fale com o Dr. Accacio agora mesmo:
          </p>
          <p className="text-[rgb(209,154,87)] text-sm">(21) 3506-4713</p>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          {navLinks}
          <div className="px-4 py-2 border-t border-gray-200 text-black">
            <p className="font-sans text-sm">
              Fale com o Dr. Accacio agora mesmo:
            </p>
            <p className="text-[rgb(209,154,87)] text-sm">(21) 3506-4713</p>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
