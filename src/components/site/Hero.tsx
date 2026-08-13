import { heroStrip } from "@/data/gallery"
import Container from "@/components/layout/Container"
import { ImageWithFallback } from "@/components/shared/ImageWithFallback"
import WhatsAppLink from "@/components/shared/WhatsAppLink"

const priceTeasers = [
  { label: "Autos desde", value: "$27.000" },
  { label: "Camionetas desde", value: "$38.000" },
  { label: "Motos", value: "$10.000" },
]

export default function Hero() {
  return (
    <section className="pt-24 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <Container maxWidth="max-w-[800px]">
        <div className="inline-flex items-center gap-2 mb-7 px-[18px] py-1.5 border border-mena-border/40 rounded-full text-[11px] font-semibold tracking-[0.2em] text-mena-azure uppercase">
          Industria Argentina · Productos Toxic Shine
        </div>

        <h1 className="font-display chrome-hero text-[clamp(4rem,14vw,9rem)] font-black leading-[0.9] tracking-[-0.01em] mb-2">
          MENA
        </h1>
        <div className="font-display text-[clamp(0.75rem,2vw,1.1rem)] tracking-[0.55em] text-mena-deep mb-7 uppercase font-bold">
          — CAR WASH —
        </div>

        <p className="font-display text-[clamp(1.2rem,3.5vw,2.2rem)] font-bold text-mena-bright leading-[1.25] mb-2">
          ¡TODOS TUS LAVADOS TIENEN DESCUENTO!
        </p>
        <p className="text-[1.05rem] text-mena-sub font-semibold mb-10 tracking-[0.05em]">
          Limpieza que se nota, calidad que dura.
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center mb-14">
          <WhatsAppLink className="px-8 py-3.5 rounded-[10px] text-[15px] tracking-[0.08em] uppercase">
            📱 Reservar por WhatsApp
          </WhatsAppLink>
          <a
            href="#precios"
            className="btn-outline font-display px-8 py-3.5 rounded-[10px] text-[15px] tracking-[0.08em] no-underline uppercase"
          >
            Ver Precios
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-[420px] mx-auto pb-14">
          {priceTeasers.map((item) => (
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
  )
}
