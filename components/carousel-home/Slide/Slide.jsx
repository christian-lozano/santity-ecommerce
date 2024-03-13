"use client"

import { shimmer, toBase64 } from "@/lib/image"

import Appbtn from "../Appbtn/Appbtn"
import "./Slide.css"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

const Slide = (props) => {
  const { className } = props

  return (
    <div className={className}>
      {props.slide.img.img2 && (
        <div className="img2 ">
          {/* <img src={props.slide.img.asset._ref} className="" alt="" /> */}
          <img
            src={urlForImage(props.slide.img.img2.asset._ref).url()}
            alt=""
          />
        </div>
      )}
      <div className="slidecont">
        <div className="slidetitles">
          <h3 className=" text-white">{props.slide.img.subtitulo}</h3>
          <h1 className="text-2xl font-bold uppercase text-white">
            {props.slide.img.titulo}
          </h1>
        </div>
        <Link href={props.slide.img.link}>
          <Appbtn
            text={props.slide.img.btntext}
            className="capitalize"
            icon="fal fa-chevron-right"
          />
        </Link>
      </div>
      <img src={urlForImage(props.slide.img.asset._ref).url()} alt="" />
      {/* <img src={props.slide.img2.asset._ref} alt="" /> */}
    </div>
  )
}
export default Slide
