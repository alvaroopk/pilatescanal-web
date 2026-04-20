"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const el = document.querySelector("#servicios");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero_carol.jpg"
          alt="Sesión de Pilates en Pilates Canal Madrid"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B4332]/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#74C69D] text-sm md:text-base font-medium tracking-widest uppercase mb-4"
        >
          Pilates Canal · Chamberí, Madrid
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Tu salud en las<br />mejores manos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-green-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Centro de Pilates y Fisioterapia en Chamberí, Madrid.
          Equipo de 8 fisioterapeutas especializados para cuidarte de verdad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToContact}
            className="bg-[#2D6A4F] hover:bg-[#40916C] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Reserva tu primera sesión
          </button>
          <button
            onClick={scrollToServices}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-[#1B4332] transition-all duration-200 cursor-pointer"
          >
            Conoce nuestros servicios
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
