import "@/styles/globals.css"
import Footer from "@/components/Footer/Footer"
import { SiteHeader } from "@/components/Header/site-header"
import PaginaEmprende from "@/components/emprende/emprende"

export default function page() {
  return (
    <>
      <SiteHeader />
      <PaginaEmprende />

      <Footer />
    </>
  )
}
