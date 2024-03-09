import React from "react"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

export default function Product({ products }) {
  return (
    <>
      <Link
        key={products.id}
        href={`/products/${products.slug}`}
        className="group text-sm"
      >
        <div className="aspect-h-1 aspect-w-1   overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
          <img width={225} height={280} src={products.img} alt="" />
        </div>
        <h3 className="mt-4 font-medium">{products.name}</h3>
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
