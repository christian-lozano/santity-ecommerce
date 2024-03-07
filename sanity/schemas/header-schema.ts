import { defineField, defineType } from "sanity";

export const header = defineType ({
    name:"header",
    title:"Header",
    type: 'document',
    fields: [
      defineField({
        title:"Logo",
        name:"logo",
        type:"image"
      })
 
    ]
    
})
