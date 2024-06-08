import { defineType, defineField, defineArrayMember } from 'sanity'

export const milestone = defineType({
  type: "object",
  name: "milestone",
  title: "Milestone",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "tags",
      title: "Tags",
      options: { layout: "tags" },
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "duration",
      name: "duration",
      title: "Duration",
    }),
  ],
});

