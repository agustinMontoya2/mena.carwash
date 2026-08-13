import type { Service } from "@/types"
import carGray from "@/imports/image-1.png"
import moto from "@/imports/image-3.png"
import pickupBlue from "@/imports/image-5.png"

export const services: Service[] = [
  {
    category: "AUTOS",
    icon: "🚗",
    photo: carGray,
    photoAlt: "Auto gris en MENA Car Wash",
    plans: [
      {
        name: "Lavado Clásico",
        price: "$30.000",
        desc: "Lavado interior exterior, siliconado y aplique cera premium",
        features: [
          "Exterior completo",
          "Interior premium",
          "Siliconado",
          "Cera premium",
        ],
        highlight: false,
      },
      {
        name: "MENA Premium",
        price: "$45.000",
        desc: "Tratamiento profesional completo con productos Toxic Shine",
        features: [
          "Descontaminación férrica de llantas y cubierta",
          "Descontaminación de carrocería",
          "Lavado premium interior",
          "Aplique cera premium",
        ],
        highlight: true,
      },
    ],
    jubilados: { clasico: "$25.000", premium: "$35.000" },
  },
  {
    category: "CAMIONETAS",
    icon: "🛻",
    photo: pickupBlue,
    photoAlt: "Camioneta azul en MENA Car Wash",
    plans: [
      {
        name: "Lavado Clásico",
        price: "$40.000",
        desc: "Lavado interior exterior, siliconado y aplique cera premium",
        features: [
          "Exterior completo",
          "Interior premium",
          "Siliconado",
          "Cera premium",
        ],
        highlight: false,
      },
      {
        name: "MENA Premium",
        price: "$55.000",
        desc: "Tratamiento profesional completo con productos Toxic Shine",
        features: [
          "Descontaminación férrica de llantas y cubierta",
          "Descontaminación de carrocería",
          "Lavado premium interior",
          "Aplique cera premium",
        ],
        highlight: true,
      },
    ],
    jubilados: { clasico: "$35.000", premium: "$45.000" },
  },
  {
    category: "MOTOS",
    icon: "🏍️",
    photo: moto,
    photoAlt: "Moto Honda en MENA Car Wash",
    plans: [
      {
        name: "Lavado de Moto",
        price: "$10.000",
        desc: "Limpieza completa de la moto con productos premium",
        features: [
          "Lavado exterior completo",
          "Siliconado",
          "Acabado brillante",
        ],
        highlight: true,
      },
    ],
    jubilados: null,
  },
]
