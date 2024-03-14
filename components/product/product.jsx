import React from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export default function Product({ products }) {
  console.log(products)
  return (
    <>
      <Link
        key={products.id}
        href={`/products/${products.slug}`}
        className="group text-sm"
      >
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg   group-hover:opacity-75 ">
          <img
            width={300}
            height={300}
            src={urlForImage(products.images[0].asset._ref).url()}
            alt=""
          />
          {products.descuento && (
            <div className="absolute right-0 top-4 bg-black px-3 py-1">
              <h4 className=" mt-1 text-xs text-white ">
                -{products.descuento}%
              </h4>
            </div>
          )}
        </div>
        <h3 className="mt-4 font-medium capitalize ">
          {products.marca} - {products.genero}
        </h3>
        <h3 className="mt-4 font-medium ">{products.name}</h3>

        <p className="mt-2 font-medium">S/{products.price}</p>
        {/* <p className="mt-2 font-medium">S/{products.descuento}</p> */}
      </Link>
    </>
  )
}
