"use client"

import { Logo } from "@/components/logo/logo"

import { Banner } from "../banner/banner"
import { NavNavigation } from "./Nav/nav-navigation"
import NavSearch from "./Nav/nav-search"
import NavTop from "./Nav/nav-top"

export function SiteHeader() {
  return (
    <header className="border-slate-700/20 sticky top-0   z-40 w-full items-center  justify-around border-b bg-background xl:block">
      <Banner className="flex w-full justify-center  bg-black text-base text-white dark:bg-white  dark:text-black">
        30% de Descuento! Solo por este mes*
      </Banner>
      <div className="xl:hidden">
        <NavTop>
          <NavSearch />
        </NavTop>
      </div>
      <div className=" max-w-6/6 mx-auto hidden  h-full items-center justify-around space-x-4  px-6 sm:space-x-0 xl:flex xl:h-full">
        <NavNavigation>
          <Logo />
        </NavNavigation>
      </div>
    </header>
  )
}
