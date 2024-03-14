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
  ],
})
