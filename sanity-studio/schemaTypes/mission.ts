import { defineType, defineField } from "sanity";

export const mission = defineType({
    name: "mission",
    type: "document",
    title: "Our mission",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "text",
            type: "array",
            title: "Our mission text",
            of: [
                { type: "block"}
            ]
        })
    ]
})