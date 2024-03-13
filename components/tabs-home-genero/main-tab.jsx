"use client"

import { useState } from "react"

import Cabecera from "./cabecera"
import { ProductGridTab } from "./product-grid-tab"

export default function MainTab({ dataCabeceraTab, dataProductTab }) {
  const [dataTab, setDataTab] = useState(dataProductTab.productosAll)
  const handler = (value) => {
    switch (value) {
      case "Hombre":
        setDataTab(dataProductTab.productosHombre)
        break
      case "Mujer":
        setDataTab(dataProductTab.productosMujer)
        break
      case "Niños":
        setDataTab(dataProductTab.productosNinos)
        break
      case "All":
        setDataTab(dataProductTab.productosAll)
        break
    }
  }
  console.log(dataTab)
  return (
    <div className="mt-20  flex h-full w-full justify-center">
      <div className="flex  flex-col ">
        <Cabecera dataCabeceraTab={dataCabeceraTab} handler={handler} />
        <ProductGridTab products={dataTab}></ProductGridTab>
      </div>
    </div>
  )
}
