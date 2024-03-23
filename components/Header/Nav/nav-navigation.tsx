import Link from "next/link"

interface Props {
  children: JSX.Element[] | JSX.Element
}

export function NavNavigation({ children }: Props) {
  const dataNavigation = [
    // {
    //   id:"01",
    //   page:"Marcas",
    //   url:"/"
    // },

    {
      id: "01",
      page: "Hombre",
      url: "/tienda?genero=hombre",
    },
    {
      id: "01",
      page: "Mujer",
      url: "/tienda?genero=mujer",
    },
    {
      id: "01",
      page: "Niños",
      url: "/tienda?genero=niño",
    },
    {
      id: "01",
      page: "Tienda",
      url: "/tienda",
    },
    {
      id: "01",
      page: "Nuestras Tiendas",
      url: "/nuestras-tiendas",
    },
    {
      id: "01",
      page: "Outlet",
      url: "/tienda?price=asc",
    },
  ]

  return (
    <ul className=" grid grid-flow-col items-center gap-x-32">
      {dataNavigation.map((el, index) => (
        <>
          <Link href={el.url} key={el.id}>
            <li className="group text-black transition duration-300 dark:text-white">
              {el.page}
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
            </li>
          </Link>
          {index === 2 && <div>{children}</div>}
        </>
      ))}
    </ul>
  )
}
