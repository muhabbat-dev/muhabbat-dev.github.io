import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
    type : "content",
    schema : z.object({
        layout: z.string(),
        title : z.string(),
        description : z.string(),
        pubDate : z.date(),
        image : z.string(),
        body : z.string().optional(),
        keywords: z.string(),
        tags: z.array(z.string()),
        category: z.string().default('All')
    })
});

const projectCollection = defineCollection({
    type : "content",
    schema : z.object({
        title : z.string(),
        description : z.string(),
        pubDate : z.date(),
        image : z.string(),
        link: z.string().url().optional(),
        category: z.string().default('Web')
    })
});


export const collections = {
    'posts': postCollection,
    'projects': projectCollection
};