"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { useCart } from "react-use-cart"

import { Button } from "../ui/button"

export default function Carrito() {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const { items, removeItem, cartTotal } = useCart()
  return (
    <div>
      <div className="py-16">
        <h1 className="mb-10 text-center text-2xl font-bold">CARRITO</h1>
        <div className="mx-auto max-w-5xl justify-center px-1 md:flex md:space-x-6 xl:px-0 2xl:max-w-7xl">
          <div className="rounded-lg md:w-2/3">
            {domLoaded &&
              items.map((el) => (
                <li
                  key={el.id}
                  className="flex flex-col items-center px-5 py-6 sm:flex-row sm:justify-between"
                >
                  <div className="flex w-full items-center space-x-2 sm:space-x-4">
                    <img
                      className="h-24 w-24 shrink-0 rounded object-cover outline-none dark:border-transparent dark:bg-gray-500 sm:h-32 sm:w-32"
                      src={urlForImage(el.image).url()}
                      alt="Polaroid camera"
                    />
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex w-full flex-col justify-between">
                        <div className="flex w-full justify-between  space-x-2">
                          <div className="space-y-1">
                            <h2 className="text-base font-bold sm:pr-8  xl:text-lg">
                              {el.title}
                            </h2>
                            {/* <p className="text-sm dark:text-gray-400">
                            Classic
                          </p> */}
                          </div>
                          <div className="text-right">
                            <p className="text-base font-semibold xl:text-lg">
                              S/{el.price}
                            </p>
                            <p className="text-sm line-through dark:text-gray-600">
                              S/75.50
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm">
                          <div className="">
                            <p className="text-sm dark:text-gray-400">
                              <p className="flex text-sm  font-bold">
                                <span className="mr-1">Cantidad: </span>
                                <span>({el.quantity})</span>
                              </p>
                              <p className="text-sm font-bold">
                                Talla : {el.talla}
                              </p>
                            </p>
                          </div>
                          {/* <div className="flex items-center border-gray-100">
                            <Button
                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() =>
                                updateItemQuantity(
                                  el.id,
                                  Number(el.quantity) - 1
                                )
                              }
                            >
                              {' '}
                              -{' '}
                            </Button>
                            <input
                              className="xl:h-8 xl:w-8 h-7 w-8 border bg-white text-center text-xs outline-none"
                              type="number"
                              value={el.quantity}
                            />
                            <Button
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() =>
                                updateItemQuantity(
                                  el.id,
                                  Number(el.quantity) + 1
                                )
                              }
                            >
                              {' '}
                              +{' '}
                            </Button>
                          </div> */}
                          <div className=" flex w-full items-center justify-end ">
                            <Button
                              className="cursor-pointer space-x-1 bg-transparent px-2  py-1 pl-0 hover:bg-transparent"
                              onClick={() => removeItem(el.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="ml-3 h-4 w-4 fill-white dark:fill-white"
                              >
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect
                                  width="32"
                                  height="200"
                                  x="168"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="240"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="312"
                                  y="216"
                                ></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                              </svg>
                              {/* <span>Remover</span> */}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            {/* pruductos  carrito*/}
          </div>
          {/* precios */}

          {domLoaded && (
            <div className="sticky mt-6 h-full self-start rounded-lg border bg-white p-6 shadow-md dark:bg-black md:mt-0 md:w-1/3 2xl:top-20">
              <div className="mb-2 flex justify-between">
                <p>Subtotal</p>
                <p>S/{cartTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery</p>
                <p>S/4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">S/{cartTotal}</p>
                  {/* <p className="text-sm text-gray-700">including VAT</p> */}
                </div>
              </div>
              <div className="fixed bottom-4 left-0 flex w-full justify-center md:relative">
                <Button className="mt-6 w-full cursor-pointer bg-[#ae946d] py-3  text-center text-lg  font-bold text-white hover:bg-[#b99d73]">
                  PAGAR
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
