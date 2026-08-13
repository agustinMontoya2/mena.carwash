import { navLinks } from "@/data/nav"
import { WHATSAPP_GENERIC_MESSAGE } from "@/config/site"
import Container from "@/components/layout/Container"
import InstagramLink from "@/components/shared/InstagramLink"
import WhatsAppLink from "@/components/shared/WhatsAppLink"

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-mena-bg/95 backdrop-blur-md border-b border-mena-border/20">
      <Container className="h-14 flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <span className="font-display font-black text-lg sm:text-xl tracking-[0.12em] leading-none shrink-0">
            <span className="chrome-text">MENA</span>
          </span>
          <span className="min-w-0 truncate text-[9px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.3em] text-mena-slate uppercase leading-none">
            Car Wash
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-semibold tracking-[0.1em] text-mena-muted no-underline transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
          <InstagramLink className="flex items-center gap-1.5 text-[13px] font-semibold text-mena-pink" />
        </div>
        <WhatsAppLink
          className="shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-[11px] sm:px-[18px] sm:text-[13px] tracking-[0.06em] sm:tracking-[0.08em] leading-none"
          message={WHATSAPP_GENERIC_MESSAGE}
        >
          RESERVAR TURNO
        </WhatsAppLink>
      </Container>
    </nav>
  )
}
