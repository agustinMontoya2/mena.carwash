import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  maxWidth?: string
  className?: string
}

export default function Container({
  children,
  maxWidth = "max-w-[1152px]",
  className,
}: Props) {
  return (
    <div className={`${maxWidth} mx-auto px-4 ${className ?? ""}`}>
      {children}
    </div>
  )
}
