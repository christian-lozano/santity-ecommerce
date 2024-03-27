import { Metadata } from "next"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { Analytics } from "@vercel/analytics/react"
import { groq } from "next-sanity"
import { CartProvider } from "react-use-cart"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { shimmer, toBase64 } from "@/lib/image"
import { connectMongoDB } from "@/lib/mongodb"
import { cn } from "@/lib/utils"
import { SheetFooter } from "@/components/ui/sheet"
import Footer from "@/components/Footer/Footer"
import { SiteHeader } from "@/components/Header/site-header"
import IconWhatapp from "@/components/icon-whatsapp/icon-whatapp"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"

export const metadata: Metadata = {}

interface RootLayoutProps {
  children: React.ReactNode
}
connectMongoDB()
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Providers>{children}</Providers>
              <SiteBlob />
            </div>
          </Providers>
          <IconWhatapp></IconWhatapp>
        </body>
      </html>
    </>
  )
}
