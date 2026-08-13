import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/config/site"
import Container from "@/components/layout/Container"
import InstagramIcon from "@/components/shared/InstagramIcon"

export default function Footer() {
  return (
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
            <InstagramIcon /> {INSTAGRAM_HANDLE}
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
  )
}
