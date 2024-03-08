"use client"

import React from "react"
import Link from "next/link"


import Appbtn from "@/components/carousel-home/Appbtn/Appbtn"

const Containertype = (props) => {
  const { img, title, subtitle, link, products, limit } = props
  // const productsrow = products?.slice(0, limit).map((product, i) => {
  //   return <Product product={product} key={product.id} />
  // })

  return (
    <>
      {" "}
      <div className={`${title} containertype`}>
        <div className="frame">
          <div className="framecont">
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <Link href={`/website/${link}`}>
              <Appbtn
                text={"View Products"}
                icon="fal fa-chevron-right"
                className="reverse"
              />
            </Link>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
      {/* <Horizontalscroll /> */}
    </>
  )
}
export default Containertype
