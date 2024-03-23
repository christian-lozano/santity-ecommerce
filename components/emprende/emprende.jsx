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
  return (
    <>
      <div className=" pt-14 md:pt-16">
        <div className="">
          <img
            src="https://res.cloudinary.com/dmtq82guq/image/upload/v1711214297/fritz_sport/portada-fritz_c10l0o.jpg"
            alt=""
            className="hidden md:block"
          />

          <img
            src="https://res.cloudinary.com/da868wsih/image/upload/v1701370311/fritz-ecommerce/emprende/celular-pt-fritz_z6fpcs.jpg"
            alt=""
            className="block md:hidden"
          />
        </div>

        <div className="">
          <div className="container mx-auto flex flex-col ">
            <div className="draggable w-full">
              <h3 className="mt-20 text-center">Nuestros Beneficios</h3>
              <div className="container mx-auto mt-20 flex flex-col items-center gap-16">
                <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-5">
                  {/* Beneficios */}

                  <div className="shadow-main flex cursor-pointer flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10">
                    <span>
                      <img src="" alt="" className="w-32" />
                    </span>
                    <p className="laptop:text-xl text-dark-grey-900 text-center font-extrabold 2xl:text-lg">
                      test
                    </p>
                  </div>
                </div>
                {/* 
              /*---------------------------------*/
                /* ¡Inicia a tu manera y gana! page Emprende*/
                /* ---------------------------------*/}

                {/* ------------------------------ */}
                <Tabs value="Emprendedores" className="">
                  <h4 className="py-7   text-center text-2xl">
                    ¡Inicia a tu manera y gana!
                  </h4>
                  <TabsHeader
                    className="bg-transparent"
                    indicatorProps={{
                      className: " shadow-none !text-gray-900",
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
                    <TabPanel
                      key={"Emprendedor"}
                      value={"Emprendedores"}
                      className="text-black"
                    >
                      <div className="laptop:flex-row flex flex-col xl:flex-row">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dmtq82guq/image/upload/v1711214284/fritz_sport/senor-dos_pjdkhp.jpg"
                            alt=""
                          />
                        </div>

                        <div className="xl:px-5">
                          <div className="my-7 text-center text-3xl font-bold">
                            Beneficios
                          </div>
                          <ul className="flex flex-col">
                            <li className="m-3 font-semibold">list</li>
                          </ul>

                          <div className="xl:px-5">
                            <div className="my-7 text-center text-3xl font-bold">
                              Requisitos
                            </div>
                            <ul className="flex flex-col">
                              <li className="m-3 font-semibold">list</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel
                      key={"Mayoristas"}
                      value={"Mayoristas"}
                      className=""
                    >
                      <div className="laptop:flex-row flex flex-col xl:flex-row">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dmtq82guq/image/upload/v1711214284/fritz_sport/senor-dos_pjdkhp.jpg"
                            alt=""
                          />
                        </div>

                        <div className="xl:px-5">
                          <div className="my-7 text-center text-3xl font-bold">
                            Beneficios
                          </div>
                          <ul className="flex flex-col">
                            <li className="m-3 font-semibold">list</li>
                          </ul>

                          <div className="xl:px-5">
                            <div className="my-7 text-center text-3xl font-bold">
                              Requisitos
                            </div>
                            <ul className="flex flex-col">
                              <li className="m-3 font-semibold">list</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </TabsBody>

                  {/* ---------------------------------------------------------------- */}

                  <div className="mt-10 flex flex-col items-center justify-center ">
                    <h5 className="my-10  text-2xl">
                      Afíliate en 3 simples pasos
                    </h5>

                    <div className="w-5/6 flex-col md:flex xl:flex-row">
                      <img
                        className="md:w-5/12 xl:w-6/12"
                        src="https://res.cloudinary.com/dmtq82guq/image/upload/v1711214294/fritz_sport/fritz_pngv7m.jpg"
                        alt=""
                      />

                      <div className="flex flex-col items-start justify-center px-10">
                        <div className=" mt-3 flex flex-col">
                          <p className="my-3 text-lg font-bold">test</p>
                          <p className="text-start text-base xl:text-start ">
                            test
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------------------------------------------------------------- */}
                  <div className="my-20 flex  w-full justify-center ">
                    <div className="flex flex-col">
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
