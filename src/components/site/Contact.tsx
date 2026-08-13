import {
  ADDRESS,
  BUSINESS_NAME,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_DISPLAY,
} from "@/config/site"
import Section from "@/components/layout/Section"
import SectionHeading from "@/components/layout/SectionHeading"
import InstagramLink from "@/components/shared/InstagramLink"
import WhatsAppLink from "@/components/shared/WhatsAppLink"

export default function Contact() {
  return (
    <Section id="contacto" containerClassName="max-w-[720px] text-center">
      <SectionHeading
        eyebrow="Contactate con Nosotros"
        title="¡YA TENEMOS WHATSAPP!"
        subtitle="Agendá tu turno de forma rápida y sencilla."
      />

      <div className="card-highlight px-8 py-10 rounded-[20px] mb-5">
        <p className="text-[11px] font-bold tracking-[0.25em] text-mena-accent uppercase mb-3">
          Turnos y Consultas
        </p>
        <WhatsAppLink
          variant="text"
          className="font-display chrome-text text-[clamp(2.2rem,8vw,4rem)] font-black block mb-7"
        >
          {PHONE_DISPLAY}
        </WhatsAppLink>
        <WhatsAppLink className="inline-block px-9 py-3.5 rounded-[10px] text-sm font-bold tracking-[0.08em] uppercase">
          📱 ¡Escribinos y Reservá tu Turno!
        </WhatsAppLink>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-7">
        <InstagramLink className="ig-gradient flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-bold text-[13px] text-white transition-opacity hover:opacity-85" />
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-bold text-[13px] no-underline"
        >
          📍 {ADDRESS}
        </a>
      </div>

      <div className="rounded-2xl overflow-hidden border border-mena-border/30 h-80">
        <iframe
          title={`Ubicación ${BUSINESS_NAME}`}
          src={MAPS_EMBED_URL}
          width="100%"
          height="100%"
          className="map-frame"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  )
}
