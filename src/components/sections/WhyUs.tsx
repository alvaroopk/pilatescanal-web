"use client";

import { motion } from "framer-motion";
import { Users, Award, Heart } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Equipo de 8 especialistas",
    text: "Todos nuestros profesionales son fisioterapeutas colegiados con másteres especializados. Más de 15 años de experiencia colectiva a tu servicio.",
  },
  {
    icon: Award,
    title: "Método original Pilates",
    text: "Trabajamos con las máquinas del método Pilates original: Reformer, Cadillac, Wunda Chair y barriles. Sin atajos, sin compromiso en la calidad.",
  },
  {
    icon: Heart,
    title: "Atención 100% personalizada",
    text: "Cada sesión se adapta a tus necesidades y objetivos concretos. Tu cuerpo es único — tu tratamiento también.",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" className="py-20 px-4" style={{ background: "#F8FAF9" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#40916C] text-sm font-semibold tracking-widest uppercase mb-3">
            Nuestros diferenciales
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Por qué elegirnos?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#2D6A4F]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-[#2D6A4F]" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
