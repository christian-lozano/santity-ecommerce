"use client"

import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react"

export default function PaginaEmprende() {
  const dataEmprende = {
    imgPortadaDesktop:
      "https://res.cloudinary.com/dmtq82guq/image/upload/v1711214297/fritz_sport/portada-fritz_c10l0o.jpg",
    imgPortadaMobil:
      "https://res.cloudinary.com/da868wsih/image/upload/v1701370311/fritz-ecommerce/emprende/celular-pt-fritz_z6fpcs.jpg",

    beneficiosTitulo: "Nuestros Beneficios",
    beneficiosGrid: [
      {
        titulo: "- Gana descuentos de hasta 35% en tus compras",
        img: "https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/a8092058-5eae-4d09-9df9-4f066ee0a966___ec5fe3c96a0dec59974be71a435545f2.png",
      },
      {
        titulo: "- Productos seleccionados",
        img: "https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/a88c40df-d351-486a-b4ed-f4e4b8057126___5208e3b26b5cc34a3de320369aae7fb2.png",
      },
      {
        titulo:
          "- Construye tu red de afiliados y Gana Bonos por Afiliación.  ",
        img: "https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/454b1174-e673-4553-94e1-52fc112c15be___155617834f474132c7b99430e289c9b0.png",
      },
      {
        titulo: "- Catálogos personalizados ",
        img: "https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/0b7b64c3-d16b-46f3-8020-3bfafbd444c0___53675cfa8bfb06aae8dc4798b959b067.png",
      },
      {
        titulo: "- Participa en sorteos y gana muchos premios.",
        img: "https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/23fefe16-7dba-4b6b-a6b6-3c0a489d170b___a463340b403ca93a3c4803137ffd84e6.png",
      },
    ],

    emprendedores: {
      img: "https://res.cloudinary.com/dmtq82guq/image/upload/v1711390389/fritz_sport/web_f619vq_hk4lbz.jpg",
      beneficios: [
        {
          id: "a123512s",
          title: " - Gana descuentos de hasta 35% en tus compras.",
        },
        { id: "a245512s", title: "- Productos seleccionado" },
        {
          id: "a532112s",
          title:
            " - Construye tu red de afiliados y Gana Bonos por Afiliación.",
        },
        { id: "a51212s", title: "- Catálogos personalizados" },
        {
          id: "a55212s",
          title: "- Participa en sorteos y gana muchos premios.",
        },
      ],
      requisitos: [
  
        {
          id: "a24525512s",
          title: " Cualquier cliente compras mayores a 3 productos",
        },
        {
          id: "a532121512s",
          title: " - Productos seleccionado",
        },
        { id: "a51123212s", title: "- Catálogos personalizados" },
        {
          id: "a551231212s",
          title: "- Tener espíritu emprendedor y voluntad de progreso",
        },
      ],
    },

    mayoristas: {
      img: "https://res.cloudinary.com/dmtq82guq/image/upload/v1711214284/fritz_sport/senor-dos_pjdkhp.jpg",
      beneficios: [
        {
          id: "a123512s",
          title: " - Gana descuentos de mas de 35% en tus compras.",
        },
        { id: "a245512s", title: "- Sin limite de compras" },
        {
          id: "a532112s",
          title: " - Apoyo publicitario para hacer crecer tu red",
        },
        { id: "a51212s", title: "- Guía de tallas y catálogos" },
        {
          id: "a55212s",
          title: "- Participa en sorteos y gana muchos premios.",
        },
      ],
      requisitos: [
        {
          id: "a121233512s",
          title: " - Cualquier cliente compras mayores a 3 productos",
        },
        {
          id: "a24525512s",
          title: " - Tener espíritu emprendedor y voluntad de progreso",
        },
      ],
    },
    pasos: {
      pasosTitle: "Afiliare en 3 simples pasos",
      img: "https://res.cloudinary.com/dmtq82guq/image/upload/v1711214294/fritz_sport/fritz_pngv7m.jpg",
      pasosList: [
        {
          title: "1. Contacta a uno de nuestros asesores",
          subtitle: "Presiona el Botón de: Contactar a un Asesor",
        },
        {
          title: "2. Solicita tu catalogo",
          subtitle: "Realiza tu primera cotización por WhatsApp",
        },
        {
          title: "¡Gana!",
          subtitle: "Comparte tus catálogos y disfruta de tus ganancias.",
        },
      ],
    },
  }

  return (
    <>
      <div className=" pt-14 md:pt-16">
        <div className="">
          {}
          <img
            src={dataEmprende.imgPortadaDesktop}
            alt=""
            className="hidden md:block"
          />

          <img
            src={dataEmprende.imgPortadaMobil}
            alt=""
            className="block md:hidden"
          />
        </div>

        <div className="">
          <div className=" mx-auto h-full ">
            <div className="draggable h-full w-full">
              <h3 className="pt-20  text-center text-3xl">
                {dataEmprende.beneficiosTitulo}
              </h3>
              <div className=" mx-auto flex flex-col items-center gap-16 pt-20">
                <div className=" block w-full gap-x-5 pb-20 xl:flex ">
                  {/* Beneficios */}
                  {dataEmprende.beneficiosGrid.map((el) => (
                    <div className="shadow-main flex cursor-pointer flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10 dark:bg-black">
                      <span>
                        <img src={el.img} alt="" className="" width={200} />
                      </span>
                      <p className="laptop:text-xl text-center font-extrabold text-black dark:text-white 2xl:text-lg">
                        {el.titulo}
                      </p>
                    </div>
                  ))}
                </div>
                {/* 
              /*---------------------------------*/
                /* ¡Inicia a tu manera y gana! page Emprende*/
                /* ---------------------------------*/}

                {/* ------------------------------ */}
                <Tabs value="Emprendedores" className="">
                  <h4 className="pb-20   text-center text-2xl">
                    ¡Inicia a tu manera y gana!
                  </h4>
                  <TabsHeader
                    className="bg-transparent"
                    indicatorProps={{
                      className: " shadow-none !text-white",
                    }}
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    <Tab
                      key="Emprendedores"
                      value="Emprendedores"
                      className="mb-5 text-lg font-bold"
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      Emprendedores
                    </Tab>
                    <Tab
                      key="Mayoristas"
                      value="Mayoristas"
                      className="mb-5 text-lg font-bold"
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      Mayoristas
                    </Tab>
                  </TabsHeader>

                  <TabsBody
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    <TabPanel key={"Emprendedor"} value={"Emprendedores"}>
                      <div className="block w-full items-center  xl:flex xl:flex-col">
                        <div className="w-full">
                          {}
                          <img src={dataEmprende.emprendedores.img} alt="" />
                        </div>

                        <div className="flex w-full flex-col items-center  xl:px-5">
                          <div>
                            <div className="my-7  text-center text-3xl font-bold  text-black dark:text-white">
                              Beneficios
                            </div>

                            <ul className="flex flex-col ">
                              {dataEmprende.emprendedores.beneficios.map(
                                (el) => (
                                  <li className="mt-3 font-semibold  text-black dark:text-white">
                                    {el.title}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div className="mt-10">
                            {/*  */}
                            <div className="  text-center text-3xl font-bold  text-black dark:text-white">
                              Requisitos
                            </div>
                            <ul className="flex flex-col ">
                              {dataEmprende.emprendedores.requisitos.map(
                                (el) => (
                                  <li className="mt-3 font-semibold  text-black dark:text-white">
                                    {el.title}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel key={"Mayorista"} value={"Mayoristas"}>
                      <div className="block w-full items-center  xl:flex xl:flex-col">
                        <div className="w-full">
                          {}
                          <img src={dataEmprende.mayoristas.img} alt="" />
                        </div>

                        <div className="flex w-full flex-col items-center  xl:px-5">
                          <div>
                            <div className="my-7  text-center text-3xl font-bold  text-black dark:text-white">
                              Beneficios
                            </div>

                            <ul className="flex flex-col ">
                              {dataEmprende.mayoristas.beneficios.map((el) => (
                                <li className="mt-3 font-semibold  text-black dark:text-white">
                                  {el.title}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-10">
                            {/*  */}

                            <div className="  text-center text-3xl font-bold  text-black dark:text-white">
                              Requisitos
                            </div>
                            <ul className="flex flex-col ">
                              {dataEmprende.mayoristas.requisitos.map((el) => (
                                <li className="mt-3 font-semibold  text-black dark:text-white">
                                  {el.title}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </TabsBody>

                  {/* ---------------------------------------------------------------- */}

                  <div className="flex flex-col items-center justify-center pt-20 ">
                    <h5 className="pb-20  text-2xl">
                      {dataEmprende.pasos.pasosTitle}
                    </h5>

                    <div className="w-full justify-around xl:flex ">
                      <img src={dataEmprende.pasos.img} alt="" width={600} />

                      <div className="flex flex-col items-start justify-center px-10">
                        {dataEmprende.pasos.pasosList.map((el) => (
                          <div className=" mt-10 flex flex-col">
                            <p className="my-3 text-lg font-bold">{el.title}</p>
                            <p className="text-start text-base xl:text-start ">
                              {el.subtitle}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ---------------------------------------------------------------- */}
                  <div className="flex w-full  justify-center pt-20 ">
                    <div className="flex flex-col pb-20">
                      <div>
                        <h6 className="text-center text-3xl">
                          ¡Empieza ahora!
                        </h6>
                      </div>
                      <div className="mt-10 flex h-3/5 w-full justify-between ">
                        <a
                          className="mr-5"
                          href="https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            className="text-base"
                            nonce={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                          >
                            Regístrate por WhatsApp
                          </Button>
                        </a>

                        <a
                          href="https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            className="mt-5 text-base md:mt-0 lg:ml-5"
                            nonce={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                          >
                            Contactar a un Asesor
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
