"use client"

import React from "react"
import Carousel from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"
import Product from "../product/product"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
}
const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
]

const products = [
  {
    type: "Boys",
    percent: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur repudiandae. Amet cum eveniet libero numquam eius impedit aliquid cupiditate officia exercitationem!",
    shortdescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur",
    id: "EfbDYE6G0L4M3ENS7MlP",
    season: "Summer",
    savedby: [],
    incart: [],
    userratings: [
      {
        rating: 3,
        userid: "asd",
      },
    ],
    img: "https://i.imgur.com/h2sP3bN.jpg",
    stock: 0,
    sizes: [
      {
        size: "S",
        colors: [
          { color: "gray", stock: 10 },
          { color: "black", stock: 0 },
        ],
      },
      {
        size: "L",
        colors: [
          { color: "black", stock: 5 },
          { color: "red", stock: 0 },
        ],
      },
    ],
    name: "Kids's Shorts",
    sale: true,
    pricerange: "$0-$49",
    price: 8.99,
    imgs: ["https://i.imgur.com/h2sP3bN.jpg"],
    rating: 3,
    reviews: [],
    coupons: [
      { couponcode: "coupon1", discount: 10 },
      { coouponcode: "coupon2", discount: 20 },
    ],
    cost: 1.04,
    sold: 0,
    date: new Date(),
  },
  {
    shortdescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur",

    pricerange: "$100-$149",
    type: "Trending",
    sale: true,
    name: "Jewlery",
    savedby: [],
    price: 120.99,
    stock: 10,
    id: "IxRD83tOskHQoCMejK1H",
    img: "https://i.imgur.com/ETqGxMl.jpg",
    userratings: [
      {
        userid: "asd",
        rating: 3,
      },
    ],
    rating: 3,
    sizes: [
      {
        size: "S",
        colors: [
          { color: "yellow", stock: 5 },
          { color: "white", stock: 0 },
        ],
      },
      {
        size: "M",
        colors: [
          { color: "red", stock: 1 },
          { color: "blue", stock: 3 },
        ],
      },
    ],
    percent: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur repudiandae. Amet cum eveniet libero numquam eius impedit aliquid cupiditate officia exercitationem!",
    imgs: ["https://i.imgur.com/ETqGxMl.jpg"],
    season: "Fall",
    reviews: [],
    coupons: [
      { couponcode: "coupon3", discount: 10 },
      { coouponcode: "coupon2", discount: 20 },
    ],
    cost: 1.04,
    sold: 0,
    date: new Date(),
  },
  {
    shortdescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur",

    stock: 10,
    savedby: [],
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur repudiandae. Amet cum eveniet libero numquam eius impedit aliquid cupiditate officia exercitationem!",
    season: "Fall",
    img: "https://i.imgur.com/BmRl7a5.jpg",
    userratings: [
      {
        userid: "asd",
        rating: 4,
      },
    ],
    price: 190.99,
    type: "Men",
    pricerange: "$150-$199",

    imgs: ["https://i.imgur.com/BmRl7a5.jpg"],
    percent: 4,
    name: "Men's Shorts",
    sale: true,
    id: "yB1XKhY4cYH53N0p3JvK",
    sizes: [
      {
        size: "S",
        colors: [
          { color: "brown", stock: 2 },
          { color: "red", stock: 3 },
        ],
      },
      {
        size: "M",
        colors: [
          { color: "red", stock: 1 },
          { color: "blue", stock: 3 },
        ],
      },
      {
        size: "L",
        colors: [
          { color: "red", stock: 3 },
          { color: "blue", stock: 10 },
        ],
      },
    ],
    reviews: [],
    coupons: [],
    cost: 1.14,
    sold: 0,
    date: new Date(),
  },
  {
    shortdescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur",

    name: "Girl's Dress",
    img: "https://i.imgur.com/pU0JgWI.jpg",
    imgs: ["https://i.imgur.com/pU0JgWI.jpg"],
    type: "Boys",
    userratings: [
      {
        rating: 5,
        userid: "asd",
      },
    ],

    stock: 0,
    savedby: [],
    incart: [],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur repudiandae. Amet cum eveniet libero numquam eius impedit aliquid cupiditate officia exercitationem!",
    rating: 5,
    season: "Fall",
    price: 320.99,
    pricerange: "$300-$500",
    sizes: [
      {
        size: "S",
        colors: [
          { color: "gray", stock: 0 },
          { color: "black", stock: 0 },
        ],
      },
      {
        size: "L",
        colors: [
          { color: "gray", stock: 5 },
          { color: "black", stock: 3 },
        ],
      },
    ],
    id: "OYsMEHs0sjzdZV3DAjmy",
    percent: 0,
    sale: false,
    reviews: [],
    coupons: [
      { couponcode: "coupon1", discount: 10 },
      { coouponcode: "coupon2", discount: 20 },
    ],
    cost: 2.04,
    sold: 0,
    date: new Date(),
  },
  {
    shortdescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur",

    stock: 10,
    savedby: [],
    season: "Fall",
    sizes: [
      {
        size: "S",
        colors: [
          { color: "brown", stock: 1 },
          { color: "black", stock: 2 },
          { color: "pink", stock: 0 },
        ],
      },
      {
        size: "M",
        colors: [
          { color: "brown", stock: 0 },
          { color: "black", stock: 0 },
          { color: "pink", stock: 30 },
        ],
      },
    ],
    img: "https://i.imgur.com/hETFdXn.jpg",
    incart: [],
    pricerange: "$0-$49",
    rating: 4,
    imgs: [
      "https://i.imgur.com/hETFdXn.jpg",
      "https://i.imgur.com/QeVIPGI.jpg",
      "https://i.imgur.com/B5AF9zB.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur repudiandae. Amet cum eveniet libero numquam eius impedit aliquid cupiditate officia exercitationem!",
    price: 30.99,
    name: "Women's Sweatshorts",
    id: "uCikNPblRrHc1RaCoUCK",
    type: "Women",
    sale: false,
    percent: 0,
    userratings: [
      {
        userid: "asd",
        rating: 4,
      },
    ],
    reviews: [],
    coupons: [
      { couponcode: "coupon1", discount: 10 },
      { coouponcode: "coupon2", discount: 20 },
    ],
    cost: 0.4,
    sold: 0,
    date: new Date(),
  },
  {
    shortdescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur",

    sale: false,
    type: "Women",
    percent: 0,
    rating: 3,
    img: "https://i.imgur.com/rxxxFRs.jpg",
    incart: [],
    id: "w8cQeJLxf0HAcO0cAsiK",
    sizes: [
      {
        size: "XS",
        colors: [
          { color: "pink", stock: 5 },
          { color: "red", stock: 0 },
        ],
      },
      {
        size: "L",
        colors: [
          { color: "brown", stock: 0 },
          { color: "black", stock: 0 },
        ],
      },
      {
        size: "XL",
        colors: [
          { color: "brown", stock: 20 },
          { color: "black", stock: 10 },
        ],
      },
    ],
    pricerange: "$0-$49",
    imgs: ["https://i.imgur.com/rxxxFRs.jpg"],
    price: 30.99,
    name: "Women Sweater",
    season: "Trending",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur repudiandae. Amet cum eveniet libero numquam eius impedit aliquid cupiditate officia exercitationem!",
    stock: 0,
    savedby: [],
    userratings: [
      {
        userid: "asd",
        rating: 3,
      },
    ],
    reviews: [],
    coupons: [
      { couponcode: "coupon1", discount: 10 },
      { coouponcode: "coupon2", discount: 20 },
    ],
    cost: 1.54,
    sold: 0,
    date: new Date(),
  },
  {
    shortdescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur",

    stock: 1,
    name: "Men's T-Shirt",
    incart: [],
    savedby: [],
    imgs: ["https://i.imgur.com/Aa5XWIb.jpg"],
    userratings: [
      {
        userid: "asd",
        rating: 3,
      },
    ],
    sale: false,
    percent: 0,
    type: "Men",
    img: "https://i.imgur.com/Aa5XWIb.jpg",
    price: 53,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolores blanditiis aliquid qui ab quam voluptate exercitationem consectetur repudiandae. Amet cum eveniet libero numquam eius impedit aliquid cupiditate officia exercitationem!",
    sizes: [
      {
        size: "S",
        colors: [
          { color: "pink", stock: 0 },
          { color: "brown", stock: 10 },
          { color: "black", stock: 0 },
        ],
      },
      {
        size: "XL",
        colors: [
          { color: "brown", stock: 5 },
          { color: "black", stock: 2 },
          { color: "pink", stock: 1 },
        ],
      },
    ],
    season: "Fall",
    id: "Df6DlA3cbc8ktEg4bF1s",
    pricerange: "$50-$99",
    reviews: [],
    coupons: [],
    cost: 1.94,
    sold: 0,
    date: new Date(),
  },
]
const CarouselProduct = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        time={2000}
        width="100vw"
        height="45vh"
        radius="10px"
        customTransition="all 1.5s"
        // transitionDuration={10000}
        slideNumber={true}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        dotListClass="custom-dot-list-style"
     
      >
        {products.map((el, index) => (
          <Product products={el} />
        ))}
      </Carousel>
    </div>
  )
}
export default CarouselProduct
