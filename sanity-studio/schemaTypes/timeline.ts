import { defineType, defineField, defineArrayMember } from 'sanity'

export const timeline = defineType({
  type: "object",
  name: "timeline",
  title: "Timeline",
  fields: [
    defineField({
      type: "array",
      name: "items",
      title: "Items",
      of: [
        defineArrayMember({
          type: "object",
          name: "item",
          title: "Item",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title",
            },
            {
              type: "array",
              name: "milestones",
              title: "Milestones",
              of: [
                {
                  type: "milestone",
                  name: "milestone",
                  title: "Milestone",
                },
              ],
            },
          ],
        }),
      ],
    }),
  ],
});

