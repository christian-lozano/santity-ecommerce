import React from "react"

import { SiteHeader } from "@/components/Header/site-header"
import PaginaPagar from "@/components/pagar/pagar"
import "@/styles/globals.css"
import Footer from "@/components/Footer/Footer"
export default function page() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader />
      <PaginaPagar></PaginaPagar>
      <Footer />

    </div>
  )
}
