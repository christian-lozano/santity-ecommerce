import "@/styles/globals.css"
import { Metadata } from "next"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { groq } from "next-sanity"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { shimmer, toBase64 } from "@/lib/image"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/Header/site-header"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const products = await client.fetch(groq`*[_type == "header"]`)
  console.log(products[0].logo)

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <div></div>
              <SiteHeader></SiteHeader>
              <Providers>{children}</Providers>

              <SiteBlob></SiteBlob>
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
