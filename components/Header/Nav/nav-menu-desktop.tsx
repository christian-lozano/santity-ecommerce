import { Dispatch, SetStateAction, memo, useEffect, useState } from "react"
import Link from "next/link"

interface IProps {
  setAndler: Dispatch<SetStateAction<boolean>>
  handleHover: (Boolean: Number) => void
  activeHoverNavDesktop: Number
  menuSubmenu: {
    map(arg0: (menulist: any, index: any) => JSX.Element): React.ReactNode
    img: string
  }
  dataHeader: {
    menuSubmenu: [{ id: string; titulo: string; url: string }]
  }
}

export default function NavMenuDesktop({
  handleHover,
  setAndler,
  activeHoverNavDesktop,
  dataHeader,
}: IProps) {
  return (
    <div className="bg-blue-white w-full">
      {/* /*---------------------------------*/
      /* Desktop menu and Hover*/
      /* ---------------------------------*/}
      <div className="hidden xl:block">
        <nav>
          <div>
            <div>
              <div>
                <div className="flex items-center justify-around ">
                  {/* logo nav */}

                  <div className=" h-[7rem] lg:block ">
                    <div className="mb-6 mt-4 grid h-full grid-flow-col gap-x-10 p-0 lg:my-0 lg:flex-row lg:px-1">
                      {dataHeader.menuSubmenu.map((el, index) => (
                        <Link
                          href={`${el.url}`}
                          className="flex  h-full items-center justify-center "
                          key={el.id}
                          onClick={() => setAndler(false)}
                          onMouseEnter={() => handleHover(index)}
                          onMouseLeave={() => setAndler(false)}
                        >
                          <div className=" focus:text-brand-900 sm:focus:shadow-outline  inline-flex  items-center  justify-between rounded-md px-2 transition-all duration-500 focus:outline-none">
                            <span
                              className={`laptop:text-lg shrink-0  uppercase  xl:text-sm ${
                                index === 6 &&
                                el.titulo === "OUTLET" &&
                                "border-b-2 border-red-500 text-red-500"
                              } ${
                                el.titulo === "TIENDA" && " font-extrabold "
                              } ${
                                activeHoverNavDesktop === index &&
                                index < 6 &&
                                `border-b-2 border-white`
                              }  2xl:text-base `}
                            >
                              {el.titulo}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
