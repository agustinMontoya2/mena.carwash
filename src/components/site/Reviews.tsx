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
            <p className="text-sm text-mena-soft leading-[1.65] font-body flex-1">
              "{review.text}"
            </p>
            {review.author && (
              <div className="border-t border-mena-border/20 pt-3.5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-mena-surface-soft border border-mena-border/35 flex items-center justify-center text-sm flex-shrink-0">
                  <span aria-hidden="true">⭐</span>
                </div>
                <p className="font-display text-[11px] font-bold text-mena-accent tracking-[0.1em]">
                  {review.author}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
