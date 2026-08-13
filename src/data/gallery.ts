import type { GalleryImage } from "@/types"
import carGray from "@/imports/image-1.png"
import carInterior from "@/imports/image-2.png"
import moto from "@/imports/image-3.png"
import pickupSilver from "@/imports/image-4.png"
import pickupBlue from "@/imports/image-5.png"

export const heroStrip: GalleryImage[] = [
  { src: pickupSilver, alt: "Camioneta plateada" },
  { src: carGray, alt: "Auto gris" },
  { src: pickupBlue, alt: "Camioneta azul" },
  { src: moto, alt: "Moto Honda" },
]

export const gallery: GalleryImage[] = [
  { src: pickupSilver, alt: "Camioneta plateada recién lavada" },
  { src: pickupBlue, alt: "VW Amarok azul brillando" },
  { src: carGray, alt: "Auto gris con brillo perfecto" },
  { src: carInterior, alt: "Interior de Audi A3 impecable" },
  { src: moto, alt: "Moto Honda blanca reluciente" },
  { src: pickupSilver, alt: "Pickup plateada, vista frontal" },
]
