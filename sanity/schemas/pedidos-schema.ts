import { defineField, defineType } from "sanity"

export const pedidos = defineType({
  name: "pedidos",
  title: "Pedidos",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "images",
      title: "Images (jpg,png,webp) 2000x2000",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "image",
      title: "Images (jpg,png,webp) 2000x2000",
      type: "image",
    },
  ],
})
