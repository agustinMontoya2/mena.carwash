import { gallery } from "@/data/gallery"
import Section from "@/components/layout/Section"
import SectionHeading from "@/components/layout/SectionHeading"
import Carousel from "@/components/shared/Carousel"

export default function Gallery() {
  return (
    <Section id="galería">
      <SectionHeading eyebrow="Nuestros Trabajos" title="GALERÍA" />
      <Carousel images={gallery} />
    </Section>
  )
}
