import { reviews } from "@/data/reviews"
import Section from "@/components/layout/Section"
import SectionHeading from "@/components/layout/SectionHeading"

export default function Reviews() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Lo que dicen nuestros clientes"
        title="OPINIONES"
        divider
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {reviews.map((review, i) => (
          <div key={i} className="card px-6 py-7 flex flex-col gap-[18px]">
            <div
              className="flex gap-1"
              role="img"
              aria-label="Calificación: 5 de 5 estrellas"
            >
              {Array.from({ length: 5 }).map((_, s) => (
                <span
                  key={s}
                  className="text-mena-star text-[15px]"
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-mena-soft leading-[1.65] font-body flex-1">
              "{review.text}"
            </p>
            <div className="border-t border-mena-border/20 pt-3.5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-mena-surface-soft border border-mena-border/35 flex items-center justify-center text-sm flex-shrink-0">
                <span aria-hidden="true">⭐</span>
              </div>
              <div>
                <p className="font-display text-[11px] font-bold text-mena-accent tracking-[0.1em]">
                  {review.author ?? "Cliente verificado"}
                </p>
                <p className="text-[11px] text-mena-navy font-body">
                  Reseña en Google Maps
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
