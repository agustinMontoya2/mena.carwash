export const BUSINESS_NAME = "MENA Car Wash"
export const WHATSAPP_NUMBER = "5491125877893"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const PHONE_DISPLAY = "11 2587-7893"
export const INSTAGRAM_HANDLE = "@mena.carwash"
export const INSTAGRAM_URL = "https://www.instagram.com/mena.carwash"
export const ADDRESS = "Ituzaingó 1446, Ingeniero Maschwitz"
export const MAPS_URL =
  "https://www.google.com/maps/place/CGN,+Ituzaing%C3%B3+1446,+B1623+Ingeniero+Maschwitz,+Provincia+de+Buenos+Aires/@-34.3884993,-58.739905,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc9f885eb17645:0x129739b7527c5fbc!8m2!3d-34.3884993!4d-58.739905!16s%2Fg%2F11r_gsy63m?hl=es&entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D"
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.0!2d-58.739905!3d-34.3884993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f885eb17645%3A0x129739b7527c5fbc!2sCGN%2C%20Ituzaing%C3%B3%201446%2C%20B1623%20Ingeniero%20Maschwitz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1691000000000!5m2!1ses!2sar"

export const WHATSAPP_GENERIC_MESSAGE =
  "¡Hola! Quiero reservar un turno en MENA Car Wash."
export const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Quiero hacer una consulta sobre los turnos."
export const WHATSAPP_PLAN_TEMPLATE =
  "¡Hola! Me interesa el {plan} para {category}."
export const WHATSAPP_JUBILADOS_TEMPLATE =
  "¡Hola! Quiero consultar el descuento para jubilados en {category}."

export function buildPlanMessage(plan: string, category: string): string {
  return WHATSAPP_PLAN_TEMPLATE.replace("{plan}", plan).replace(
    "{category}",
    category.toLowerCase(),
  )
}

export function buildJubiladosMessage(category: string): string {
  return WHATSAPP_JUBILADOS_TEMPLATE.replace(
    "{category}",
    category.toLowerCase(),
  )
}
