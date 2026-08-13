import { useEffect } from "react"
import { HOME } from "@/config/site"
import Container from "@/components/layout/Container"
import WhatsAppLink from "@/components/shared/WhatsAppLink"

export default function NotFound() {
  useEffect(() => {
    document.title = "MENA Car Wash — Página no encontrada"
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-mena-bg text-mena-text overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(26,95,212,0.18),transparent_45%),linear-gradient(180deg,rgba(10,10,10,0.9),rgba(10,10,10,1))]" />
      <Container maxWidth="max-w-[760px]" className="relative text-center">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-mena-azure mb-4">
          Error 404
        </p>
        <h1 className="font-display chrome-hero text-[clamp(3.5rem,12vw,7rem)] font-black leading-[0.92] tracking-[-0.02em] mb-4">
          Página no encontrada
        </h1>
        <p className="text-[1.02rem] md:text-[1.1rem] text-mena-soft font-semibold leading-[1.7] max-w-[620px] mx-auto mb-10">
          La ruta que buscás no existe, pero podés volver a la landing y seguir
          reservando tu turno.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={HOME}
            className="btn-primary font-display px-8 py-3.5 rounded-[10px] text-[15px] tracking-[0.08em] uppercase no-underline"
          >
            Volver al inicio
          </a>
          <WhatsAppLink
            className="btn-outline font-display px-8 py-3.5 rounded-[10px] text-[15px] tracking-[0.08em] uppercase"
            message="¡Hola! Llegué a una página no encontrada y quiero reservar un turno."
          >
            Reservar por WhatsApp
          </WhatsAppLink>
        </div>
      </Container>
    </main>
  )
}
