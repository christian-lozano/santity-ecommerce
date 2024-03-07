import { defineField, defineType } from "sanity";

export const product = defineType ({
    name:"product",
    title:"Products",
    type:"document",
    fields:[
      defineField({
        name:"name",
        title:"Name",
        type:"string"
      }),
      {
        name:"slug",
        title:"slug",
        type:"slug",
        options:{
          source:"name"
        }
      },
      {
        name:"genero",
        title:"Genero",
        type:"string"
      },
      {
        name:"images",
        title:"Images",
        type:"array",
        of:[{type:"image"}]
      },
      {
        name:"categories",
        title:"categories",
        type:"array",
        of:[{type:"string"}]
      },
      {
        name: "tallas",
        title: "Tallas",
        type: "array",
        of: [
          {
            type: "object",
            name: "Tallas y Stock ",
            fields: [
              {
                title: 'Talla',
                name: 'talla',
                type: 'string'
              },
              {
                title: 'Stock',
                name: 'stock',
                type: 'number'
              }
            ]
          }
        ]
      },
      {
        name:"sku",
        title:"sku",
        type:"string"
      },
      {
        name:"currency",
        title:"Currency",
        type:"string"
      },
      {
        name:"price",
        title:"Price",
        type:"number"
      }
    ]
})
