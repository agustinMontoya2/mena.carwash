import type { AnchorHTMLAttributes } from "react"
import { WHATSAPP_URL } from "@/config/site"

type Variant = "primary" | "outline" | "text"

const variantClasses: Record<Variant, string> = {
  primary: "btn-primary font-display no-underline",
  outline: "btn-outline font-display no-underline",
  text: "no-underline",
}

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

export default function WhatsAppLink({
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      className={`${variantClasses[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </a>
  )
}
