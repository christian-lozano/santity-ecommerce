import ContedorCarouselProduct from "@/components/carousel-product/contedor-carousel-product"

import SemiFiltroHome from "./semi-filtro-home"

export default function MainFiltroGenero({ dataSemifiltroHome }) {
  return (
    <div className=" flex h-full   w-full flex-col justify-around">
      <div className="flex h-20 w-full justify-center text-4xl font-extrabold">
        <h2>Categorías</h2>
      </div>
      {dataSemifiltroHome.map((el) => (
        <>
          <SemiFiltroHome dataSemifiltroHome={el} />
          <div className="mt-20 w-full text-center text-3xl font-extrabold capitalize ">
            Productos para {el.filtro}
          </div>
          <ContedorCarouselProduct
            genero={el.filtro}
            cantidad={el.cantidadSlider}
          />
        </>
      ))}
    </div>
  )
}
