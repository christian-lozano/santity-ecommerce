"use client"

import Column from "./Column/Column"
import "./Footer.css"

const columns = [
  // {
  //   title: "Shop",
  //   links: ["alllinks"],
  // },
  {
    title: "Paginas",
    links: [
      {
        text: "Hombre",
        link: "/tienda?genero=hombre",
      },
      {
        text: "Mujer",
        link: "/tienda?genero=mujer",
      },
      {
        text: "Niños",
        link: "/tienda?genero=niños",
      },
      {
        text: "Carrito",
        link: "/tienda?genero=carrito",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        text: "Problemas con mi Pedido",
        link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
      },
      {
        text: "Hacer una Devolución",
        link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
      },
      {
        text: "Talla Incorrecta",
        link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
      },
    ],
  },
  {
    title: "Políticas",
    links: [
      {
        text: "Políticas de Privacidad",
        link: "privacy",
      },
      {
        text: "Contactados",
        link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
      },
      {
        text: "Términos & Condiciones",
        link: "terms",
      },
    ],
  },
]
const Footer = (props) => {
  const columnsrow = columns?.map((column) => {
    return <Column column={column} />
  })
  const date = new Date()
  return (
    <div className="footer ">
      <div className="columns">
        <Column logo />
        {columnsrow}
      </div>
      <div className="rights">
        <h5 className="graytext">
          <span>
            Todos los derechos Reservados Fritz Sport {date.getFullYear()}
          </span>
          <small>Images are the property of Adidas and Nike ecommerce</small>
        </h5>
      </div>
    </div>
  )
}

export default Footer
