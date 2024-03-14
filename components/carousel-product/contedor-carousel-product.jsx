import React from "react"
import { client } from "@/sanity/lib/client"

import CarouselProduct from "@/components/carousel-product/carousel-product"

export default async function ContedorCarouselProduct({
  genero,
  cantidad = "10",
}) {
  const productosGenero = async (genero, cantidad) => {
    const order = `| order(_id) [0...${cantidad}]`

    const productFilter = `_type == "product"`

    const generoFilterHombre = genero ? `&& genero match "${genero}"` : ""

    const filter = `*[${productFilter}${generoFilterHombre}]`

    // await seedSanityData()
    const products = await client.fetch(`${filter} ${order} {
          _id,
          _createdAt,
          name,
          sku,
          images,
          marca,
          price,
          description,
          genero,
          descuento,
          "slug":slug.current
        }`)

    return products
  }
  const products = await productosGenero(genero, cantidad)

  return (
    <div>
      <CarouselProduct products={products} />
    </div>
  )
}
