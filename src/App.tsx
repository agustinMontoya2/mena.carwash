import { useState } from "react"
import { ImageWithFallback } from "@/components/shared/ImageWithFallback"
import type { Feature, GalleryImage, Review, Service } from "@/types"
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
import carGray from "@/imports/image-1.png"
import carInterior from "@/imports/image-2.png"
import moto from "@/imports/image-3.png"
import pickupSilver from "@/imports/image-4.png"
import pickupBlue from "@/imports/image-5.png"

const services: Service[] = [
  {
    category: "AUTOS",
    icon: "🚗",
    photo: carGray,
    photoAlt: "Auto gris en MENA Car Wash",
    plans: [
      {
        name: "Lavado Clásico",
        price: "$30.000",
        desc: "Lavado interior exterior, siliconado y aplique cera premium",
        features: [
          "Exterior completo",
          "Interior premium",
          "Siliconado",
          "Cera premium",
        ],
        highlight: false,
      },
      {
        name: "MENA Premium",
        price: "$45.000",
        desc: "Tratamiento profesional completo con productos Toxic Shine",
        features: [
          "Descontaminación férrica de llantas y cubierta",
          "Descontaminación de carrocería",
          "Lavado premium interior",
          "Aplique cera premium",
        ],
        highlight: true,
      },
    ],
    jubilados: { clasico: "$25.000", premium: "$35.000" },
  },
  {
    category: "CAMIONETAS",
    icon: "🛻",
    photo: pickupBlue,
    photoAlt: "Camioneta azul en MENA Car Wash",
    plans: [
      {
        name: "Lavado Clásico",
        price: "$40.000",
        desc: "Lavado interior exterior, siliconado y aplique cera premium",
        features: [
          "Exterior completo",
          "Interior premium",
          "Siliconado",
          "Cera premium",
        ],
        highlight: false,
      },
      {
        name: "MENA Premium",
        price: "$55.000",
        desc: "Tratamiento profesional completo con productos Toxic Shine",
        features: [
          "Descontaminación férrica de llantas y cubierta",
          "Descontaminación de carrocería",
          "Lavado premium interior",
          "Aplique cera premium",
        ],
        highlight: true,
      },
    ],
    jubilados: { clasico: "$35.000", premium: "$45.000" },
  },
  {
    category: "MOTOS",
    icon: "🏍️",
    photo: moto,
    photoAlt: "Moto Honda en MENA Car Wash",
    plans: [
      {
        name: "Lavado de Moto",
        price: "$10.000",
        desc: "Limpieza completa de la moto con productos premium",
        features: [
          "Lavado exterior completo",
          "Siliconado",
          "Acabado brillante",
        ],
        highlight: true,
      },
    ],
    jubilados: null,
  },
]

const featureItems: Feature[] = [
  {
    icon: "🛡️",
    title: "Limpieza Exterior e Interior Premium",
    desc: "Cada rincón de tu vehículo tratado con máximo cuidado.",
  },
  {
    icon: "✨",
    title: "Brillo y Protección",
    desc: "Aplicación de cera y protectores que duran semanas.",
  },
  {
    icon: "🧴",
    title: "Productos Premium",
    desc: "Trabajamos con productos Toxic Shine de industria argentina.",
  },
  {
    icon: "🏆",
    title: "Acabados de Alta Calidad",
    desc: "Resultados de showroom en cada lavado, sin excepción.",
  },
]

const heroStrip: GalleryImage[] = [
  { src: pickupSilver, alt: "Camioneta plateada" },
  { src: carGray, alt: "Auto gris" },
  { src: pickupBlue, alt: "Camioneta azul" },
  { src: moto, alt: "Moto Honda" },
]

const gallery: GalleryImage[] = [
  { src: pickupSilver, alt: "Camioneta plateada recién lavada" },
  { src: pickupBlue, alt: "VW Amarok azul brillando" },
  { src: carGray, alt: "Auto gris con brillo perfecto" },
  { src: carInterior, alt: "Interior de Audi A3 impecable" },
  { src: moto, alt: "Moto Honda blanca reluciente" },
  { src: pickupSilver, alt: "Pickup plateada, vista frontal" },
]

