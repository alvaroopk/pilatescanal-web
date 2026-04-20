"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué nosotros", href: "#por-que" },
  { label: "Equipo", href: "#equipo" },
  { label: "El centro", href: "#centro" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <Image
            src="/logo_pilatescanal.webp"
            alt="Pilates Canal"
            width={140}
            height={40}
            className={`h-8 md:h-10 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                scrolled
                  ? "text-gray-700 hover:text-[#2D6A4F]"
                  : "text-white hover:text-[#74C69D]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contacto")}
            className="bg-[#2D6A4F] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#40916C] transition-colors cursor-pointer"
          >
            Reserva sesión
          </button>
        </nav>

        <button
          className={`md:hidden p-2 cursor-pointer ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-[#2D6A4F] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contacto")}
              className="bg-[#2D6A4F] text-white px-4 py-3 rounded-full font-medium text-center hover:bg-[#40916C] transition-colors cursor-pointer"
            >
              Reserva tu primera sesión
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
