import { useState, type ImgHTMLAttributes } from "react"

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export function ImageWithFallback({
  src,
  alt,
  style,
  className,
  ...rest
}: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className ?? ""} bg-mena-fallback flex items-center justify-center`}
        style={style}
      >
        <span className="text-mena-fallback-icon text-[32px]">🚗</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      {...rest}
    />
  )
}
