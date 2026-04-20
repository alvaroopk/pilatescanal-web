"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Center() {
  return (
    <section id="centro" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/equipo_instalaciones.jpg"
              alt="Instalaciones de Pilates Canal en Chamberí, Madrid"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <p className="text-[#40916C] text-sm font-semibold tracking-widest uppercase mb-3">
              El espacio
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nuestras instalaciones
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Un espacio diseñado para tu bienestar. Instalaciones modernas equipadas con las
              máquinas del método Pilates original y toda la tecnología necesaria para tu
              recuperación. En el corazón de Chamberí, Madrid.
            </p>

            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} className="text-[#2D6A4F] flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 text-sm">{CONTACT.address}</span>
            </div>

            <a
              href={CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D6A4F] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#40916C] transition-colors"
            >
              <MapPin size={16} />
              ¿Cómo llegar?
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
