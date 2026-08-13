interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  divider?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  divider,
}: Props) {
  return (
    <div className="text-center mb-12">
      <p className="text-[11px] font-bold tracking-[0.3em] text-mena-deep uppercase mb-2.5">
        {eyebrow}
      </p>
      <h2
        className={`font-display chrome-text text-[clamp(2rem,5vw,3rem)] font-black ${
          divider ? "mb-5" : subtitle ? "mb-2.5" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[15px] text-mena-dim font-semibold mb-9">
          {subtitle}
        </p>
      )}
      {divider && <div className="divider max-w-[200px] mx-auto" />}
    </div>
  )
}
