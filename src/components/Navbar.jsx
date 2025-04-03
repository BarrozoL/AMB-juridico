import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ambLogo from "../assets/images/amb-logo.png";
import logoPequeno from "../assets/images/logo-amb-pequeno.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Define standard link classes for consistency
  const baseLinkClasses =
    "block p-4 px-auto rounded-md text-sm hover:text-bold font-medium text-gray-700 transition-colors duration-150 ease-in-out";
  const hoverClasses =
    "hover:bg-neutral-100 hover:font-bold hover:text-yellow-600"; // Subtle hover
  const activeClasses = "[&.active]:bg-neutral-100 [&.active]:font-semibold"; // Subtle active state

  // Define dropdown link classes
  const dropdownBaseLinkClasses =
    "block p-2 px-4 rounded-md text-sm text-gray-700 transition-colors duration-150 ease-in-out"; // Slightly less horizontal padding for dropdowns

  // Define dropdown panel classes
  const dropdownPanelClasses =
    "hidden group-hover:block absolute top-full left-0 bg-white p-2 rounded-md w-max mt-0 shadow-lg ring-1 ring-black ring-opacity-5 z-10"; // Improved dropdown appearance

  const navLinks = (
    <ul className="flex flex-col md:flex-row md:items-center list-none m-0 p-0">
      {/* === Áreas de Atuação === */}
      <li className="relative text-black group" onClick={closeMobileMenu}>
        <NavLink
          to="/areas-de-atuacao"
          className={`${baseLinkClasses} ${hoverClasses} ${activeClasses}`}
        >
          Áreas de Atuação
        </NavLink>
      </li>

      {/* === Quem Somos (Dropdown) === */}
      <li className="relative text-black group" onClick={closeMobileMenu}>
        <NavLink
          to="/quem-somos" // Main link often goes to the first sub-item or an overview page
          className={`${baseLinkClasses} ${hoverClasses} ${activeClasses}`}
        >
          Quem Somos +
        </NavLink>
        <ul className={dropdownPanelClasses}>
          <li className="mb-1">
            <NavLink
              to="/quem-somos"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()} // Prevent parent li onClick closeMobileMenu
            >
              Sobre a empresa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/equipe"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Equipe
            </NavLink>
          </li>
        </ul>
      </li>

      {/* === Imobiliário (Dropdown) === */}
      <li className="relative text-black group" onClick={closeMobileMenu}>
        <NavLink
          to="/imobiliario"
          className={`${baseLinkClasses} ${hoverClasses} ${activeClasses}`}
        >
          Imobiliário +
        </NavLink>
        <ul className={dropdownPanelClasses}>
          <li className="mb-1">
            <NavLink
              to="/atraso-na-entrega-da-obra"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Atraso na Entrega da Obra
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/defeito-na-obra"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Defeito na Obra
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/devolucao-de-imovel"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Devolução de Imóvel
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/distrato-de-compra-do-imovel"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Distrato de Compra do Imóvel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/escritura-definitiva-negada"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Escritura Definitiva Negada
            </NavLink>
          </li>
        </ul>
      </li>

      {/* === Inventário (Dropdown) === */}
      <li className="relative text-black group" onClick={closeMobileMenu}>
        <NavLink
          to="/inventario" // Main link
          className={`${baseLinkClasses} ${hoverClasses} ${activeClasses}`}
        >
          Inventário +
        </NavLink>
        <ul className={dropdownPanelClasses}>
          <li className="mb-1">
            <NavLink
              to="/inventario"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              O que é um inventário?
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/partilha-de-heranca"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Partilha de herança
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventario-judicial-e-extrajudicial"
              className={`${dropdownBaseLinkClasses} ${hoverClasses} ${activeClasses}`}
              onClick={(e) => e.stopPropagation()}
            >
              Inventário judicial e extrajudicial
            </NavLink>
          </li>
        </ul>
      </li>

      {/* === Blog AMB === */}
      <li
        className="relative text-black font-bold group"
        onClick={closeMobileMenu}
      >
        <NavLink
          to="/blog-amb"
          className={`${baseLinkClasses} ${hoverClasses} ${activeClasses}`}
        >
          Blog AMB
        </NavLink>
      </li>

      {/* === Contato === */}
      <li
        className="relative text-black font-bold group"
        onClick={closeMobileMenu}
      >
        <NavLink
          to="/contato"
          className={`${baseLinkClasses} ${hoverClasses} ${activeClasses}`}
        >
          Contato
        </NavLink>
      </li>
    </ul>
  );

  return (
    // Sticky Navbar container
    <div className="w-screen sticky top-0 left-0 z-[1001] bg-white shadow-md">
      {/* Contact Info (visible on desktop, absolutely positioned) */}
      {/* Adjusted top slightly for better alignment with padding */}
      <div className="hidden md:block absolute right-10 top-2 text-black">
        <p className="text-sm font-sans">Fale com o Dr. Accacio agora mesmo:</p>
        {/* Kept specific RGB color as it seems intentional */}
        <p className="text-[rgb(209,154,87)] font-sans text-lg font-semibold text-right">
          (21) 3506-4713
        </p>
      </div>

      {/* Main Navbar content alignment */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-0 px-4 py-2 relative">
        {" "}
        {/* Centered content with mx-auto */}
        {/* Logo */}
        <NavLink to="/" onClick={closeMobileMenu}>
          <img
            src={logoPequeno}
            alt="AMB Logo"
            className="max-w-[10em] sm:max-w-[7em]" // Simplified classes
          />
        </NavLink>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">{navLinks}</nav>
        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-4xl mr-2 text-gray-700 hover:text-gray-900 focus:outline-none" // Adjusted color slightly
          >
            {mobileMenuOpen ? "✕" : "☰"} {/* Close and Menu icons */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Appears below when open) */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          {" "}
          {/* Added shadow */}
          {navLinks} {/* Uses the same styled links */}
          {/* Mobile Contact Info */}
          <div className="px-5 py-3 border-t border-gray-200 text-black">
            {" "}
            {/* Adjusted padding */}
            <p className="font-sans text-sm mb-1">
              {" "}
              {/* Added margin bottom */}
              Fale com o Dr. Accacio agora mesmo:
            </p>
            <p className="text-[rgb(209,154,87)] text-sm font-semibold">
              (21) 3506-4713
            </p>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
