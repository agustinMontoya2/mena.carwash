import type { ReactNode } from "react"
import Container from "./Container"

interface Props {
  children: ReactNode
  id?: string
  className?: string
  containerClassName?: string
}

export default function Section({
  children,
  id,
  className,
  containerClassName,
}: Props) {
  return (
    <section id={id} className={`py-[72px] ${className ?? ""}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
