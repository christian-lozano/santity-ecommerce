"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { Option, Select } from "@material-tailwind/react"
import { useCart } from "react-use-cart"

export default function PaginaPagar() {
  const { items, cartTotal } = useCart()
  // console.log(items)

  const [domLoaded, setDomLoaded] = useState(false)
  const [checkoutPago, setCheckoutPago] = useState(false)
  const [validate, setValidate] = useState(false)

  const [provincia, setProvincia] = useState(String)
  const [distrito, setDistrito] = useState(String)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const [allValues, setAllValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    documento: "",
    telefono: "",
    direccion: "",
    comprobante: "Boleta",
    ruc: "null",
    //   provincia: '',
    distrito: "",
    //   adicional: '',
  })

  const changeHandlerSelectDistrito = (e) => {
    setDistrito(e)
    setAllValues({ ...allValues, provincia: e })
    if (
      allValues.nombre.length >= 5 &&
      allValues.apellido.length >= 5 &&
      allValues.email.length >= 5 &&
      allValues.documento.length >= 5 &&
      allValues.telefono.length >= 5 &&
      allValues.direccion.length >= 5 &&
      // provincia.length >= 2 &&
      distrito.length >= 2
      // allValues.adicional.length >= 3
    ) {
      setValidate(true)
    } else {
      setValidate(false)
    }
  }
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (
      allValues.nombre.length >= 1 &&
      allValues.apellido.length >= 1 &&
      allValues.email.length >= 5 &&
      allValues.documento.length >= 2 &&
      allValues.telefono.length >= 5 &&
      allValues.comprobante.length >= 2 &&
      allValues.direccion.length >= 3 &&
      // provincia.length >= 2 &&
      distrito.length >= 1
      // allValues.adicional.length >= 3
    ) {
      if (allValues.comprobante === "Factura" && allValues.ruc.length === 0) {
        setValidate(false)
      } else {
        setValidate(true)
      }
    } else {
      setValidate(false)
    }
  }, [allValues, provincia, distrito])

  // const dataProducts = []
  // items.map((el) => {
  //   dataProducts.push({
  //     objectID: el.id,
  //     units_in_stock: el.units_in_stock - el.quantity,
  //   })
  // })
  // const dataStock = JSON.stringify(dataProducts)
  // console.log(dataStock)
  const [loadingMercadoPago, setLoadingMercadoPago] = useState(false)

  const handlesubmit = async () => {
    setLoadingMercadoPago(true)
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
        distrito,
        cartTotal,
      },
    }

    try {
      const res = await fetch(`/api/checkout2`, {
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
      // console.log(res.status);
      if (res.status === 201) {
        router.push(data.msg)
        setLoadingMercadoPago(false)
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

  return (
    <div className=" pt-20">
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Resumen del pedido</p>
          <p className="text-gray-400">
            Revisa tus artículos. Y seleccione un método de envío adecuado.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border  px-2 py-4  sm:px-6">
            {domLoaded &&
              items.map((el) => (
                <li
                  key={el.id}
                  className="flex flex-col items-center  py-6 sm:flex-row sm:justify-between"
                >
                  <div className="flex w-full items-center space-x-2 sm:space-x-4">
                    <img
                      className="shrink-0 rounded object-cover outline-none dark:border-transparent dark:bg-gray-500 sm:h-32 sm:w-32"
                      src={urlForImage(el.image).url()}
                      width={150}
                      alt="Polaroid camera"
                    />
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex w-full flex-col justify-between">
                        <div className="flex w-full justify-between space-x-2 pb-2">
                          <div className="space-y-1">
                            <h2 className="laptop:text-base text-xs font-bold sm:pr-8   xl:text-lg">
                              {el.title}
                            </h2>
                            <p className="text-sm dark:text-gray-400">
                              <p className="text-sm font-bold">
                                Cantidad : ({el.quantity})
                              </p>
                              <p className="text-sm font-bold">
                                Talla : {el.talla}
                              </p>
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-base font-semibold xl:text-lg">
                              S/{el.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex divide-x text-sm"></div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </div>

          <p className="mt-8 text-lg font-medium">Métodos de envío</p>
          <form className="mt-5 grid gap-6">
            <div className="relative ">
              <label
                className="Select-none flex cursor-pointer rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                htmlFor="radio_2"
              >
                <span className="absolute right-4 top-1/2 box-content block h-5 w-5 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-black peer-checked:border-gray-700 dark:bg-white"></span>
                <div className="ml-5">
                  <span className="mt-2 font-semibold">
                    Envio previa coordinación
                  </span>
                </div>
              </label>
            </div>
          </form>
        </div>
        {/* form */}
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
                <input
                  type="text"
                  id="card-no"
                  name="nombre"
                  className={`w-full rounded-md border ${
                    allValues.nombre.length === 0
                      ? "border-red-200 focus:border-red-200 "
                      : "border-gray-400 focus:border-gray-400  focus:ring-gray-600  "
                  } bg-transparent px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10   `}
                  placeholder="NOMBRES"
                  onChange={(e) => changeHandler(e)}
                />
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div> */}
              </div>

              <input
                type="text"
                name="apellido"
                className={`ml-1 w-full rounded-md border ${
                  allValues.apellido.length === 0
                    ? "border-red-200 focus:border-red-200"
                    : "border-gray-400 focus:border-gray-400  focus:ring-gray-600  "
                } bg-transparent px-2 py-3 text-sm shadow-sm outline-none focus:z-10  `}
                placeholder="APELLIDOS"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            {/*  */}
            <label
              htmlFor="email"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className={`w-full rounded-md border ${
                  allValues.email.length === 0
                    ? "border-red-200 focus:border-red-200 "
                    : "border-gray-400 focus:border-gray-400  focus:ring-gray-600  "
                } bg-transparent px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10   `}
                placeholder="tu.email@gmail.com"
                onChange={(e) => changeHandler(e)}
              />
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div> */}
            </div>
            {/*  */}
            <label
              htmlFor="card-no"
              className="mb-2 mt-4 block text-sm font-medium"
            ></label>
            <div className="flex">
              <div className="relative w-1/2 shrink-0">
                Documento De Identidad
                <input
                  type="email"
                  id="card-no"
                  name="documento"
                  className={`w-full rounded-md border ${
                    allValues.documento.length === 0
                      ? "border-red-200 focus:border-red-200 "
                      : "border-gray-400 focus:border-gray-400  focus:ring-gray-600  "
                  } bg-transparent px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10`}
                  placeholder="Documento de Identidad"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div className="relative ml-1 w-1/2 shrink-0">
                Teléfono
                <input
                  type="text"
                  name="telefono"
                  className={`w-full rounded-md border ${
                    allValues.telefono.length === 0
                      ? "border-red-200 focus:border-red-200 "
                      : "border-gray-400 focus:border-gray-400 focus:ring-gray-600"
                  } bg-transparent px-2 py-3 text-sm shadow-sm outline-none focus:z-10`}
                  placeholder="Teléfono"
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
                <input
                  type="text"
                  id="billing-address"
                  name="direccion"
                  className={`w-full rounded-md border ${
                    allValues.direccion.length === 0
                      ? "border-red-200 focus:border-red-200"
                      : "border-gray-400 focus:border-gray-400  focus:ring-gray-600  "
                  } bg-transparent px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10   `}
                  placeholder="Dirección"
                  onChange={(e) => changeHandler(e)}
                />
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/b15bfeb63d8381b63973169f3dbaffc3.svg"
                    alt=""
                  />
                </div> */}
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
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
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
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
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
                    <input
                      type="text"
                      id="billing-address"
                      name="ruc"
                      className={`w-full rounded-md border ${
                        allValues.ruc.length === 0
                          ? "border-red-200 focus:border-red-200"
                          : "border-gray-400 focus:border-gray-400  focus:ring-gray-600  "
                      } bg-transparent px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10  `}
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
                  nonce={undefined}
                  name="provincia"
                  label="Provincia"
                  className={`border  ${provincia.length === 0 && " "}`}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onChange={(e) => changeHandlerSelectProvincia(String(e))}
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
              {/* <label
                htmlFor="card-holder"
                className="mb-2  mt-5 block w-full text-sm font-medium"
              ></label> */}
            </div>
            {/* <label
            htmlFor="card-holder"
            className="mt-4 mb-2 block text-sm font-medium hidden"
          >
            Información Adicional
          </label>
          <div className="relative hidden">
            <input
              type="text"
              id="card-holder"
              name="adicional"
              className={`w-full rounded-md border  ${
                allValues.adicional.length === 0
                  ? 'border-red-200 focus:border-red-200 '
                  : 'border-gray-400 focus:border-gray-400  focus:ring-gray-600  '
              } px-2 py-3 text-sm shadow-sm outline-none focus:z-10 bg-transparent  `}
              placeholder="Información Adicional de Envio"
              onChange={(e) => changeHandler(e)}
            />
          </div> */}

            {/* <!-- Total --> */}
            {domLoaded && (
              <div className="border-b-2 pb-2">
                <div className="mt-6 border-y py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium ">Subtotal</p>
                    <p className="font-semibold ">S/{cartTotal}</p>
                  </div>
                  {/* <div className="flex items-center justify-between">
                  <p className="text-sm font-medium ">Envío</p>
                  <p className="font-semibold ">S/8.00</p>
                </div> */}
                </div>
                <div className="mt-6 flex items-center justify-between ">
                  <p className="text-sm font-medium ">Total</p>
                  <p className="text-2xl font-semibold ">S/{cartTotal}</p>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            {items && (
              <>
                <input
                  type="hidden"
                  name="productos"
                  value={items.map(
                    (el) => `${el.id}_${el.quantity}_${String(el.talla)}`
                  )}
                />
                <input
                  type="hidden"
                  name="stock"
                  value={items.map(
                    (el) =>
                      `objectID:${String(el.id)}units_in_stock+${
                        el.units_in_stock - Number(el.quantity)
                      }`
                  )}
                  // value={items.map(
                  //   (el) =>
                  //     `${String(el.quantity)}_` +
                  //     `${String(el.id)}_` +
                  //     `${String(el.units_in_stock)}`
                  // )}
                  // value={String(dataStock)}
                />
              </>
            )}
            <input type="hidden" name="nombre" value={allValues.nombre} />
            <input type="hidden" name="apellido" value={allValues.apellido} />
            <input
              type="hidden"
              name="typedocumento"
              value={allValues.documento}
            />

            <input type="hidden" name="direccion" value={allValues.direccion} />
            <input type="hidden" name="provincia" value={provincia} />
            <input type="hidden" name="distrito" value={distrito} />
            <input type="hidden" name="email" value={allValues.email} />
            <input type="hidden" name="adicional" value={allValues.adicional} />
            <input type="hidden" name="monto" value={cartTotal} />
            {/* <input
                      type="hidden"
                      name="fecha"
                      value={dataPedidos.fecha}
                    /> */}
            {/* terminos y condiciones */}
            <div className="my-3 hidden text-center text-xs text-gray-400 xl:block">
              Tus datos personales se utilizarán para procesar tu pedido,
              mejorar tu experiencia en esta web y otros propósitos descritos en
              nuestra
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
                <i className="mdi mdi-beer-outline mr-1 "></i>términos y
                condiciones.
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
                <i className="mdi mdi-beer-outline mr-1 "></i>Términos &
                Condiciones.
              </Link>
            </div>
            {/* ---- */}

            {checkoutPago && items.length > 0 && validate ? (
              <div className="relative flex w-full flex-col items-center justify-center ">
                <button
                  disabled={loadingMercadoPago}
                  onClick={handlesubmit}
                  className={`relative mb-8 mt-4 w-full rounded-md ${
                    !loadingMercadoPago ? "bg-black" : "bg-blue-gray-300"
                  }   cursor-pointer px-6 py-3 font-medium text-white`}
                >
                  Realizar pedido
                </button>
              </div>
            ) : (
              <button
                disabled={true}
                className="mb-8 mt-4 w-full  cursor-pointer rounded-md bg-white px-6 py-3 font-medium text-black"
              >
                Realizar pedido
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
