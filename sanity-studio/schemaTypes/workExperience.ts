import { defineType, defineField } from 'sanity'

export const workExperience = defineType({
    type: 'document',
    name: 'work-experience',
    title: 'Work Experience',
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
        }),
        defineField({
            type: 'string',
            name: 'company',
            title: 'Company',
        }),
        defineField({
            type: 'string',
            name: 'location',
            title: 'Location',
        }),
    ],
})
