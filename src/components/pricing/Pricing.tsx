import { useState } from "react"
import { services } from "@/data/services"
import Section from "@/components/layout/Section"
import SectionHeading from "@/components/layout/SectionHeading"
import { ImageWithFallback } from "@/components/shared/ImageWithFallback"
import PricingCard from "./PricingCard"
import JubiladosCard from "./JubiladosCard"

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0)
  const service = services[activeTab]

  return (
    <Section id="precios">
      <SectionHeading eyebrow="Nuestros Servicios" title="PRECIOS" divider />

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

      <div key={service.category}>
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

        <div
          className={
            service.plans.length === 1
              ? "grid grid-cols-1 gap-5 mb-5 max-w-[420px] mx-auto"
              : "grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mb-5"
          }
        >
          {service.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {service.jubilados && <JubiladosCard jubilados={service.jubilados} />}
      </div>
    </Section>
  )
}
