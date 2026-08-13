import type { Jubilados } from "@/types"

interface Props {
  jubilados: Jubilados
}

export default function JubiladosCard({ jubilados }: Props) {
  return (
    <div className="card px-7 py-6">
      <div className="flex items-center gap-2.5 mb-4 flex-wrap">
        <span className="text-[22px]">👴👵</span>
        <span className="font-display text-xs font-bold text-mena-accent tracking-[0.15em] uppercase">
          Descuento a Jubilados
        </span>
        <span className="ml-auto text-xs text-mena-faint font-body">
          Presentando carnet de jubilado
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Lavado Clásico", value: jubilados.clasico },
          { label: "MENA Premium", value: jubilados.premium },
        ].map((item) => (
          <div
            key={item.label}
            className="text-center p-3 bg-mena-surface-raised rounded-[10px]"
          >
            <p className="text-[10px] text-mena-faint uppercase tracking-[0.1em] mb-1">
              {item.label}
            </p>
            <p className="font-display text-2xl font-extrabold text-mena-accent">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
