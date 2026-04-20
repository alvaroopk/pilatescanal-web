"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/constants";

export default function Team() {
  return (
    <section id="equipo" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#40916C] text-sm font-semibold tracking-widest uppercase mb-3">
            Nuestros profesionales
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Conoce a tu equipo
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            8 fisioterapeutas especializados comprometidos con tu bienestar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="text-center group"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-[#2D6A4F]/20 group-hover:ring-[#2D6A4F]/50 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} en Pilates Canal`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 96px, 128px"
                  unoptimized
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base">{member.name}</h3>
              <p className="text-[#2D6A4F] text-xs md:text-sm font-medium mt-0.5">{member.role}</p>
              <p className="text-gray-400 text-xs mt-1 leading-snug">{member.specialties}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
