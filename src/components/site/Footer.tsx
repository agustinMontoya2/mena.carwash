import { ADDRESS, PHONE_DISPLAY } from "@/config/site"
import Container from "@/components/layout/Container"
import InstagramLink from "@/components/shared/InstagramLink"
import WhatsAppLink from "@/components/shared/WhatsAppLink"

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
          <InstagramLink className="flex items-center gap-1.5 text-[13px] font-semibold text-mena-pink-deep" />
          <WhatsAppLink
            variant="text"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-mena-green"
          >
            📱 {PHONE_DISPLAY}
          </WhatsAppLink>
        </div>
        <p className="text-[11px] text-mena-navy-deep tracking-[0.08em] font-body">
          Más brillo, más cuidado, mejores resultados. · {ADDRESS}
        </p>
      </Container>
    </footer>
  )
}
