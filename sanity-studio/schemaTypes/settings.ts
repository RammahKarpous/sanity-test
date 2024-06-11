import { defineType, defineField } from 'sanity'

export const settings = defineType({
    type: "document",
    name: "settings",
    title: "Site settings",
    fields: [
        defineField({
            type: "image",
            name: "image",
            title: "Logo image",
            options: {
                hotspot: true
            }
        }),
    ]
});