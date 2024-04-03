import { defineField, defineType } from "sanity"

export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "sku",
      title: "sku",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    },

    {
      name: "genero",
      title: "Genero",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Tipo",
      name: "tipo",
      type: "string",

      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Calzado", value: "calzado" },
          { title: "Ropa", value: "ropa" },
          { title: "Accesorios", value: "accesorios" },
        ], // <-- predefined values
      },
    },
    {
      name: "marca",
      title: "Marca",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Imagen Principal Catalogo(png,webp)",
      name: "imgcatalogomain",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "imagescatalogo",
      title: "Images Catalogo (jpg,png,webp)",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "images",
      title: "Images Ecommerce (jpg,png,webp) 2400x2400",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "categories",
      title: "categories",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "color",
      title: "Color",
      type: "string",

      validation: (rule) => rule.required(),
    },
    {
      name: "tallas",
      title: "Tallas Ecommerce",
      type: "array",

      validation: (rule) => rule.required(),
      of: [
        defineField({
          title: "Tallas y Stock",
          type: "object",
          name: "Tallas y Stock ",
          validation: (rule) => rule.required(),

          fields: [
            {
              title: "Talla",
              name: "talla",
              type: "string",
            },
            {
              title: "Stock",
              name: "stock",
              type: "number",
            },
          ],
        }),
      ],
    },

    {
      name: "tallascatalogo",
      title: "Tallas Catalogo",
      type: "string",

      validation: (rule) => rule.required(),
    },

    {
      name: "priceecommerce",
      title: "Precio Ecommerce",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "pricemayorista",
      title: "Precio Mayorista",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "priceemprendedor",
      title: "Precio Emprendedor",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "stock",
      title: "Stock Total",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "descuento",
      title: "Descuento Ecommerce",
      type: "number",
      validation: (rule) => rule.required(),
    },
  ],
})
