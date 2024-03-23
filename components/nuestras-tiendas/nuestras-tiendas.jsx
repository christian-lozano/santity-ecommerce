"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react"

import { Button } from "@/components/ui/button"

const dataNuestrasEmpresas = [
  {
    img: "https://lh5.googleusercontent.com/p/AF1QipNc0m8OUrP-oiueHkxwr2q8Rc2Hstqf9rM7uQl5=s450-k-no",
    title: "Miguel Graú ",
    subtitle: "Fritz Sport, Av. Miguel Grau 231, Lima 15001",
    dataHorarios: [
      " Lunes de 09:00 am a 09:00 pm",
      " Martes de 09:00 am a 09:00 pm",
      " Miércoles de 09:00 am a 09:00 pm",
      " Jueves de 09:00 am a 09:00 pm",
      " Viernes de 09:00 am a 09:00 pm",
      " Sábado de 09:00 am a 09:00 pm",
      " Domingo de 09:00 am a 09:00 pm",
    ],
    ubicacion: "https://maps.app.goo.gl/h54ryBi9SqHQkQUW6",
  },
  {
    img: "https://lh5.googleusercontent.com/p/AF1QipMs6zTdg1C_xoBmP2gsXzpMT18dCkjEitH9EIfM=s450-k-no",
    title: "Tumbes ",
    subtitle: "Av. República del Perú 373, 24101",
    dataHorarios: [
      " Lunes de 09:00 am a 07:00 pm",
      " Martes de 09:00 am a 07:00 pm",
      " Miércoles de 09:00 am a 07:00 pm",
      " Jueves de 09:00 am a 07:00 pm",
      " Viernes de 09:00 am a 07:00 pm",
      " Sábado de 09:00 am a 07:00 pm",
      " Domingo de 09:00 am a 07:00 pm",
    ],
    ubicacion: "https://maps.app.goo.gl/iUxXwFKqF2BAEGhC7",
  },
]
export default function NuestrasTiendas() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div className=" pt-14 md:pt-16">
      <section className="blog body-font mb-20 text-black">
        <div className="container mx-auto  px-5">
          <div className="flex h-2/6 items-center">
            <section className="w-full bg-cover bg-center ">
              <div className="relative flex h-full w-full items-center justify-center ">
                <div className="container absolute mx-auto text-center text-white">
                  <h1 className="mb-6 text-3xl font-bold sm:text-3xl xl:text-5xl">
                    {" "}
                    Nuestras Tiendas
                  </h1>
                </div>

                <video
                  muted={true}
                  webkit-playsinline={true}
                  playsInline={true}
                  preload="auto"
                  autoPlay={true}
                  loop={true}
                  className="laptop:h-full hidden  w-[100vw] xl:block"
                >
                  <source
                    src="https://res.cloudinary.com/dmtq82guq/video/upload/v1705420976/ecommerce-fritz-sport/slider-home/fw23_rivalry_launch_hp_mh_d_2c98ca2cf4_1_t5xs5v.mp4"
                    type="video/mp4"
                  />
                  <track
                    src="captions_en.vtt"
                    kind="captions"
                    srcLang="en"
                    label="english_captions"
                  />
                  <track
                    src="captions_es.vtt"
                    kind="captions"
                    srcLang="es"
                    label="spanish_captions"
                  />
                </video>

                <video
                  muted={true}
                  webkit-playsinline={true}
                  playsInline={true}
                  preload="auto"
                  autoPlay={true}
                  loop={true}
                  className="h-full w-[100vw]  xl:hidden"
                >
                  <source
                    src="https://res.cloudinary.com/dmtq82guq/video/upload/v1705428698/ecommerce-fritz-sport/slider-home/empresaMobil_r9inqz.mp4"
                    type="video/mp4"
                  />
                  <track
                    src="captions_en.vtt"
                    kind="captions"
                    srcLang="en"
                    label="english_captions"
                  />
                  <track
                    src="captions_es.vtt"
                    kind="captions"
                    srcLang="es"
                    label="spanish_captions"
                  />
                </video>
              </div>
            </section>
          </div>
          {/*  */}
          <h5 className=" text-center text-xl font-semibold text-black dark:text-white sm:mt-16 sm:text-xl xl:mb-32 xl:mt-20 xl:text-3xl">
            Conoce la Ubicación y <br /> Nuestros Horarios de Atención
          </h5>
          <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap px-1 sm:-m-4 sm:px-5">
            {/* Tumbes */}
            {dataNuestrasEmpresas.map((el) => (
              <div className="mx-auto mb-6 mt-10 flex max-w-sm flex-col items-center justify-center p-0 md:mb-0 md:w-1/3">
                <div className="relative flex max-w-[24rem] flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                      src="https://res.cloudinary.com/dmtq82guq/image/upload/v1705423883/fritz_sport/ecommerce/nuestras_tiendas/tienda/miguel_grau/nilhpzfkoqye7onkr1zp.jpg"
                      alt="ui/ux review check"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased dark:text-white">
                      {el.title}
                    </h4>
                    <p className="mt-3 block text-center  font-sans  font-normal leading-relaxed text-black antialiased dark:text-white">
                      {el.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div className="flex w-full justify-around">
                      <button
                        className=" bg-black p-5 py-2 capitalize text-white dark:bg-white dark:text-black"
                        onClick={handleOpen}
                      >
                        Ver Horarios
                      </button>
                      <Link
                        href={el.ubicacion}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className=" bg-black p-5 py-2 capitalize text-white dark:bg-white dark:text-black">
                          Ver Ubicación
                        </button>
                      </Link>

                      <Dialog
                        className="relative"
                        open={open}
                        handler={handleOpen}
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        <Button
                          className="absolute right-1 top-1 cursor-pointer"
                          onClick={handleOpen}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </Button>
                        <DialogHeader
                          className="flex  justify-center text-center"
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <div>Horarios de Atención</div>
                        </DialogHeader>

                        <DialogBody
                          className=""
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          {" "}
                          <div className="flex w-full flex-col  items-center justify-center">
                            {el.dataHorarios.map((el) => (
                              <div className="my-2 w-full  border-b-2 text-center">
                                {el}
                              </div>
                            ))}
                          </div>
                        </DialogBody>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Miguel Graú */}
          </div>
        </div>
      </section>
    </div>
  )
}
