import React, { useState } from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export default function Product({ products }) {
  const [activeView, setActiveView] = useState(false)
  console.log(products)
  return (
    <>
      <Link
        key={products.id}
        href={`/products/${products.slug}`}
        className="group z-10 text-sm"
      >
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg    group-hover:opacity-75 ">
          <img
            width={2000}
            height={2000}
            className="relative "
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
      {/* <button
        onClick={() => alert("producto")}
        className="button-0 absolute z-50 flex items-center justify-center rounded-full  text-center"
      >
        <svg
          class=" icon icon--plus"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.125 10.875V18H10.375V10.875H18V9.625H10.375V2H9.125V9.625H2V10.875H9.125Z"
          ></path>
        </svg>
      </button> */}
    </>
  )
}