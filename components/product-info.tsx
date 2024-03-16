"use client"

import { useState } from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { ArrowRight } from "lucide-react"
import { useCart } from "react-use-cart"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  console.log(product)

  const [selectSize, setSelectSize] = useState(product.tallas[0].talla)

  const { toast } = useToast()

  const { addItem } = useCart()
  const addToCart = () => {
    const item = {
      ...product,
      product_data: {
        size: selectSize,
      },
    }

    addItem({
      id: String(`${selectSize}`),
      name: product.name,
      idsanity: product.id,
      img: product.image,
      title: product.name,
      image: product.images[0].asset?._ref,
      objectID: product.sku,
      price: Number(product.price),
      talla: String(`${selectSize}`),
    })
    toast({
      title: `${item.name} (${selectSize})`,
      description: "Producto Agregado al Carrito",
      action: (
        <Link href={"/carrito"}>
          <Button variant={"link"} className="gap-x-5 whitespace-nowrap">
            <span>Abrir Carrito</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      ),
    })
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">S/{product.price}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <div className="mt-4">
        <p>
          talla: <strong>{selectSize}</strong>
        </p>
        {product.tallas.map(({ talla, stock }) => (
          <Button
            onClick={() => setSelectSize(talla)}
            key={talla}
            disabled={stock <= 0 && true}
            variant={selectSize === talla ? "default" : "outline"}
            className={`${stock <= 0 && "line-through"} mr-2 mt-4`}
          >
            {talla}
          </Button>
        ))}
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            onClick={addToCart}
            type="button"
            className="w-full bg-black py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-white dark:text-black"
          >
            Agregar Al Carrito
          </Button>
        </div>
      </form>
    </div>
  )
}
