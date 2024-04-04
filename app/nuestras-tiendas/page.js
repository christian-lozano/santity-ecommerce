import { client } from "@/sanity/lib/client"

import NuestrasTiendas from "@/components/nuestras-tiendas/nuestras-tiendas"

import "@/styles/globals.css"
import { groq } from "next-sanity"

export default async function page() {
  const nuestrasTiendas = await client.fetch(
    groq`*[_type == "nuestrastiendas"]`
  )
  return (
    <div>
      <NuestrasTiendas nuestrasTiendas={nuestrasTiendas[0]} />
    </div>
  )
}
