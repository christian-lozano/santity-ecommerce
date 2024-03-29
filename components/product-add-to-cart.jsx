import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useCart } from "react-use-cart"

import { useToast } from "@/components/ui/use-toast"

import { Button } from "./ui/button"

export default function ProductAddToCart({ product }) {
  console.log(product.tallas)
  const precio = product.price

  const operation = (Number(product.descuento) / 100) * Number(precio)

  const resultado = Number(precio) - operation

  const { toast } = useToast()
  const [selectSize, setSelectSize] = useState({
    talla: "",
    stock: 0,
    _key: "",
  })
  const [activeAddProduct, setActiveAddProduct] = useState(true)
  const { addItem, items } = useCart()

  //add to cart
  const addToCart = () => {
    const item = {
      ...product,
      product_data: {
        size: selectSize,
      },
    }

    addItem({
      id: String(`${selectSize._key}`),
      name: product.name,
      idsanity: product.id,
      img: product.image,
      title: product.name,
      image: product.images[0].asset?._ref,
      objectID: product.sku,
      price: Number(resultado),
      talla: String(`${selectSize.talla}`),
      slug: product.slug,
    })
    toast({
      title: `${item.name} (${selectSize.talla})`,
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
    setActiveAddProduct(true)
  }

  const selectTalla = (talla, _key, stock) => {
    setActiveAddProduct(false)
    setSelectSize({ talla, _key, stock })
  }

  const [cliente, setCliente] = useState(false)
  useEffect(() => {
    setCliente(true)
  }, [])

  return (
    <div>
      <div className="mt-4">
        <p>
          Talla: <strong>{selectSize.talla || ""}</strong>
        </p>
        {cliente &&
          product.tallas.map(({ talla, stock, _key }) => (
            <Button
              onClick={() => selectTalla(talla, _key, stock)}
              key={_key}
              disabled={
                stock <= 0 ||
                items.find(
                  (itemsCarrito) =>
                    itemsCarrito.id === _key && itemsCarrito.quantity >= stock
                )
              }
              variant={
                selectSize.talla === talla && !activeAddProduct
                  ? "default"
                  : "outline"
              }
              className={`${
                stock <= 0 ||
                (items.find(
                  (itemsCarrito) =>
                    itemsCarrito.id === _key && itemsCarrito.quantity >= stock
                ) &&
                  "line-through")
              } mr-2 mt-4 `}
            >
              {talla}
            </Button>
          ))}
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            disabled={activeAddProduct}
            onClick={addToCart}
            type="button"
            className="hover:bg-violet-700 focus:ring-violet-500 w-full bg-black py-6 text-base font-medium text-white focus:outline-none focus:ring-2 dark:bg-white dark:text-black"
          >
            Agregar Al Carrito
          </Button>
        </div>
      </form>
    </div>
  )
}
