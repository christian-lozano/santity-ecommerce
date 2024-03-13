"use client"

import React from "react"

import Appbtn from "../carousel-home/Appbtn/Appbtn"

export default function HombreMujer() {
  return (
    <>
      <div className="mt-20">
        <div className=" h-full w-full  pb-20   xl:flex xl:gap-x-5">
          <div className="relative mt-3 flex h-full w-full justify-center ">
            <img
              src="https://www.reef.com/cdn/shop/files/HP_Main_SP24_WHero_Desktop.webp?v=1707344695&width=720"
              alt=""
              className="w-full "
            />

            <div className="opacidad-container  absolute flex    h-full w-full items-end justify-center ">
              <div className="absolute bottom-0 flex w-5/6 items-center justify-between  ">
                <h5 className="text-2xl font-extrabold text-white xl:text-5xl">
                  Mujer
                </h5>
                <Appbtn
                  text={"Comprar"}
                  icon="fal fa-chevron-right"
                  className="reverse"
                />
              </div>
            </div>
          </div>
          <div className=" relative mt-3 flex h-full w-full justify-center">
            <img
              src="https://www.reef.com/cdn/shop/files/HP_Main_SP24_MHero_Desktop_2x_aabdc52d-4fb1-49a8-ab21-3512731a7ec6.png?v=1707316134&width=720"
              alt=""
              className="w-full "
            />

            <div className="opacidad-container  absolute flex    h-full w-full items-end justify-center ">
              <div className="absolute bottom-0 flex w-5/6 items-center justify-between  ">
                <h5 className=" text-2xl font-extrabold text-white xl:text-5xl">
                  Hombre
                </h5>
                <Appbtn
                  text={"Comprar"}
                  icon="fal fa-chevron-right"
                  className="reverse"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
