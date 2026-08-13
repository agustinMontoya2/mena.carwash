import { useState } from "react"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import SectionHeading from "@/components/layout/SectionHeading"
import { ImageWithFallback } from "@/components/shared/ImageWithFallback"
import {
  ADDRESS,
  BUSINESS_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/config/site"
import { features } from "@/data/features"
import { gallery, heroStrip } from "@/data/gallery"
import { reviews } from "@/data/reviews"
import { services } from "@/data/services"

const igIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-mena-bg text-mena-text min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-mena-bg/95 backdrop-blur-md border-b border-mena-border/20">
        <Container className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-xl tracking-[0.12em]">
              <span className="chrome-text">MENA</span>
            </span>
            <span className="text-[11px] tracking-[0.3em] text-mena-slate uppercase">
              Car Wash
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Servicios", "Precios", "Galería", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-semibold tracking-[0.1em] text-mena-muted no-underline transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-mena-pink no-underline"
            >
              {igIcon} {INSTAGRAM_HANDLE}
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            className="btn-primary font-display px-[18px] py-2 rounded-lg text-[13px] tracking-[0.08em] no-underline"
          >
            RESERVAR TURNO
          </a>
        </Container>
      </nav>

      {/* HERO */}
      <section className="pt-24 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <Container maxWidth="max-w-[800px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7 px-[18px] py-1.5 border border-mena-border/40 rounded-full text-[11px] font-semibold tracking-[0.2em] text-mena-azure uppercase">
            Industria Argentina · Productos Toxic Shine
          </div>

          {/* Main title */}
          <h1 className="font-display chrome-hero text-[clamp(4rem,14vw,9rem)] font-black leading-[0.9] tracking-[-0.01em] mb-2">
            MENA
          </h1>
          <div className="font-display text-[clamp(0.75rem,2vw,1.1rem)] tracking-[0.55em] text-mena-deep mb-7 uppercase font-bold">
            — CAR WASH —
          </div>

          {/* Headline */}
          <p className="font-display text-[clamp(1.2rem,3.5vw,2.2rem)] font-bold text-mena-bright leading-[1.25] mb-2">
            ¡TODOS TUS LAVADOS TIENEN DESCUENTO!
          </p>
          <p className="text-[1.05rem] text-mena-sub font-semibold mb-10 tracking-[0.05em]">
            Limpieza que se nota, calidad que dura.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 justify-center mb-14">
            <a
              href={WHATSAPP_URL}
              className="btn-primary font-display px-8 py-3.5 rounded-[10px] text-[15px] tracking-[0.08em] no-underline uppercase"
            >
              📱 Reservar por WhatsApp
            </a>
            <a
              href="#precios"
              className="btn-outline font-display px-8 py-3.5 rounded-[10px] text-[15px] tracking-[0.08em] no-underline uppercase"
            >
              Ver Precios
            </a>
          </div>

          {/* Price teasers */}
          <div className="grid grid-cols-3 gap-4 max-w-[420px] mx-auto pb-14">
            {[
              { label: "Autos desde", value: "$27.000" },
              { label: "Camionetas desde", value: "$38.000" },
              { label: "Motos", value: "$10.000" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display font-extrabold text-[1.15rem] text-mena-accent">
                  {item.value}
                </div>
                <div className="text-[10px] text-mena-faint mt-1 tracking-[0.1em] uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Vehicle photo strip */}
        <div className="relative w-full h-[260px] overflow-hidden mt-2">
          <div className="absolute inset-0 hero-strip-fade z-[2]" />
          <div className="absolute bottom-0 left-0 right-0 h-20 hero-strip-bottom z-[2]" />
          <div className="flex gap-3 px-4 h-full">
            {heroStrip.map((img, i) => (
              <ImageWithFallback
                key={i}
                src={img.src}
                alt={img.alt}
                className="h-full w-auto object-cover rounded-xl flex-shrink-0"
                style={{ maxWidth: i === 3 ? 240 : 380 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <Section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {features.map((f) => (
            <div key={f.title} className="card px-5 py-6 text-center">
              <div className="text-[28px] mb-3">{f.icon}</div>
              <h3 className="font-display font-bold text-[11px] text-mena-accent mb-2 uppercase tracking-[0.1em]">
                {f.title}
              </h3>
              <p className="text-[13px] text-mena-dim leading-[1.6] font-body">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRECIOS */}
      <Section id="precios">
        <SectionHeading eyebrow="Nuestros Servicios" title="PRECIOS" divider />

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {services.map((s, i) => (
            <button
              key={s.category}
              onClick={() => setActiveTab(i)}
              className={
                i === activeTab
                  ? "btn-primary font-display px-6 py-2.5 rounded-[10px] text-[13px] font-bold tracking-[0.1em] uppercase cursor-pointer"
                  : "btn-outline font-display bg-transparent px-6 py-2.5 rounded-[10px] text-[13px] font-bold tracking-[0.1em] uppercase cursor-pointer"
              }
            >
              {s.icon} {s.category}
            </button>
          ))}
        </div>

        {/* Active service panel */}
        {services.map((service, si) =>
          si !== activeTab ? null : (
            <div key={service.category}>
              {/* Photo banner */}
              <div className="relative rounded-[20px] overflow-hidden mb-8 h-[260px]">
                <ImageWithFallback
                  src={service.photo}
                  alt={service.photoAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 banner-overlay" />
                <div className="absolute inset-0 flex flex-col justify-center pl-9">
                  <p className="text-[11px] font-bold tracking-[0.3em] text-mena-accent uppercase mb-1.5">
                    Servicio para
                  </p>
                  <h3 className="font-display chrome-text text-[clamp(2rem,5vw,3.2rem)] font-black mb-1.5">
                    {service.category}
                  </h3>
                  <p className="text-[13px] text-mena-sub-deep font-semibold">
                    Limpieza que se nota, calidad que dura.
                  </p>
                </div>
              </div>

              {/* Pricing cards */}
              <div
                className={
                  service.plans.length === 1
                    ? "grid grid-cols-1 gap-5 mb-5 max-w-[420px] mx-auto"
                    : "grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mb-5"
                }
              >
                {service.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={
                      plan.highlight
                        ? "card-highlight px-7 py-8 relative"
                        : "card px-7 py-8 relative"
                    }
                  >
                    {plan.highlight && (
                      <div className="absolute top-4 right-4 bg-mena-primary text-white text-[10px] font-bold tracking-[0.12em] px-3 py-1 rounded-full uppercase">
                        Más Popular
                      </div>
                    )}
                    <h4 className="font-display text-[11px] font-bold text-mena-accent tracking-[0.2em] uppercase mb-2">
                      {plan.name}
                    </h4>
                    <div className="font-display chrome-text text-[clamp(2rem,4vw,2.6rem)] font-black mb-2">
                      {plan.price}
                    </div>
                    <p className="text-[13px] text-mena-dim mb-5 font-body leading-normal">
                      {plan.desc}
                    </p>
                    <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-[13px] text-mena-muted font-body"
                        >
                          <span className="text-mena-primary mt-0.5 flex-shrink-0">
                            ✓
                          </span>{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL}
                      className={
                        plan.highlight
                          ? "btn-primary font-display block text-center py-[11px] rounded-lg text-xs font-bold tracking-[0.1em] uppercase no-underline"
                          : "btn-outline font-display block text-center py-[11px] rounded-lg text-xs font-bold tracking-[0.1em] uppercase no-underline"
                      }
                    >
                      Reservar Turno
                    </a>
                  </div>
                ))}
              </div>

              {/* Jubilados */}
              {service.jubilados && (
                <div className="card px-7 py-6">
                  <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                    <span className="text-[22px]">👴👵</span>
                    <span className="font-display text-xs font-bold text-mena-accent tracking-[0.15em] uppercase">
                      Descuento a Jubilados
                    </span>
                    <span className="ml-auto text-xs text-mena-faint font-body">
                      Presentando carnet de jubilado
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        label: "Lavado Clásico",
                        value: service.jubilados.clasico,
                      },
                      {
                        label: "MENA Premium",
                        value: service.jubilados.premium,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="text-center p-3 bg-mena-surface-raised rounded-[10px]"
                      >
                        <p className="text-[10px] text-mena-faint uppercase tracking-[0.1em] mb-1">
                          {item.label}
                        </p>
                        <p className="font-display text-2xl font-extrabold text-mena-accent">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ),
        )}
      </Section>

      {/* GALERÍA */}
      <Section id="galería">
        <SectionHeading eyebrow="Nuestros Trabajos" title="GALERÍA" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="group rounded-[14px] overflow-hidden aspect-[4/3] relative"
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section>
        <SectionHeading
          eyebrow="Lo que dicen nuestros clientes"
          title="OPINIONES"
          divider
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {reviews.map((review, i) => (
            <div key={i} className="card px-6 py-7 flex flex-col gap-[18px]">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-mena-star text-[15px]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-mena-soft leading-[1.65] font-body flex-1">
                "{review.text}"
              </p>
              <div className="border-t border-mena-border/20 pt-3.5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-mena-surface-soft border border-mena-border/35 flex items-center justify-center text-sm flex-shrink-0">
                  ⭐
                </div>
                <div>
                  <p className="font-display text-[11px] font-bold text-mena-accent tracking-[0.1em]">
                    {review.author ?? "Cliente verificado"}
                  </p>
                  <p className="text-[11px] text-mena-navy font-body">
                    Reseña en Google Maps
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" containerClassName="max-w-[720px] text-center">
        <SectionHeading
          eyebrow="Contactate con Nosotros"
          title="¡YA TENEMOS WHATSAPP!"
          subtitle="Agendá tu turno de forma rápida y sencilla."
        />

        {/* Contact card */}
        <div className="card-highlight px-8 py-10 rounded-[20px] mb-5">
          <p className="text-[11px] font-bold tracking-[0.25em] text-mena-accent uppercase mb-3">
            Turnos y Consultas
          </p>
          <a
            href={WHATSAPP_URL}
            className="font-display chrome-text text-[clamp(2.2rem,8vw,4rem)] font-black block mb-7 no-underline"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            className="btn-primary font-display inline-block px-9 py-3.5 rounded-[10px] text-sm font-bold tracking-[0.08em] uppercase no-underline"
          >
            📱 ¡Escribinos y Reservá tu Turno!
          </a>
        </div>

        {/* Social + Maps buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-7">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-gradient flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-bold text-[13px] text-white no-underline transition-opacity hover:opacity-85"
          >
            {igIcon} {INSTAGRAM_HANDLE}
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-bold text-[13px] no-underline"
          >
            📍 {ADDRESS}
          </a>
        </div>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden border border-mena-border/30 h-80">
          <iframe
            title={`Ubicación ${BUSINESS_NAME}`}
            src={MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "invert(88%) hue-rotate(180deg) saturate(0.7) brightness(0.8)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-9 px-4 border-t border-mena-border/15 text-center">
        <Container>
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <span className="font-display chrome-text text-[22px] font-black tracking-[0.15em]">
              MENA
            </span>
            <span className="text-[10px] tracking-[0.4em] text-mena-navy uppercase">
              Car Wash
            </span>
          </div>
          <div className="flex justify-center gap-6 mb-3.5 flex-wrap">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-mena-pink-deep no-underline"
            >
              {igIcon} {INSTAGRAM_HANDLE}
            </a>
            <a
              href={WHATSAPP_URL}
              className="flex items-center gap-1.5 text-[13px] font-semibold text-mena-green no-underline"
            >
              📱 {PHONE_DISPLAY}
            </a>
          </div>
          <p className="text-[11px] text-mena-navy-deep tracking-[0.08em] font-body">
            Más brillo, más cuidado, mejores resultados. · {ADDRESS}
          </p>
        </Container>
      </footer>
    </div>
  )
}
