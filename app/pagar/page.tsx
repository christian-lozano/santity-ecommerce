import React from "react"

import { SiteHeader } from "@/components/Header/site-header"
import PaginaPagar from "@/components/pagar/pagar"
import "@/styles/globals.css"
export default function page() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader />
      <PaginaPagar></PaginaPagar>
    </div>
  )
}
