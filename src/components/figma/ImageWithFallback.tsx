import { useState, type ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export function ImageWithFallback({ src, alt, style, className, ...rest }: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={className}
        style={{ ...style, background: '#0a1428', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ color: '#0a6eff', fontSize: 32 }}>🚗</span>
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
