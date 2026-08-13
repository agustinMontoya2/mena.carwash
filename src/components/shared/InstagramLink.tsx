import type { AnchorHTMLAttributes } from "react"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/config/site"
import InstagramIcon from "./InstagramIcon"

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
}

export default function InstagramLink({
  label = INSTAGRAM_HANDLE,
  className,
  children,
  ...rest
}: Props) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`no-underline ${className ?? ""}`}
      {...rest}
    >
      <InstagramIcon />
      {children ?? label}
    </a>
  )
}
