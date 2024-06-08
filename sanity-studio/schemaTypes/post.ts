import {defineType, defineField, defineArrayMember} from 'sanity'

export const post = defineType({
	type: 'document',
	name: 'post',
	title: 'Blog post',
	fields: [
		defineField({
			type: 'string',
			name: 'title',
			title: 'Title',
			validation: rule => rule.required()
		}),
		defineField({
			type: 'slug',
			name: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			type: 'image',
			name: 'coverImage',
			title: 'Cover image',
			options: {hotspot: true},
		}),
		defineField({
			type: 'datetime',
			name: 'publishedAt',
			title: 'Published at',
		}),
		defineField({
			type: 'blockContent',
			name: 'body',
			title: 'Body',
		}),
		defineField({
			type: 'array',
			name: 'relatedProjects',
			title: 'Related projects',
			of: [
				defineArrayMember({
				type: 'reference',
				to: {type: 'project'},
				}),
			],
		}),
	],
})
