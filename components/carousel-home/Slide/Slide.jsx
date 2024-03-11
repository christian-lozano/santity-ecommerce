import React from "react"

import Appbtn from "../Appbtn/Appbtn"
import "./Slide.css"
import Link from "next/link"

const Slide = (props) => {
  const { title, subtitle, link, img, btntext, img2 } = props.slide
  console.log(props.slide.img)
  const { className } = props

  return (
    <div className={className}>
      {img2 && (
        <div className="img2 ">
          <img src={props.slide.img.asset._ref} className="" alt="" />
        </div>
      )}
      <div className="slidecont">
        <div className="slidetitles">
          <h3 className="text-white">{props.slide.img.subtitulo}</h3>
          <h1 className="text-white">{props.slide.img.titulo}</h1>
        </div>
        <Link href={props.slide.img.link}>
          <Appbtn text={props.slide.img.titulo} icon="fal fa-chevron-right" />
        </Link>
      </div>

      <img src={props.slide.img.asset._ref} alt="" />
    </div>
  )
}
export default Slide
