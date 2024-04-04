import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import CarouselProductRelacionados from "@/components/carousel-product/carousel-product-relacionados"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

import "@/styles/globals.css"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const product =
    await client.fetch<SanityProduct>(groq`*[_type == "product" && slug.current == "${params.slug}"][0] {
  _id,
  _createAt,
  "id":_id,
  name,
  sku,
  marca,
  images,
  priceecommerce,
  currency,
  description,
  sizes,
  categories,
  colors,
  genero,
  tipo,
  descuento,
  tallas,
  "slug":slug.current
}`)

  return {
    title: `Producto - ${product.name}`,
    description: `${product.name} - ${product.name} - ${product.slug} - ${product.sku}`,
  }
}

export default async function Page({ params }: Props) {
  const product =
    await client.fetch<SanityProduct>(groq`*[_type == "product" && slug.current == "${params.slug}"][0] {
    _id,
    _createAt,
    "id":_id,
    name,
    sku,
    marca,
    images,
    priceecommerce,
    currency,
    description,
    sizes,
    categories,
    colors,
    genero,
    tipo,
    descuento,
    tallas,
    "slug":slug.current
  }`)

  if (!product) {
    return notFound()
  }
  const productosGenero = async () => {
    const order = `| order(_id) [0...10]`

    const productFilter = `_type == "product"`

    const generoFilterHombre = `${product.genero}`
      ? `&& genero match "${product.genero}"&& marca match "${product.marca}"`
      : ""

    const filter = `*[${productFilter}${generoFilterHombre}]`

    // await seedSanityData()
    const products = await client.fetch(`${filter} ${order} {
          _id,
          _createdAt,
          name,
          sku,
          images,
          marca,
          priceecommerce,
          description,
          descuento,
          tipo,
          genero,
          descuento,
          "slug":slug.current
        }`)

    return products
  }

  const products = await productosGenero()

  return (
    <>
      <main className="mx-auto max-w-6xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
            {/* Product gallery */}
            <ProductGallery product={product} />
            {/* Product info */}
            <ProductInfo product={product} />
          </div>
        </div>
      </main>
      <div>
        <h5 className="text-center text-2xl font-extrabold">
          Productos Relacionados
        </h5>
        <CarouselProductRelacionados products={products} />
      </div>
    </>
  )
}
