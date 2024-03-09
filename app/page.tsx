import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import Typeandtype from "@/components/Typeandtype/Typeandtype"
import Carousel from "@/components/carousel-home/Carousel"
import CarouselProduct from "@/components/carousel-product/carousel-product"

interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    size?: string
    genero?: string
    search?: string
    sku?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const {
    date = "desc",
    price,
    color,
    category,
    size,
    search,
    genero,
    sku,
  } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ""
  const dateOrder = date ? `| order(_createAt ${date})` : ""

  const order = `${priceOrder}${dateOrder}`

  const productFilter = `_type == "product"`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const categoryFilter = category ? `&& "${category}" in categories` : ""
  const sizeFilter = size ? `&& "${size}" in sizes` : ""
  const generoFilter = genero ? `&& genero match "${genero}"` : ""

  const searchFilter = search
    ? `&& name match "${search}" || sku match "${search}"|| genero match "${search}"`
    : ""

  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}${generoFilter}]`

  // await seedSanityData()
  const products = await client.fetch<SanityProduct[]>(groq`${filter} ${order} {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    genero,
    "slug":slug.current
  }`)

  return (
    <div>
      {/* <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description}</p>
      </div> */}
      <Carousel />
      <div>
        <main className=" xl:container xl:px-6">
          <Typeandtype
            props={{
              title: "Men and Women",
              subtitle: "Shop men and women clothing!",
              type2: "Hombre",
              link2: "men",
              img2: "https://i.imgur.com/O9BRrNL.jpg",
              type1: "Mujer",
              link1: "women",
              img1: "https://i.imgur.com/J1K8pVr.jpg",
            }}
          >
            <CarouselProduct />
          </Typeandtype>
          <CarouselProduct />

          <section
            aria-labelledby="products-heading"
            className="flex pb-24 pt-6"
          ></section>
        </main>
      </div>
    </div>
  )
}
