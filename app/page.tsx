import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"

import Carousel from "@/components/carousel-home/Carousel"
interface Props {
  searchParams:{
    date?:string,
    price?:string,
    color?:string,
    category?:string,
    size?:string,
    genero?:string,
    search?:string,
    sku?:string,

    


  }
}

export default async function Page({searchParams}:Props) {

  const {date = "desc" , price ,color ,category ,size,search,genero,sku} = searchParams
  const priceOrder = price ? `| order(price ${price})`:"";
  const dateOrder = date ? `| order(_createAt ${date})`:"";
  
  const order = `${priceOrder}${dateOrder}`


  
  const productFilter = `_type == "product"`
  const colorFilter = color ?`&& "${color}" in colors`:""
  const categoryFilter = category ? `&& "${category}" in categories`:""
  const sizeFilter = size ? `&& "${size}" in sizes`:""
  const generoFilter =genero ? `&& genero match "${genero}"`:""

  const searchFilter = search ? `&& name match "${search}" || sku match "${search}"|| genero match "${search}"`: ""


 

  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}${generoFilter}]`

  // await seedSanityData()
  const products = await client.fetch<SanityProduct[]>(groq `${filter} ${order} {
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
      <Carousel></Carousel>
      <div>
        <main className="mx-auto  px-6">
        

          <section aria-labelledby="products-heading" className="flex pb-24 pt-6">
        
          </section>
        </main>
      </div>
    </div>
  )
}