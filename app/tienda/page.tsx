import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { seedSanityData } from "@/lib/seed"
import { cn } from "@/lib/utils"
import Footer from "@/components/Footer/Footer"
import { SiteHeader } from "@/components/Header/site-header"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import "@/styles/globals.css"
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
    price,
    description,
    genero,
    tipo,
    marca,
    descuento,
    "slug":slug.current
  }`)

  return (
    <div>
      <SiteHeader />

      {/* <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description}</p>
      </div> */}
      <div className="sticky top-[80px]  z-20    h-full w-full  xl:top-[101px] ">
        <div className=" flex  w-full   items-center justify-between bg-white  px-6 py-4   dark:bg-background ">
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            {products.length}
            <span className="ml-2">Producto{products.length > 1 && "s"}</span>
          </h1>
          {/* Product Sort */}
          <ProductSort />
        </div>
      </div>
      <div>
        <main className=" w-full px-6">
          <section
            aria-labelledby="products-heading"
            className="flex pb-24 pt-6"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                products.length > 0
                  ? "lg:grid-cols-[1fr_3fr]"
                  : "lg:grid-cols-[1fr_3fr]"
              )}
            >
              <div className="hidden lg:block">
                {/* Product filters */}

                <ProductFilters />
              </div>
            </div>
            <ProductGrid products={products} />
            {/* Product grid */}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
