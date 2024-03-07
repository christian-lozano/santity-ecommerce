import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function NavLogo() {
  return (
    <div className=" mr-8 flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-20 w-20 fill-black dark:fill-white" />
      </Link>
    </div>
  )
}
