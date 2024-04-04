import "@/styles/globals.css"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import PaginaEmprende from "@/components/emprende/emprende"

export default async function page() {
  const emprende = await client.fetch(groq`*[_type == "emprende"]`)
  return (
    <>
      <PaginaEmprende emprende={emprende[0]} />
    </>
  )
}