const reviews: Review[] = [
  {
    text: "¡Recomiendo mucho a estos chicos! Trabajo de excelencia. Todavía hay gente que gusta de trabajar 🤗",
  },
  {
    text: "¡Gracias chicos! Quedó hermoso. Los super recomiendo!!!",
    author: "Pao",
  },
  {
    text: "SON UNOS CAPOS, DEJARON IMPECABLE, INMACULADA LA CAMIONETA.",
  },
]

const igIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div
      style={{ background: "#0a0a0a", color: "#e0e8f0", minHeight: "100vh" }}
    >
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(30,100,200,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 16px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              className="font-display"
              style={{ fontWeight: 900, fontSize: 20, letterSpacing: "0.12em" }}
            >
              <span className="chrome-text">MENA</span>
            </span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                color: "#5080c0",
                textTransform: "uppercase",
              }}
            >
              Car Wash
            </span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 32 }}
            className="hidden md:flex"
          >
            {["Servicios", "Precios", "Galería", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#8aabcc",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8aabcc")}
              >
                {item}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "#d070a0",
                textDecoration: "none",
              }}
            >
              {igIcon} {INSTAGRAM_HANDLE}
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            className="btn-primary"
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              fontSize: 13,
              letterSpacing: "0.08em",
              textDecoration: "none",
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            RESERVAR TURNO
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 16px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 28,
              padding: "6px 18px",
              border: "1px solid rgba(30,80,180,0.4)",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#6090c0",
              textTransform: "uppercase",
            }}
          >
            Industria Argentina · Productos Toxic Shine
          </div>

          {/* Main title */}
          <h1
            className="font-display chrome-hero"
            style={{
              fontSize: "clamp(4rem, 14vw, 9rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              marginBottom: 8,
            }}
          >
            MENA
          </h1>
          <div
            className="font-display"
            style={{
              fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
              letterSpacing: "0.55em",
              color: "#3a6aaa",
              marginBottom: 28,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            — CAR WASH —
          </div>

          {/* Headline */}
          <p
            className="font-display"
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              color: "#d8e8f8",
              lineHeight: 1.25,
              marginBottom: 8,
            }}
          >
            ¡TODOS TUS LAVADOS TIENEN DESCUENTO!
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#5a7a9a",
              fontWeight: 600,
              marginBottom: 40,
              letterSpacing: "0.05em",
            }}
          >
            Limpieza que se nota, calidad que dura.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              marginBottom: 56,
            }}
          >
            <a
              href={WHATSAPP_URL}
              className="btn-primary font-display"
              style={{
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                letterSpacing: "0.08em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              📱 Reservar por WhatsApp
            </a>
            <a
              href="#precios"
              className="btn-outline font-display"
              style={{
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                letterSpacing: "0.08em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Ver Precios
            </a>
          </div>

          {/* Price teasers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              maxWidth: 420,
              margin: "0 auto",
              paddingBottom: 56,
            }}
          >
            {[
              { label: "Autos desde", value: "$27.000" },
              { label: "Camionetas desde", value: "$38.000" },
              { label: "Motos", value: "$10.000" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div
                  className="font-display"
                  style={{
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "#4a8ad8",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#3a5a7a",
                    marginTop: 4,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle photo strip */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 260,
            overflow: "hidden",
            marginTop: 8,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #0a0a0a 0%, transparent 12%, transparent 88%, #0a0a0a 100%)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: "linear-gradient(to top, #0a0a0a, transparent)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              display: "flex",
              gap: 12,
              padding: "0 16px",
              height: "100%",
            }}
          >
            {heroStrip.map((img, i) => (
              <ImageWithFallback
                key={i}
                src={img.src}
                alt={img.alt}
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "cover",
                  borderRadius: 12,
                  flexShrink: 0,
                  maxWidth: i === 3 ? 240 : 380,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{ padding: "72px 16px", maxWidth: 1152, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {featureItems.map((f) => (
            <div
              key={f.title}
              className="card"
              style={{ padding: "24px 20px", textAlign: "center" }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <h3
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 11,
                  color: "#4a8ad8",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#4a6a8a",
                  lineHeight: 1.6,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#3a6aaa",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Nuestros Servicios
            </p>
            <h2
              className="font-display chrome-text"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                marginBottom: 20,
              }}
            >
              PRECIOS
            </h2>
            <div
              className="divider"
              style={{ maxWidth: 200, margin: "0 auto" }}
            />
          </div>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: 40,
              flexWrap: "wrap",
            }}
          >
            {services.map((s, i) => (
              <button
                key={s.category}
                onClick={() => setActiveTab(i)}
                className={
                  i === activeTab
                    ? "btn-primary font-display"
                    : "btn-outline font-display"
                }
                style={{
                  padding: "10px 24px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  background: i === activeTab ? "#1a5fd4" : "transparent",
                }}
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
                <div
                  style={{
                    position: "relative",
                    borderRadius: 20,
                    overflow: "hidden",
                    marginBottom: 32,
                    height: 260,
                  }}
                >
                  <ImageWithFallback
                    src={service.photo}
                    alt={service.photoAlt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to right, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.3) 55%, rgba(10,10,10,0.55) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingLeft: 36,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.3em",
                        color: "#4a8ad8",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      Servicio para
                    </p>
                    <h3
                      className="font-display chrome-text"
                      style={{
                        fontSize: "clamp(2rem, 5vw, 3.2rem)",
                        fontWeight: 900,
                        marginBottom: 6,
                      }}
                    >
                      {service.category}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#4a7aaa",
                        fontWeight: 600,
                      }}
                    >
                      Limpieza que se nota, calidad que dura.
                    </p>
                  </div>
                </div>

                {/* Pricing cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      service.plans.length === 1
                        ? "1fr"
                        : "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 20,
                    marginBottom: 20,
                    maxWidth: service.plans.length === 1 ? 420 : undefined,
                    margin:
                      service.plans.length === 1 ? "0 auto 20px" : undefined,
                  }}
                >
                  {service.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={plan.highlight ? "card-highlight" : "card"}
                      style={{ padding: "32px 28px", position: "relative" }}
                    >
                      {plan.highlight && (
                        <div
                          style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            background: "#1a5fd4",
                            color: "#fff",
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            padding: "4px 12px",
                            borderRadius: 999,
                            textTransform: "uppercase",
                          }}
                        >
                          Más Popular
                        </div>
                      )}
                      <h4
                        className="font-display"
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#4a8ad8",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        {plan.name}
                      </h4>
                      <div
                        className="font-display chrome-text"
                        style={{
                          fontSize: "clamp(2rem, 4vw, 2.6rem)",
                          fontWeight: 900,
                          marginBottom: 8,
                        }}
                      >
                        {plan.price}
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#4a6a8a",
                          marginBottom: 20,
                          fontFamily: "Inter, sans-serif",
                          lineHeight: 1.5,
                        }}
                      >
                        {plan.desc}
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 24px",
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {plan.features.map((f) => (
                          <li
                            key={f}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 8,
                              fontSize: 13,
                              color: "#8aaac8",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            <span
                              style={{
                                color: "#1a5fd4",
                                marginTop: 2,
                                flexShrink: 0,
                              }}
                            >
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
                            ? "btn-primary font-display"
                            : "btn-outline font-display"
                        }
                        style={{
                          display: "block",
                          textAlign: "center",
                          padding: "11px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          border: plan.highlight
                            ? "none"
                            : "1px solid rgba(30,100,200,0.5)",
                        }}
                      >
                        Reservar Turno
                      </a>
                    </div>
                  ))}
                </div>

                {/* Jubilados */}
                {service.jubilados && (
                  <div className="card" style={{ padding: "24px 28px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 16,
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: 22 }}>👴👵</span>
                      <span
                        className="font-display"
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#4a8ad8",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                        }}
                      >
                        Descuento a Jubilados
                      </span>
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: 12,
                          color: "#3a5a7a",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Presentando carnet de jubilado
                      </span>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 12,
                      }}
                    >
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
                          style={{
                            textAlign: "center",
                            padding: "12px",
                            background: "#0f1420",
                            borderRadius: 10,
                          }}
                        >
                          <p
                            style={{
                              fontSize: 10,
                              color: "#3a5a7a",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              marginBottom: 4,
                            }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="font-display"
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: 800,
                              color: "#4a8ad8",
                            }}
                          >
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
        </div>
      </section>

      {/* GALERÍA */}
      <section
        id="galería"
        style={{ padding: "72px 16px", maxWidth: 1152, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#3a6aaa",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Nuestros Trabajos
          </p>
          <h2
            className="font-display chrome-text"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900 }}
          >
            GALERÍA
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {gallery.map((img, i) => (
            <div
              key={i}
              style={{
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "4/3",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget.querySelector(
                  "img",
                ) as HTMLImageElement | null
                if (el) el.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget.querySelector(
                  "img",
                ) as HTMLImageElement | null
                if (el) el.style.transform = "scale(1)"
              }}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.45s ease",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section
        style={{ padding: "72px 16px", maxWidth: 1152, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#3a6aaa",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Lo que dicen nuestros clientes
          </p>
          <h2
            className="font-display chrome-text"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: 20,
            }}
          >
            OPINIONES
          </h2>
          <div
            className="divider"
            style={{ maxWidth: 200, margin: "0 auto" }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} style={{ color: "#c08020", fontSize: 15 }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#aac0d8",
                  lineHeight: 1.65,
                  fontFamily: "Inter, sans-serif",
                  flex: 1,
                }}
              >
                "{review.text}"
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(30,80,180,0.2)",
                  paddingTop: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#141c2e",
                    border: "1px solid rgba(30,80,180,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  ⭐
                </div>
                <div>
                  <p
                    className="font-display"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#4a8ad8",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {review.author ?? "Cliente verificado"}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#2a4a6a",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Reseña en Google Maps
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#3a6aaa",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Contactate con Nosotros
          </p>
          <h2
            className="font-display chrome-text"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: 10,
            }}
          >
            ¡YA TENEMOS WHATSAPP!
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#4a6a8a",
              fontWeight: 600,
              marginBottom: 36,
            }}
          >
            Agendá tu turno de forma rápida y sencilla.
          </p>

          {/* Contact card */}
          <div
            className="card-highlight"
            style={{ padding: "40px 32px", borderRadius: 20, marginBottom: 20 }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#4a8ad8",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Turnos y Consultas
            </p>
            <a
              href={WHATSAPP_URL}
              className="font-display chrome-text"
              style={{
                fontSize: "clamp(2.2rem, 8vw, 4rem)",
                fontWeight: 900,
                display: "block",
                marginBottom: 28,
                textDecoration: "none",
              }}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              className="btn-primary font-display"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              📱 ¡Escribinos y Reservá tu Turno!
            </a>
          </div>

          {/* Social + Maps buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 13,
                background:
                  "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                color: "#fff",
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {igIcon} {INSTAGRAM_HANDLE}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                border: "1px solid rgba(30,100,200,0.4)",
                color: "#6a9ad4",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(30,100,200,0.8)"
                e.currentTarget.style.color = "#fff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(30,100,200,0.4)"
                e.currentTarget.style.color = "#6a9ad4"
              }}
            >
              📍 {ADDRESS}
            </a>
          </div>

          {/* Map embed */}
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(30,80,180,0.3)",
              height: 320,
            }}
          >
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
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "36px 16px",
          borderTop: "1px solid rgba(30,80,180,0.15)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 14,
            }}
          >
            <span
              className="font-display chrome-text"
              style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.15em" }}
            >
              MENA
            </span>
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.4em",
                color: "#2a4a6a",
                textTransform: "uppercase",
              }}
            >
              Car Wash
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24,
              marginBottom: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "#b05090",
                textDecoration: "none",
              }}
            >
              {igIcon} {INSTAGRAM_HANDLE}
            </a>
            <a
              href={WHATSAPP_URL}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "#3a8a4a",
                textDecoration: "none",
              }}
            >
              📱 {PHONE_DISPLAY}
            </a>
          </div>
          <p
            style={{
              fontSize: 11,
              color: "#1a3050",
              letterSpacing: "0.08em",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Más brillo, más cuidado, mejores resultados. · {ADDRESS}
          </p>
        </div>
      </footer>
    </div>
  )
}
