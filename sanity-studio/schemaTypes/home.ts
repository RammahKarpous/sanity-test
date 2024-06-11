import { defineType, defineField } from 'sanity'

export const home = defineType({
    type: "document",
    name: "home",
    title: "Home",
    fieldsets: [
        {
            name: "header",
            title: "Header",
            options: {
                collapsible: true
            }
        },
        {
            name: "buttonProps",
            title: "Button properties",
            options: {
                collapsible: true,
                columns: 2
            }
        },
    ],
    groups: [
        { name: "mission", title: "Mission" },
        { name: "values", title: "Core values" }
    ],
    fields: [
        defineField({
            type: 'string',
            name: 'welcomeText',
            title: 'Welcome text',
            fieldset: "header"
        }),
        defineField({
            type: "string",
            name: "title",
            title: "Title",
            fieldset: "header",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "intro",
            type: "array",
            title: "Introduction",
            of: [
                { type: "block" }
            ],
            fieldset: "header"
        }),
        defineField({
            name: "headerImage",
            type: "image",
            title: "Header image",
            options: { hotspot: true },
            fieldset: "header",
            fields: [
                {
                    type: "string",
                    name: "alt",
                    title: "Alternative text"
                }
            ]
        }),
        defineField({
            name: "buttonText",
            type: "string",
            title: "Button text",
            fieldset: "buttonProps"
        }),
        defineField({
            name: "url",
            type: "string",
            title: "URL",
            fieldset: "buttonProps"
        })
    ]
});