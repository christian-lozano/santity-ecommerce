"use client"

import React from "react"

import Column from "./Column/Column"
import "./Footer.css"

const columns = [
  // {
  //   title: "Shop",
  //   links: ["alllinks"],
  // },
  {
    title: "Account",
    links: [
      {
        text: "My Account",
        link: "/account",
      },
      {
        text: "Purchases",
        link: "/orders",
      },
      {
        text: "Cart",
        link: "/cart",
      },
      {
        text: "Saved",
        link: "/saved",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        text: "Track Order",
        link: "/track",
      },
      {
        text: "Shipping and Returns",
        link: "/shipping",
      },
      {
        text: "Customer Service",
        link: "/customerservice",
      },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        text: "About",
        link: "about",
      },
      {
        text: "Privacy Policy",
        link: "privacy",
      },
      {
        text: "Contact",
        link: "contact",
      },
      {
        text: "Terms & Conditions",
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
