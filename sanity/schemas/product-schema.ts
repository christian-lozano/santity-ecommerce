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
      name: "tipo",
      title: "Tipo",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "marca",
      title: "Marca",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
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
      title: "Colores",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "tallas",
      title: "Tallas",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        {
          title: "Tallas y Stock",
          type: "object",
          name: "Tallas y Stock ",
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
        },
      ],
    },

    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "stock",
      title: "Stock Total",
      type: "number",
    },
    {
      name: "descuento",
      title: "Descuento",
      type: "number",
    },
  ],
})
