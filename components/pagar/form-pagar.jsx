"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Option, Select, Spinner } from "@material-tailwind/react"
import { useCart } from "react-use-cart"

import { Input } from "../ui/input"

const formData = {
  title: "Detalles de Pago",
  subtitle: "Complete su pedido proporcionando sus datos de pago.",
  inputs: [
    {
      label: "Nombre",
      name: "nombre",
      placeholder: "Nombre",
      type: "text",
    },
    {
      label: "Apellido",
      name: "apellido",
      placeholder: "Apellido",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Email",
      type: "email",
    },
    {
      label: "Documento de identidad",
      name: "documento",
      placeholder: "Documento de identidad",
      type: "text",
    },
    {
      label: "Teléfono",
      name: "telefono",
      placeholder: "Teléfono",
      type: "tel",
    },
    {
      label: "Dirección",
      name: "direccion",
      placeholder: "Dirección",
      type: "text",
    },
    {
      label: "Información Adicional",
      name: "adicional",
      placeholder: "Información Adicional",
      type: "text",
    },
  ],
}
function Loading({ disableLoadAddProduct = true }) {
  return (
    <Spinner
      // color="black"
      className={` absolute left-7 top-3  h-7 w-7  ${
        !disableLoadAddProduct ? "hidden" : "block"
      }`}
      onResize={undefined}
      onResizeCapture={undefined}
    />
  )
}
export default function FormPagar() {
  const router = useRouter()

  const [allValues, setAllValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    documento: "",
    telefono: "",
    direccion: "",
    comprobante: "Boleta",
    ruc: "",
    provincia: "",
    distrito: "",
    adicional: "",
    checkTerminos: false,
  })

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
  }
  const { items, cartTotal } = useCart()
  const [domLoaded, setDomLoaded] = useState(false)
  const [validate, setValidate] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const handlesubmit = async () => {
    setValidate(false)
    setLoading(true)
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
        distrito: allValues.distrito,
        adicional: allValues.adicional,
        provincia: allValues.provincia,

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

      if (res.status === 200) {
        router.push(data.url)
        setLoading(false)

        // setLoadingMercadoPago(false)
        // router.refresh()
        //test
        // alert(data.msg)
      }
      if (res.status === 401) {
        alert("Ingresa un Email Valido")
        // setLoadingMercadoPago(false)

        // router.refresh()
        // alert(data.msg)
      }
      // console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (
      allValues.nombre.length >= 1 &&
      allValues.apellido.length >= 1 &&
      allValues.email.length >= 5 &&
      allValues.documento.length >= 1 &&
      allValues.telefono.length >= 1 &&
      allValues.comprobante.length >= 2 &&
      allValues.direccion.length >= 3 &&
      allValues.provincia.length >= 2 &&
      allValues.distrito.length >= 1 &&
      allValues.adicional.length >= 1 &&
      allValues.checkTerminos &&
      items.length > 0
    ) {
      if (allValues.comprobante === "Factura" && allValues.ruc.length === 0) {
        setValidate(false)
      } else {
        setValidate(true)
      }
    } else {
      setValidate(false)
    }
  }, [allValues])
  return (
    <div className="mt-10  px-4 pt-8  lg:mt-0">
      <p className="text-xl font-medium">{formData.title}</p>
      <p className="text-gray-400">{formData.subtitle}</p>
      <div>
        <div className=" grid grid-cols-2 gap-4">
          {formData.inputs.map((el) => (
            <div>
              <label
                htmlFor="card-no"
                className="mb-2 mt-4 block text-sm font-medium"
              >
                {el.label}
              </label>
              <div className="flex justify-between">
                <div className="relative w-full shrink-0 px-5">
                  <Input
                    type={el.tipo}
                    name={el.name}
                    placeholder={el.placeholder}
                    onChange={(e) => changeHandler(e)}
                  />
                  <span className="validationFormRed ml-1 text-sm">
                    {allValues[`${el.name}`].length === 0 &&
                      `la propiedad ${el.name} es necesaria`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* boleta factura */}
        <div className="flex justify-center pt-5">
          <div className="flex gap-10">
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="react"
              >
                <input
                  onChange={(e) => changeHandler(e)}
                  name="comprobante"
                  checked={allValues.comprobante === "Boleta"}
                  value="Boleta"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="react"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="react"
              >
                Boleta
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="react"
              >
                <input
                  onChange={(e) => changeHandler(e)}
                  name="comprobante"
                  checked={allValues.comprobante === "Factura"}
                  value="Factura"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="factura"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
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
                <span className="validationFormRed ml-1 text-sm">
                  {allValues.ruc === "null" ||
                    (allValues.ruc.length === 0 &&
                      `la propiedad Ruc es necesaria`)}
                </span>
              </div>
            </div>
          </>
        )}
        {/* distrito */}
        <div className="flex flex-col sm:flex-row">
          <label
            htmlFor="card-holder"
            className="mb-2 mt-4 block w-full text-sm  font-medium "
          >
            <Select
              onChange={(e) => setAllValues({ ...allValues, distrito: e })}
              nonce={undefined}
              name="distrito"
              label="Distrito"
              className={`border  ${allValues.distrito.length === 0 && " "}`}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <Option value="Ancon">Ancon</Option>
              <Option value="Ate">Ate</Option>
              <Option value="Barranco">Barranco</Option>
              <Option value="Breña">Breña</Option>
              <Option value="Carabayllo">Carabayllo</Option>
              <Option value="Chaclacayo">Chaclacayo</Option>
              <Option value="Chorrillos">Chorrillos</Option>
              <Option value="Cieneguilla">Cieneguilla</Option>
              <Option value="Comas">Comas</Option>
              <Option value="El agustino">El Agustino</Option>
              <Option value="Independencia">Independencia</Option>
              <Option value="Jesus maria">Jesus Maria</Option>
              <Option value="La molina">La Molina</Option>
              <Option value="La victoria">La Victoria</Option>
              <Option value="Lima">Lima</Option>
              <Option value="Lince">Lince</Option>
              <Option value="Los olivos">Los Olivos</Option>
              <Option value="Lurigancho">Lurigancho</Option>
              <Option value="Lurin">Lurin</Option>
              <Option value="Magdalena del mar">Magdalena del Mar</Option>
              <Option value="Miraflores">Miraflores</Option>
              <Option value="Pachacamac">Pachacamac</Option>
              <Option value="Pucusana">Pucusana</Option>
              <Option value="Pueblo libre">Pueblo Libre</Option>
              <Option value="Puente piedra">Puente Piedra</Option>
              <Option value="Punta hermosa">Punta Hermosa</Option>
              <Option value="Punta Negra">Punta Negra</Option>
              <Option value="Rimac">Rimac</Option>
              <Option value="San Bartolo">San Bartolo</Option>
              <Option value="San Borja">San Borja</Option>
              <Option value="San Isidro">San Isidro</Option>
              <Option value="San Juan de Lurigancho">
                San Juan de Lurigancho
              </Option>
              <Option value="San Juan de Miraflores">
                San Juan de Miraflores
              </Option>
              <Option value="San Luis">San Luis</Option>
              <Option value="San Martin de Porres">San martin de porres</Option>
              <Option value="San Miguel">San Miguel</Option>
              <Option value="Santa Anita">Santa Anita</Option>
              <Option value="Santa Maria del Mar">Santa Maria del Mar</Option>
              <Option value="Santa rosa">Santa Rosa</Option>
              <Option value="Santiago de Surco">Santiago de Surco</Option>
              <Option value="Surquillo">Surquillo</Option>
              <Option value="Villa el Salvador">Villa el Salvador</Option>
              <Option value="Villa Maria del Triunfo">
                Villa Maria del Triunfo
              </Option>
            </Select>
            <span className="validationFormRed ml-1 text-sm">
              {allValues.distrito.length === 0 &&
                `la propiedad Distrito es necesaria`}
            </span>
          </label>
        </div>

        {/* provincia */}
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
            <span className="validationFormRed ml-1 text-sm">
              {allValues.provincia.length === 0 &&
                `la propiedad Provincia es necesaria`}
            </span>
          </label>
        </div>

        {/* <!-- Total --> */}
        {domLoaded && (
          <div className="border-b-2 pb-2">
            <div className="mt-6 border-y py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium ">Subtotal</p>
                <p className="font-semibold ">S/{cartTotal.toFixed()}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between ">
              <p className="text-sm font-medium ">Total</p>
              <p className="text-2xl font-semibold ">S/{cartTotal.toFixed()}</p>
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
              className={`before:content[''] ${
                !allValues.checkTerminos && "border-red-500"
              }  peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black hover:before:opacity-10`}
              id="checkbox-8"
              onChange={(e) =>
                setAllValues({ ...allValues, checkTerminos: e.target.checked })
              }
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

      {domLoaded && (
        <button
          disabled={!validate}
          onClick={handlesubmit}
          className={`mb-8 mt-4 w-full  cursor-pointer rounded-md ${
            !validate ? "bg-gray-500 text-red-500 " : "bg-white text-black"
          } px-6 py-3 font-medium  `}
        >
          {items.length === 0
            ? "No tienes Productos en el Carrito"
            : " Realizar pedido"}
          <Loading disableLoadAddProduct={loading} />
        </button>
      )}
    </div>
  )
}
