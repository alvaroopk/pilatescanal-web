"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/layout/SocialIcons";
import { CONTACT, HOURS } from "@/lib/constants";

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    reset();
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-[#1B4332]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#74C69D] text-sm font-semibold tracking-widest uppercase mb-3">
            Hablemos
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Reserva tu primera sesión
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Cuéntanos qué necesitas y te llamamos en menos de 24 horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitSuccessful ? (
              <div className="bg-[#2D6A4F] rounded-2xl p-10 text-center text-white flex flex-col items-center gap-4 h-full justify-center">
                <div className="w-16 h-16 bg-[#74C69D] rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="text-green-200">
                  Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-green-100 text-sm font-medium mb-1.5" htmlFor="nombre">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      className={`w-full bg-white/20 border rounded-lg px-4 py-3 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#74C69D] transition ${
                        errors.nombre ? "border-red-400" : "border-white/30"
                      }`}
                      {...register("nombre", { required: "El nombre es obligatorio" })}
                    />
                    {errors.nombre && (
                      <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-green-100 text-sm font-medium mb-1.5" htmlFor="telefono">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="600 000 000"
                      className={`w-full bg-white/20 border rounded-lg px-4 py-3 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#74C69D] transition ${
                        errors.telefono ? "border-red-400" : "border-white/30"
                      }`}
                      {...register("telefono", { required: "El teléfono es obligatorio" })}
                    />
                    {errors.telefono && (
                      <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-green-100 text-sm font-medium mb-1.5" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className={`w-full bg-white/20 border rounded-lg px-4 py-3 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#74C69D] transition ${
                      errors.email ? "border-red-400" : "border-white/30"
                    }`}
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email no válido" },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-green-100 text-sm font-medium mb-1.5" htmlFor="servicio">
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#74C69D] transition"
                    {...register("servicio")}
                  >
                    <option value="" className="text-gray-900">
                      ¿Qué te interesa?
                    </option>
                    <option value="fisioterapia" className="text-gray-900">
                      Fisioterapia y Terapia Manual
                    </option>
                    <option value="pilates" className="text-gray-900">
                      Pilates Máquinas y Suelo
                    </option>
                    <option value="salud-femenina" className="text-gray-900">
                      Salud Femenina / Suelo Pélvico
                    </option>
                    <option value="indiba" className="text-gray-900">
                      Fisioterapia Dermatofuncional INDIBA
                    </option>
                    <option value="no-se" className="text-gray-900">
                      No sé aún, necesito orientación
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-green-100 text-sm font-medium mb-1.5" htmlFor="mensaje">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Cuéntanos brevemente qué necesitas..."
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#74C69D] transition resize-none"
                    {...register("mensaje")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#40916C] hover:bg-[#74C69D] text-white py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Enviando..." : "Enviar consulta"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <a
                href={CONTACT.phone1Href}
                className="flex items-center gap-4 text-white hover:text-[#74C69D] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-green-400 text-xs font-medium">Teléfono</p>
                  <p className="font-semibold">{CONTACT.phone1}</p>
                </div>
              </a>
              <a
                href={CONTACT.phone2Href}
                className="flex items-center gap-4 text-white hover:text-[#74C69D] transition-colors"
              >
                <div className="w-10 h-10 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-green-400 text-xs font-medium">Móvil</p>
                  <p className="font-semibold">{CONTACT.phone2}</p>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 text-white hover:text-[#74C69D] transition-colors"
              >
                <div className="w-10 h-10 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-green-400 text-xs font-medium">Email</p>
                  <p className="font-semibold">{CONTACT.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 text-white">
                <div className="w-10 h-10 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-green-400 text-xs font-medium">Dirección</p>
                  <p className="font-semibold">{CONTACT.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={18} className="text-[#74C69D]" />
                <h3 className="text-white font-semibold">Horarios</h3>
              </div>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.days} className="flex justify-between text-sm">
                    <span className="text-green-300">{h.days}</span>
                    <span className="text-white font-medium">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden h-44">
              <iframe
                title="Mapa Pilates Canal Madrid"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8!2d-3.7028!3d40.4383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229049b7e1a47%3A0xb2a6d985f7a3e3f!2sAv.%20de%20Filipinas%2C%2044%2C%2028003%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex gap-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-300 hover:text-white transition-colors text-sm font-medium"
                aria-label="Instagram @pilatescanal"
              >
                <InstagramIcon size={18} />
                @pilatescanal
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-300 hover:text-white transition-colors text-sm font-medium"
                aria-label="Facebook Pilates Canal"
              >
                <FacebookIcon size={18} />
                Pilates Canal
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
