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
  message?: string
}

export default function WhatsAppLink({
  variant = "primary",
  className,
  children,
  message,
  ...rest
}: Props) {
  const href = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClasses[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </a>
  )
}
