import { gallery } from "@/data/gallery"
import Section from "@/components/layout/Section"
import SectionHeading from "@/components/layout/SectionHeading"
import { ImageWithFallback } from "@/components/shared/ImageWithFallback"

export default function Gallery() {
  return (
    <Section id="galería">
      <SectionHeading eyebrow="Nuestros Trabajos" title="GALERÍA" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        {gallery.map((img, i) => (
          <div
            key={i}
            className="group rounded-[14px] overflow-hidden aspect-[4/3] relative"
          >
            <ImageWithFallback
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
