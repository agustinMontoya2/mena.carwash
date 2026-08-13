import type { Plan } from "@/types"
import WhatsAppLink from "@/components/shared/WhatsAppLink"

interface Props {
  plan: Plan
  message: string
}

export default function PricingCard({ plan, message }: Props) {
  return (
    <div
      className={
        plan.highlight
          ? "card-highlight px-7 py-8 relative"
          : "card px-7 py-8 relative"
      }
    >
      {plan.highlight && (
        <div className="absolute top-4 right-4 bg-mena-primary text-white text-[10px] font-bold tracking-[0.12em] px-3 py-1 rounded-full uppercase">
          Más Popular
        </div>
      )}
      <h4 className="font-display text-[11px] font-bold text-mena-accent tracking-[0.2em] uppercase mb-2">
        {plan.name}
      </h4>
      <div className="font-display chrome-text text-[clamp(2rem,4vw,2.6rem)] font-black mb-2">
        {plan.price}
      </div>
      <p className="text-[13px] text-mena-dim mb-5 font-body leading-normal">
        {plan.desc}
      </p>
      <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-[13px] text-mena-muted font-body"
          >
            <span className="text-mena-primary mt-0.5 flex-shrink-0">✓</span>{" "}
            {f}
          </li>
        ))}
      </ul>
      <WhatsAppLink
        variant={plan.highlight ? "primary" : "outline"}
        className="block text-center py-[11px] rounded-lg text-xs font-bold tracking-[0.1em] uppercase"
        message={message}
      >
        Reservar Turno
      </WhatsAppLink>
    </div>
  )
}
