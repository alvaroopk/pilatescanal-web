"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ background: "#F8FAF9" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#40916C] text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonios
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm relative"
            >
              <div className="text-[#74C69D] text-6xl font-serif leading-none mb-4 select-none" aria-hidden="true">
                &ldquo;
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 -mt-4">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-[#40916C] text-[#40916C]" />
                ))}
              </div>
              <p className="font-bold text-gray-900 text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
