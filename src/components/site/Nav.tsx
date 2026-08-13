import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/config/site"
import Container from "@/components/layout/Container"
import InstagramIcon from "@/components/shared/InstagramIcon"

const NAV_LINKS = ["Servicios", "Precios", "Galería", "Contacto"]

export default function Nav() {
  return (
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
          {NAV_LINKS.map((item) => (
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
            <InstagramIcon /> {INSTAGRAM_HANDLE}
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
  )
}
