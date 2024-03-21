import { SiteHeader } from "@/components/Header/site-header"
import NuestrasTiendas from "@/components/nuestras-tiendas/nuestras-tiendas"
import "@/styles/globals.css"
export default function page() {
  return (
    <div>
      <SiteHeader />
      <NuestrasTiendas />
    </div>
  )
}
