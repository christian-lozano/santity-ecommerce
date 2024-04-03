"use client"

import { useState } from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { useCart } from "react-use-cart"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import ContedorCarouselProduct from "./carousel-product/contedor-carousel-product"
import ProductAddToCart from "./product-add-to-cart"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  const precio = product.priceecommerce

  const operation = (Number(product.descuento) / 100) * Number(precio)

  const resultado = Number(precio) - operation

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">
        {product.name} - {product.genero}
      </h1>
      <h6 className="text-md tracking-tight">Marca: {product.marca}</h6>
      <h5 className="text-md tracking-tight">Sku: {product.sku}</h5>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <div className="flex">
          <p className="ml-3 mr-2 text-3xl font-semibold tracking-tight text-[#767677] line-through">
            S/{product.priceecommerce}
          </p>
          <p className="text-3xl tracking-tight ">S/{resultado}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <ProductAddToCart product={product} />
    </div>
  )
}
