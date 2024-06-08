import { defineType, defineField, defineArrayMember } from 'sanity'

export const project = defineType({
  type: "document",
  name: "project",
  title: "Project",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      type: "image",
      name: "coverImage",
      title: "Cover Image",
      options: { hotspot: true },
    }),
    defineField({
      type: "duration",
      name: "duration",
      title: "Duration",
    }),
    defineField({
      type: "string",
      name: "client",
      title: "Client",
    }),
    defineField({
      type: "url",
      name: "site",
      title: "Site",
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
      type: "blockContent",
      name: "body",
      title: "Body",
    }),
  ],
});

