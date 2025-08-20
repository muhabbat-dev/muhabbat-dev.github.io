import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			draft: z.boolean().default(true),
			heroImage: image(),
			title: z.string().max(100),
			category: z.enum(CATEGORIES),
			description: z.string(),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			tags: z.array(z.string()),
			keywords: z.array(z.string())
		})
})

const projects = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().max(100),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			link: z.string(),
		})
})






export const collections = { blog, projects }
