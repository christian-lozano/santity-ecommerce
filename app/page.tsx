import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import "@/styles/globals.css"
import { SanityProduct, SanitySlider } from "@/config/inventory"
import Footer from "@/components/Footer/Footer"
import { SiteHeader } from "@/components/Header/site-header"
import Typeandtype from "@/components/Typeandtype/Typeandtype"
import Benefit from "@/components/benefits/Benefit"
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
const benefits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
    title: "Envío gratis",
    text: "¡Envío gratis en todos los pedidos superiores a S/500!",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        />
      </svg>
    ),
    title: "Pago Seguro",
    text: "Compre con seguridad y protección",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
        />
      </svg>
    ),
    title: "100% Satisfacción",
    text: "30 días de garantía de devolución de dinero",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
        />
      </svg>
    ),
    title: "Customer Service",
    text: "Reliable cusomer servie",
  },
]
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
  const slider = await client.fetch<SanitySlider[]>(groq`*[_type == "home"]`)


  return (
    <div>
      {/* <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description}</p>
      </div> */}
      <SiteHeader />

      <div className="conta">
        <Carousel dataSlider={slider[0]} />
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
          <div className="mt-20 grid h-52 grid-cols-2  items-center justify-center xl:flex xl:justify-around ">
            {benefits.map((el) => (
              <Benefit benefits={el}></Benefit>
            ))}
          </div>
          <section
            aria-labelledby="products-heading"
            className="flex pb-24 pt-6"
          />
        </main>
      </div>
      <Footer />
    </div>
  )
}
