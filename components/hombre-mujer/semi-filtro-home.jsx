"use client"

import React from "react"

import Appbtn from "../carousel-home/Appbtn/Appbtn"

export default function SemiFiltroHome({ dataSemifiltroHome }) {
  return (
    <div className=" h-full w-full items-start justify-center gap-x-5 xl:flex ">
      <picture className=" h-full  ">
        <img
          src={dataSemifiltroHome.generoImage}
          alt=""
          width={600}
          height={600}
        />
      </picture>
      <div className="flex h-full  items-center justify-center gap-1 xl:items-start xl:gap-x-8  ">
        {dataSemifiltroHome.categorias.map((el) => (
          <div className="mt-3 flex h-full w-full flex-col justify-start xl:mt-0 ">
            <img src={el.img} alt="" width={350} height={350} className="" />
            <div className="flex flex-col  justify-center xl:items-center">
              <h3 className="text-bold py-2 text-center  font-extrabold  capitalize xl:text-2xl">
                {el.title}
              </h3>

              <Appbtn
                text={el.btnText}
                icon="fal fa-chevron-right"
                className="reverse "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
