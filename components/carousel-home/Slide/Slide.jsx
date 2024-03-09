import React from "react"

import Appbtn from "../Appbtn/Appbtn"
import "./Slide.css"
import Link from "next/link"

const Slide = (props) => {
  const { title, subtitle, link, img, btntext, img2 } = props.slide
  const { className } = props

  return (
    <div className={className}>
      {img2 && (
        <div className="img2 ">
          <img src={img2} className="" alt="" />
        </div>
      )}
      <div className="slidecont">
        <div className="slidetitles">
          <h3 className="text-black">{subtitle}</h3>
          <h1 className="text-black">{title}</h1>
        </div>
        <Link href={"/website/" + link}>
          <Appbtn text={btntext} icon="fal fa-chevron-right" />
        </Link>
      </div>

      <img src={img} alt="" />
    </div>
  )
}
export default Slide
