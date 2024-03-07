"use client"
import React, { useEffect, useState } from 'react'
import Slide from './Slide/Slide'
import './Carousel.css'
const Carousel = (props) => {
    const slides = [
     
       {
         subtitle: "Shop Trending T-Shirts that are now on sale!",
         title: "T-SHIRTS SALE",
         link: '/shop/shirts/sales',
         img: 'https://i.imgur.com/0ASbjos.jpg',
         position: 1,
         class: 'white',
         btntext: 'Shop Now'
       },
       {
         subtitle: "Shop exclusive ladies bags now on ShopiumX",
         title: "LADIES BAGS",
         link: '/shop/bags',
         img: 'https://i.imgur.com/h0EVY1R.jpg',
         position: 2,
         img2: 'https://res.cloudinary.com/da868wsih/image/upload/v1709318809/fritz_sport/ecommerce/home/slider_desktop/1_sctc0r.png',
         class: 'leftimg',
         btntext: 'Shop Now'
       },
    //    {
    //      title: 'New Arrivals 2021',
    //      subtitle: 'Discover New Arrivals',
    //      link: '/new-arrivals',
    //      img: 'https://i.imgur.com/hdeCel6.jpg',
    //      position: 3,
    //      class: 'center',
    //      btntext: 'Discover Now'
    //    }
     ]
  const [timeduration] = useState(8000)
  const [play, setPlay] = useState(true)
  const [pos, setPos] = useState(0)
  const slidesrow = slides?.map((slide, i)=>{
    return <Slide className={`slide ${slide.class} ${((pos%slides.length)===i)&&'active'}`} slide={slide} pos={pos} />
  })
  const carouselnavrow = slides.map((slide, i)=>{
    return (
      <div className={`carouselitem ${((pos%slides.length)===i)&&'activecarouselitem'}`} onClick={()=>{setPos(i); setPlay(false);setTimeout(()=>{setPlay(true)}, 0)}}>
        <div className='butt'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
        </svg>

        </div>
      </div>
    )
  })

  const  [elap, setElap] = useState(0)
  useEffect(()=> {
    setPos(0)
  },[])
  useEffect(()=>{
    let timer
    let elap
    if(play) {
      timer = setInterval(()=>{
        setPos(prev=> prev+1)
        setElap(0)
      }, timeduration)
      elap = setInterval(()=>{
        setElap(prev=> prev +1)
      }, 1)
    }else {
      clearInterval(timer)
      clearInterval(elap)
      setElap(0)

    }
    return() => {
      clearInterval(timer)
      clearInterval(elap)
      setElap(0)
    }
  },[play, timeduration])

  return (
    <div className="carouselbanner">
      {/* <div className="progress">
        <div className="prog" style={{width: (elap*400)/(timeduration)+'%'}}></div>
      </div> */}
      <div className="slides">
       {slidesrow}
      </div>
      <div className="carouselcontrols">
      {carouselnavrow}
        <div className="pause">
        <button onClick={()=>setPlay(!play)}>
            {
                play ?  (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>


                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>


                )
            }

        </button>

          <i onClick={()=>setPlay(!play)} className={play?'fal fa-pause':'fal fa-play'}></i>
        </div>
      </div>
    </div>
  )
}
export default Carousel