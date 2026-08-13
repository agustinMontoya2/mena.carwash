import { features } from "@/data/features"
import Section from "@/components/layout/Section"

export default function Features() {
  return (
    <Section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {features.map((f) => (
          <div key={f.title} className="card px-5 py-6 text-center">
            <div className="text-[28px] mb-3">{f.icon}</div>
            <h3 className="font-display font-bold text-[11px] text-mena-accent mb-2 uppercase tracking-[0.1em]">
              {f.title}
            </h3>
            <p className="text-[13px] text-mena-dim leading-[1.6] font-body">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
