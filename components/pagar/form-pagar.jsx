"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Option, Select } from "@material-tailwind/react"
import { useCart } from "react-use-cart"

import { Input } from "../ui/input"

export default function FormPagar() {
  const router = useRouter()
  const [checkoutPago, setCheckoutPago] = useState(false)
  const [allValues, setAllValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    documento: "",
    telefono: "",
    direccion: "",
    comprobante: "Boleta",
    ruc: "null",
    provincia: "",
    distrito: "",
    //   adicional: '',
  })

  const changeHandler = (e, name) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
  }
  const { items, cartTotal } = useCart()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const handlesubmit = async () => {
    let dataPago = {
      productos: items,
      datosComprador: {
        nombre: allValues.nombre,
        apellido: allValues.apellido,
        email: allValues.email,
        documento: allValues.documento,
        telefono: allValues.telefono,
        comprobante: allValues.comprobante,
        direccion: allValues.direccion,
        ruc: allValues.ruc,
        // distrito,
        cartTotal,
      },
    }

    try {
      const res = await fetch(`/api/checkout`, {
        method: "POST",
        body: JSON.stringify(dataPago),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "*",
        },
      })
      const data = await res.json()
      console.log(res.status)

      console.log(data.url)
      if (res.status === 200) {
        router.push(data.url)
        // setLoadingMercadoPago(false)
        // router.refresh()
        // alert(data.msg)
      }
      if (res.status === 401) {
        alert("Ingresa un Email Valido")
        setLoadingMercadoPago(false)

        // router.refresh()
        // alert(data.msg)
      }
      // console.log(data);
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(allValues)
  return (
    <div className="mt-10  px-4 pt-8  lg:mt-0">
      <p className="text-xl font-medium">Detalles del pago</p>
      <p className="text-gray-400">
        Complete su pedido proporcionando sus datos de pago.
      </p>
      <div className="">
        <label
          htmlFor="card-no"
          className="mb-2 mt-4 block text-sm font-medium"
        >
          Nombre y Apellido
        </label>
        <div className="flex justify-between">
          <div className="relative w-1/2 shrink-0">
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <Input
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        {/*  */}
        <label htmlFor="email" className="mb-2 mt-4 block text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        {/*  */}
        <label
          htmlFor="card-no"
          className="mb-2 mt-4 block text-sm font-medium"
        ></label>
        <div className="flex">
          <div className="relative w-1/2 shrink-0">
            Documento De Identidad
            <Input
              type="text"
              name="documento"
              placeholder="Telefono"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="relative ml-1 w-1/2 shrink-0">
            Teléfono
            <Input
              type="tel"
              name="telefono"
              placeholder="Telefono"
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
        {/* Dirección */}
        <label
          htmlFor="billing-address"
          className="mb-2 mt-4 block text-sm font-medium"
        >
          Dirección
        </label>
        <div className="mb-3 flex flex-col sm:flex-row ">
          <div className="relative w-full shrink-0 sm:w-full">
            <Input
              type="text"
              name="direccion"
              placeholder="Direccion"
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
        {/* boleta factura */}
        <div className="flex justify-center">
          <div class="flex gap-10">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="react"
              >
                <input
                  onChange={(e) => changeHandler(e)}
                  name="comprobante"
                  checked={allValues.comprobante === "Boleta"}
                  value="Boleta"
                  type="radio"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="react"
                />
                <span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="react"
              >
                Boleta
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="react"
              >
                <input
                  onChange={(e) => changeHandler(e)}
                  name="comprobante"
                  checked={allValues.comprobante === "Factura"}
                  value="Factura"
                  type="radio"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="factura"
                />
                <span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="react"
              >
                Factura
              </label>
            </div>
          </div>
        </div>
        {allValues.comprobante === "Factura" && (
          <>
            <label
              htmlFor="billing-address"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              RUC
            </label>
            <div className="mb-3 flex flex-col sm:flex-row ">
              <div className="relative w-full shrink-0 sm:w-full">
                <Input
                  type="text"
                  name="ruc"
                  placeholder="RUC"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
            </div>
          </>
        )}

        {/* info */}
        <div className="flex flex-col sm:flex-row">
          <label
            htmlFor="card-holder"
            className="mb-2 mt-4 block w-full text-sm  font-medium "
          >
            <Select
              onChange={(e) => setAllValues({ ...allValues, provincia: e })}
              nonce={undefined}
              name="provincia"
              label="Provincia"
              className={`border  ${allValues.provincia.length === 0 && " "}`}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <Option value="Amazonas">Amazonas</Option>
              <Option value="Ancash">Ancash</Option>
              <Option value="Apurímac">Apurímac</Option>
              <Option value="Arequipa">Arequipa</Option>
              <Option value="Ayacucho">Ayacucho</Option>
              <Option value="Cajamarca">Cajamarca</Option>
              <Option value="Callao">Callao</Option>
              <Option value="Cuzco">Cuzco </Option>
              <Option value="Huancavelica">Huancavelica</Option>
              <Option value="Huánuco">Huánuco</Option>
              <Option value="Ica">Ica</Option>
              <Option value="Junín">Junín</Option>
              <Option value="La_Libertad">La Libertad</Option>
              <Option value="Lambayeque">Lambayeque</Option>
              <Option value="Lima">Lima</Option>
              <Option value="Loreto">Loreto</Option>
              <Option value="Madre_de_Dios">Madre de Dios</Option>
              <Option value="Moquegua">Moquegua</Option>
              <Option value="Pasco">Pasco</Option>
              <Option value="Piura">Piura</Option>
              <Option value="Puno">Puno</Option>
              <Option value="San_Martín">San Martín</Option>
              <Option value="Tacna">Tacna</Option>
              <Option value="Tumbes">Tumbes</Option>
              <Option value="Ucayali">Ucayali</Option>
            </Select>
          </label>
        </div>

        {/* <!-- Total --> */}
        {domLoaded && (
          <div className="border-b-2 pb-2">
            <div className="mt-6 border-y py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium ">Subtotal</p>
                <p className="font-semibold ">S/{cartTotal}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between ">
              <p className="text-sm font-medium ">Total</p>
              <p className="text-2xl font-semibold ">S/{cartTotal}</p>
            </div>
          </div>
        )}
      </div>

      <div className="my-3 hidden text-center text-xs text-gray-400 xl:block">
        Tus datos personales se utilizarán para procesar tu pedido, mejorar tu
        experiencia en esta web y otros propósitos descritos en nuestra
        <Link
          href="/pyp"
          target="_blank"
          className="mr-1 text-gray-400 underline focus:outline-none "
        >
          <i className="mdi mdi-beer-outline mr-1 "></i>
          política de privacidad
        </Link>
        y nuestros
        <Link
          href="/tyc"
          target="_blank"
          className="mr-1 text-gray-400 underline focus:outline-none "
        >
          <i className="mdi mdi-beer-outline mr-1 "></i>términos y condiciones.
        </Link>
      </div>

      <div className=" laptop:mt-0 z-10  mt-3 flex items-center justify-center xl:flex">
        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="checkbox-8"
            data-ripple-dark="true"
          >
            <input
              // checked={checkoutPago}
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black hover:before:opacity-10"
              id="checkbox-8"
              onChange={(e) => setCheckoutPago(e.target.checked)}
            />
            <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
        </div>
        <span className="text-sm text-gray-400  "> Acepto los</span>{" "}
        <Link
          href="/tyc"
          target="_blank"
          className="mr-1 text-sm text-gray-400 underline  focus:outline-none "
          rel="noreferrer"
        >
          <i className="mdi mdi-beer-outline mr-1 "></i>Términos & Condiciones.
        </Link>
      </div>
      {/* ---- */}

      <button
        // disabled={true}
        onClick={handlesubmit}
        className="mb-8 mt-4 w-full  cursor-pointer rounded-md bg-white px-6 py-3 font-medium text-black"
      >
        Realizar pedido
      </button>
    </div>
  )
}
