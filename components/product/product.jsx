import React from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export default function Product({ products }) {
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
        </div>
        <h3 className="mt-4 font-medium ">{products.name}</h3>
        {/* <h3 className="mt-4 font-medium">{product.genero}</h3> */}

        <p className="mt-2 font-medium">
          {/* {formatCurrencyString({
              currency: product.currency,
              value: product.price,
            })} */}
        </p>
      </Link>
    </>
  )
}
