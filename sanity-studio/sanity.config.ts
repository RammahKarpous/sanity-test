import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { listItem } from './lib/listItem'
// import { homePage } from './singleton/homePage'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["Home page"])

export default defineConfig({
	name: "default",
	title: 'Rammah Karpous',

	projectId: "asdze854",
	dataset: 'production',

	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Collection")
					.items([
						S.documentTypeListItem("work-experience").title("Work experience"),
						S.documentTypeListItem("post").title("Blog posts"),
						S.documentTypeListItem("project").title("Projects"),
						S.documentTypeListItem("ourValues").title("Our values"),

						S.divider(),
						
						listItem(S, "Home", "home"),
						listItem(S, "Our mission", "mission"),
						listItem(S, "Site settings", "settings"),
						
						S.divider(),
					])
		}),
		visionTool()
	],

	schema: {
		types: schemaTypes,
	
		templates: (templates) =>
		  templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
	  },
	
	  document: {
		actions: (input, context) =>
		  singletonTypes.has(context.schemaType)
			? input.filter(({ action }) => action && singletonActions.has(action))
			: input,
	  },
})
