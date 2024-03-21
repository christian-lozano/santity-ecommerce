import { defineField, defineType } from "sanity"

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "name",
      description: "This field is the title of your personal website.",
      title: "Name",
      type: "string",
      initialValue: "Home Page",
    }),
    {
      name: "slider",
      title: "Slider",
      type: "array",
      of: [
        {
          title: "Slider",
          type: "object",
          name: "Slide",
          fields: [
            {
              title: "Image",
              name: "img",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
              fields: [
                {
                  title: "Titulo",
                  name: "titulo",
                  type: "string",
                  validation: (rule) => rule.required(),
                },
                {
                  title: "Subtitulo",
                  name: "subtitulo",
                  type: "string",
                  validation: (rule) => rule.required(),
                },
                {
                  title: "Btntext",
                  name: "btntext",
                  type: "string",
                  validation: (rule) => rule.required(),
                },
                {
                  title: "Link",
                  name: "link",
                  type: "string",
                  validation: (rule) => rule.required(),
                },
                {
                  title: "Image PNG 2000x2000",
                  name: "img2",
                  type: "image",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "bannergenero",
      title: "Genero",
      type: "array",
      of: [
        {
          title: "Hombre Mujer",
          type: "object",
          name: "bannergenero",
          fields: [
            {
              title: "Image",
              name: "img",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
              fields: [
                {
                  title: "Titulo",
                  name: "titulo",
                  type: "string",
                  validation: (rule) => rule.required(),
                },
                {
                  title: "Btntext",
                  name: "btntext",
                  type: "string",
                  validation: (rule) => rule.required(),
                },
                {
                  title: "Link",
                  name: "link",
                  type: "string",
                  validation: (rule) => rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "semifiltro",
      title: "Filtro con Slider",
      type: "array",
      of: [
        {
          title: "Semi filtro",
          type: "object",
          name: "semifiltro",
          fields: [
            {
              title: "Filtro",
              name: "filtro",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              title: "cantidadSlider",
              name: "cantidadslider",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              title: "Slider Titulo",
              name: "slidertitle",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              title: "Link",
              name: "link",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              title: "Imagen Principal",
              name: "img",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            // array images
            {
              name: "Categorias",
              title: "Categorías",
              type: "array",
              of: [
                {
                  title: "Hombre Mujer",
                  type: "object",
                  name: "bannergenero",
                  fields: [
                    {
                      title: "Imagen Categoría",
                      name: "img",
                      type: "image",
                      options: {
                        hotspot: true, // <-- Defaults to false
                      },
                      validation: (rule) => rule.required(),
                    },
                    {
                      title: "Titulo",
                      name: "titulo",
                      type: "string",
                      validation: (rule) => rule.required(),
                    },
                    {
                      title: "BtnText",
                      name: "btnText",
                      type: "string",
                      validation: (rule) => rule.required(),
                    },
                    {
                      title: "Link",
                      name: "link",
                      type: "string",
                      validation: (rule) => rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})
