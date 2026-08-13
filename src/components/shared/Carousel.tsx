import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import type { GalleryImage } from "@/types"
import { ImageWithFallback } from "@/components/shared/ImageWithFallback"

interface Props {
  images: GalleryImage[]
}

export default function Carousel({ images }: Props) {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        spaceBetween={32}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-mena-border/25">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
