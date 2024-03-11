"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Edit, Search, ShoppingBag, X } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo/logo"
import { ThemeToggle } from "@/components/theme-toggle"

interface Props {
  children: JSX.Element[] | JSX.Element
}
export default function NavTop({ children }: Props) {
  const { cartCount } = useShoppingCart()
  const [search, setActiveSearch] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-around xl:block ">
      {/* Buscador */}
      <div
        className={`fixed ${
          search
            ? "translate-y-[0rem] transition delay-150 ease-in"
            : "translate-y-[-25rem] transition delay-150 ease-in"
        } top-0 z-[888] flex h-[20vh] w-[100vw] items-center  justify-center bg-gray-800/80 dark:bg-gray-800/80`}
      >
        {
          <div className="absolute flex h-full w-full items-center justify-around">
            {children}
            <button
              className=" absolute  right-5 top-3 xl:right-[35%] "
              onClick={() => setActiveSearch(!search)}
            >
              <X className={"w-18 h-8 text-white"} />
            </button>
          </div>
        }
      </div>
      <div className="xl:hidden">
        <Logo />
      </div>
      <div className="xl:flex xl:w-full   xl:justify-end  ">
        <div className=" xl:mr-36">
          <div className="flex items-center space-x-1">
            {/* icono Buscador */}

            <Button
              onClick={() => setActiveSearch(!search)}
              size="sm"
              variant="ghost"
            >
              <Search className={"h-5 xl:w-5"} />
              <span className="sr-only">Buscar</span>
            </Button>

            {/* icono carrito */}
            <Link href="/cart">
              <Button size="sm" variant="ghost">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">{cartCount}</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <ThemeToggle />
            {process.env.NODE_ENV === "development" && (
              <Link href={"/studio"}>
                <Button size={"sm"} variant={"ghost"}>
                  <Edit className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
