import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/layout/SocialIcons";
import { CONTACT, HOURS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/logo_pilatescanal.webp"
            alt="Pilates Canal"
            width={140}
            height={40}
            className="h-10 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-green-200 text-sm leading-relaxed">
            Centro especializado en Pilates y Fisioterapia en el corazón de Chamberí, Madrid.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Pilates Canal"
              className="text-green-300 hover:text-white transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Pilates Canal"
              className="text-green-300 hover:text-white transition-colors"
            >
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-green-100 mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-green-200">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#74C69D] flex-shrink-0" />
              <a href={CONTACT.phone1Href} className="hover:text-white transition-colors">
                {CONTACT.phone1}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#74C69D] flex-shrink-0" />
              <a href={CONTACT.phone2Href} className="hover:text-white transition-colors">
                {CONTACT.phone2}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#74C69D] flex-shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#74C69D] flex-shrink-0 mt-0.5" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-green-100 mb-4">Horarios</h3>
          <ul className="space-y-2 text-sm text-green-200">
            {HOURS.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-white font-medium">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-green-400 text-xs">
          © {new Date().getFullYear()} Pilates Canal. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
