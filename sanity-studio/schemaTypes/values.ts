import { defineField, defineType } from "sanity";

export const ourValues = defineType({
    name: "ourValues",
    type: "document",
    title: "Our values",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "description",
            type: "string",
            title: "Brief description",
        }),
        defineField({
            name: "text",
            type: "array",
            title: "Value text",
            of: [
                { type: "block" }
            ]
        })
    ]
})