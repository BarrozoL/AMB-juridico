import React, { useState } from "react";
import logoPequeno from "../assets/images/AMB-logo.png";
import TabletNav from "../components/TabletNav";

/**
 * NAV DATA
 * Each item can have:
 *   label    (string)
 *   path     (string)
 *   dropdown (boolean)
 *   subItems ([ { label, path }, ... ]) if dropdown == true
 */
const navItems = [
  {
    label: "Áreas de Atuação",
    path: "/areas-de-atuacao",
    dropdown: false,
  },
  {
    label: "Quem Somos",
    path: "/quem-somos",
    dropdown: true,
    subItems: [{ label: "Sobre a empresa", path: "/quem-somos" }],
  },
  {
    label: "Execução Fiscal",
    path: "/execuçao-fiscal",
    dropdown: false,
  },
  {
    label: "Imobiliário",
    path: "/imobiliario",
    dropdown: true,
    subItems: [
      {
        label: "Atraso na Entrega da Obra",
        path: "/atraso-na-entrega-da-obra",
      },
      { label: "Defeito na Obra", path: "/defeito-na-obra" },
      { label: "Devolução de Imóvel", path: "/devoluçao-de-imovel" },
      {
        label: "Distrato de Compra do Imóvel",
        path: "/distrato-de-compra-do-imovel",
      },
      {
        label: "Escritura Definitiva Negada",
        path: "/escritura-definitiva-negada",
      },
    ],
  },
  {
    label: "Inventário",
    path: "/inventario",
    dropdown: true,
    subItems: [
      { label: "O que é um inventário?", path: "/inventario" },
      /*  { label: "Partilha de herança", path: "/partilha-de-heranca" },
      {
        label: "Inventário judicial e extrajudicial",
        path: "/inventario-judicial-e-extrajudicial",
      }, */
    ],
  },
  {
    label: "Causas Vencidas",
    path: "/causas-vencidas",
    dropdown: false,
  },
  {
    label: "Blog AMB",
    path: "/blog-amb",
    dropdown: false,
  },
  {
    label: "Contato",
    path: "/contato",
    dropdown: false,
  },
];

/* -------------------------------------------
   Desktop Nav (shown at lg+)
   Hover-based dropdown
-------------------------------------------- */
function DesktopNav() {
  return (
    <ul className="flex gap-6 items-center">
      {navItems.map((item, i) => {
        if (!item.dropdown) {
          return (
            <li key={i} className="list-none">
              <a
                href={item.path}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-neutral-100 hover:text-yellow-600 rounded-md"
              >
                {item.label}
              </a>
            </li>
          );
        }

        // With dropdown
        return (
          <li key={i} className="relative list-none group">
            <a
              href={item.path}
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-neutral-100 hover:text-yellow-600 rounded-md"
            >
              {item.label}
            </a>
            {/* Submenu (shown on hover) */}
            <ul className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md p-2 rounded-md mt-0 z-10 min-w-[10rem]">
              {item.subItems.map((sub, j) => (
                <li key={j} className="mb-1 last:mb-0">
                  <a
                    href={sub.path}
                    className="block px-3 py-1 text-sm rounded-md text-gray-700 hover:bg-neutral-100 hover:text-yellow-600"
                  >
                    {sub.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

/* -------------------------------------------
   Mobile Nav (shown at <md)
   Click-based dropdown 
-------------------------------------------- */
function MobileNav({ isOpen, closeMenu }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  if (!isOpen) return null;

  return (
    <nav className="md:hidden sticky bg-white border-t border-gray-200 shadow-md">
      <ul className="flex flex-col">
        {navItems.map((item, i) => {
          if (!item.dropdown) {
            return (
              <li key={i} className="border-b last:border-b-0">
                <a
                  href={item.path}
                  className="block px-4 py-3 text-gray-700 text-sm font-medium"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            );
          }

          const isDropdownOpen = openDropdown === item.label;
          return (
            <li key={i} className="border-b last:border-b-0">
              <button
                onClick={() => toggleDropdown(item.label)}
                className="flex justify-between w-full px-4 py-3 text-gray-700 text-sm font-medium"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                <span>{item.label}</span>
                <span>{isDropdownOpen ? "▲" : "▼"}</span>
              </button>

              {isDropdownOpen && (
                <ul className="pl-6 pb-3">
                  {item.subItems.map((sub, j) => (
                    <li key={j}>
                      <a
                        href={sub.path}
                        className="block py-1 text-gray-700 text-sm"
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}

        <li className="px-4 py-3 border-t border-gray-200 text-sm text-black">
          <p>Fale com o Dr. Accacio agora:</p>
          <p className="text-[rgb(209,154,87)] font-semibold">(21) 3506-4713</p>
        </li>
      </ul>
    </nav>
  );
}

/* -------------------------------------------
   MAIN NAVBAR COMPONENT
   Shows:
     - MobileNav at <md
     - TabletNav at md–<lg
     - DesktopNav at lg+
-------------------------------------------- */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white shadow-md">
      {/* Top Row: Logo + appropriate nav + hamburger */}
      <div className="flex items-center w-full max-w-7xl mx-auto px-4 py-2">
        {/* Logo */}
        <a href="/" onClick={closeMobileMenu} className="mr-4">
          <img
            src={logoPequeno}
            alt="AMB Logo"
            className="max-w-[10em] object-contain"
          />
        </a>

        {/* Desktop Nav (lg+) */}
        <nav className="hidden lg:flex flex-1">
          <DesktopNav />
        </nav>

        {/* Tablet Nav (md–<lg) */}
        <nav className="hidden md:flex lg:hidden flex-1">
          <TabletNav navItems={navItems} />
        </nav>

        {/* Mobile Menu Toggle (<md only) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-gray-700 hover:text-gray-900 ml-auto"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav (<md) */}
      <MobileNav isOpen={mobileMenuOpen} closeMenu={closeMobileMenu} />
    </header>
  );
}
