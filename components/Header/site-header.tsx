"use client"

import { useState } from "react"

import { Logo } from "@/components/logo/logo"


import { NavNavigation } from "./Nav/nav-navigation"
import NavSearch from "./Nav/nav-search"
import NavTop from "./Nav/nav-top"

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-40   w-full items-center justify-around  border-b border-slate-700/20 bg-background xl:block">
      <NavTop>
        <NavSearch />
      </NavTop>
      <div className=" max-w-6/6 mx-auto hidden   h-16 items-center justify-around  space-x-4 px-6 sm:space-x-0 xl:flex">
        <NavNavigation>
          <Logo />
        </NavNavigation>
      </div>

  
    </header>
  )
}
