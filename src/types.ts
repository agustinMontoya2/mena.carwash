export interface Jubilados {
  clasico: string
  premium: string
}

export interface Plan {
  name: string
  price: string
  desc: string
  features: string[]
  highlight: boolean
}

export interface Service {
  category: string
  icon: string
  photo: string
  photoAlt: string
  plans: Plan[]
  jubilados: Jubilados | null
}

export interface Feature {
  icon: string
  title: string
  desc: string
}

export interface Review {
  text: string
  author?: string
}

export interface GalleryImage {
  src: string
  alt: string
}
