"use client";

import Image from "next/image";

import React from "react";
import mapaAmb from "../images/mapa-accacio-barrozo-amb.png";

export default function Footer() {
  return (
    <footer className="bg-[rgba(0,0,0,0.9)] text-gray-200 pt-10 pb-6">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Phone/WhatsApp/About */}
        <div>
          <h3 className="text-lg font-semibold text-[#D1A25A] mb-2">
            TELEFONE:
          </h3>
          <p className="mb-4">21 3506-4713</p>

          <h3 className="text-lg font-semibold text-[#D1A25A] mb-2">
            WHATSAPP:
          </h3>
          <a
            href="https://api.whatsapp.com/send/?phone=5521999684428&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            (21) 99968-4428
          </a>

          <h3 className="text-lg font-semibold text-[#D1A25A] mb-2">SOBRE</h3>
          <p className="text-sm text-justify mb-4 leading-relaxed">
            O escritório Accacio Monteiro Barrozo Assessoria Jurídica está
            consolidado há quase 30 anos no mundo jurídico, superando a marca de
            dois mil clientes, atuando de forma preventiva, consultiva e
            contenciosa em procedimentos judiciais e extrajudiciais....
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5521999684428&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="hover:underline mb-4"
          >
            <button className="bg-[#D1A25A] hover:bg-[#e0b874] text-black font-semibold px-4 py-2 rounded mb-4 transition-colors">
              CONTACTAR
            </button>
          </a>
        </div>

        {/* Middle Column: Atendimento */}
        <div>
          <h3 className="text-lg font-semibold text-[#D1A25A] mb-4">
            ATENDIMENTO
          </h3>

          <p className="text-sm mb-2">
            <span className="font-semibold">JURÍDICO:</span>{" "}
            <a
              href="mailto:juridico@accaciobarrozo.com.br"
              className="hover:text-white hover:underline"
            >
              juridico@accaciobarrozo.com.br
            </a>
          </p>

          <p className="text-sm mb-2">
            <span className="font-semibold">FINANCEIRO:</span>{" "}
            <a
              href="mailto:financeiro@accaciobarrozo.com.br"
              className="hover:text-white hover:underline"
            >
              financeiro@accaciobarrozo.com.br
            </a>
          </p>

          <p className="text-sm mb-6">
            <span className="font-semibold">ACCACIO BARROZO:</span>{" "}
            <a
              href="mailto:accacio@accaciobarrozo.com.br"
              className="hover:text-white hover:underline"
            >
              accacio@accaciobarrozo.com.br
            </a>
          </p>
        </div>

        {/* Right Column: Importante & Newsletter */}
        <div>
          <p className="text-sm mb-6 leading-relaxed">
            HORÁRIO DE FUNCIONAMENTO:
            <strong> Atendimento por Home Office</strong>
          </p>
          <a
            href="https://www.google.com/maps/place/Accacio+Monteiro+Barrozo+Assessoria+Jur%C3%ADdica/@-22.9076705,-43.1771169,17z/data=!4m6!3m5!1s0x997f6067918c27:0xe4b2046ab1e988ac!8m2!3d-22.9074866!4d-43.1764901!16s%2Fg%2F1td3sqlx?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <p className="text-sm underline cursor-pointer hover:text-white">
              VEJA A NOSSA LOCALIZAÇÃO
            </p>
          </a>
          <Image
            className="pt-10 w-[100%]"
            src={mapaAmb}
            alt="Mapa da localização do escritório"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500 mb-4 sm:mb-0">
          Desde 1996 ACCACIO MONTEIRO BARROZO ADVOGADOS | ASSESSORIA JURÍDICA
        </p>

        {/* Social Icons Row*/}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
