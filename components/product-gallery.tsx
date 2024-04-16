"use client"

import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { PhotoProvider, PhotoView } from "react-photo-view"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

import "react-photo-view/dist/react-photo-view.css"

interface Props {
  product: SanityProduct
}

export function ProductGallery({ product }: Props) {
  const [selectedImage, setSetselectedImage] = useState(0)
  return (
    <div className="flex flex-col-reverse">
      {/* Image Grid */}
      <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
        <ul className="grid grid-flow-col justify-start gap-[2px]">
          {product.images.map((image, index) => (
            <div
              key={image._key as string}
              onClick={() => setSetselectedImage(index)}
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50 xl:h-20 xl:w-20"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <img
                  className="relative h-10 w-10 xl:h-20 xl:w-20"
                  src={urlForImage(image).url()}
                  alt=""
                />
              </span>
              {/* <span
                  className="pointer-events-none absolute inset-0 rounded-md ring-4 ring-indigo-500 ring-offset-2"
                  aria-hidden="true"
                /> */}
            </div>
          ))}
        </ul>
      </div>

      {/* Main Image */}
      <div className="aspect-h-1 aspect-w-1 h-full w-full">
        <PhotoProvider>
          <PhotoView src={urlForImage(product.images[selectedImage]).url()}>
            <img
              className="h-full w-full"
              src={urlForImage(product.images[selectedImage]).url()}
              alt=""
            />
            {/* <Image
              priority
              src={urlForImage(product.images[selectedImage]).url()}
              width={600}
              height={750}
              alt={`main ${product.name} image`}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(600, 750)
              )}}`}
              className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
            /> */}
          </PhotoView>
        </PhotoProvider>
      </div>
    </div>
  )
}
