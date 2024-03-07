import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function NavLogo() {
  return (
    <div className=" mr-8 flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-14 w-14 fill-black dark:fill-white xl:h-20 xl:w-20" />
      </Link>
    </div>
  )
}
