"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "tipo",
    name: "Tipo",
    options: [
      { value: "ropa", label: "ropa" },
      { value: "calzado", label: "calzado" },
      { value: "accesorios", label: "accesorios" },
    ],
  },

  {
    id: "genero",
    name: "Género",
    options: [
      { value: "hombre", label: "Hombre" },
      { value: "mujer", label: "Mujer" },
      { value: "unisex", label: "unisex" },

      // { value: "niños", label: "Niños" },
      { value: "niños", label: "Niños" },
      // { value: "niña", label: "Niña" },
    ],
  },

  {
    id: "category",
    name: "Categoria",
    options: [
      { value: "zapatilla", label: "zapatillas" },
      { value: "mochila", label: "mochilas" },
      { value: "urbano", label: "urbano" },
      { value: "casaca", label: "casacas" },
      { value: "sandalia", label: "sandalias" },
      { value: "pantalon", label: "pantalón" },
      { value: "plataforma", label: "plataforma" },
      { value: "polera", label: "poleras" },
      { value: "polo", label: "polos" },

      { value: "terrex", label: "terrex" },
      { value: "bolso", label: "bolsos" },
      { value: "buzo", label: "buzos" },
      { value: "gorra", label: "gorras" },
      { value: "short", label: "short" },
      { value: "escolar", label: "escolar" },
    ],
  },
  // {
  //   id: "size",
  //   name: "Talla",
  //   options: [
  //     { value: "xs", label: "X-Small" },
  //     { value: "s", label: "Small" },
  //     { value: "m", label: "Medium" },
  //     { value: "l", label: "Large" },
  //     { value: "xl", label: "X-Large" },
  //     { value: "one-size", label: "One Size" },
  //   ],
  // },
  {
    id: "marca",
    name: "Marca",
    options: [
      { value: "adidas", label: "adidas" },
      { value: "nike", label: "nike" },
      { value: "puma", label: "puma" },
      { value: "reebok", label: "reebok" },
      { value: "cat", label: "cat" },
      { value: "joma", label: "joma" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "blanco", label: "Blanco" },
      { value: "negro", label: "Negro" },
      { value: "azul", label: "Azul" },
      { value: "verde", label: "Verde" },
      { value: "rosa", label: "Rosa" },
      { value: "gris", label: "Gris" },
      { value: "naranja", label: "Naranja" },
      { value: "celeste", label: "celeste" },
      { value: "amarillo", label: "amarillo" },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())
  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id)
                    ? `(${searchParams.get(section.id)})`
                    : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`filter-${section.id}-${optionIdx}`}
                      checked={searchValues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value
                      )}
                      onClick={(event) => {
                        const params = new URLSearchParams(
                          searchParams.toString()
                        )
                        const checked =
                          event.currentTarget.dataset.state === "checked"
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value)
                        router.replace(`tienda/?${params.toString()}`)
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="text-sm font-medium uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
