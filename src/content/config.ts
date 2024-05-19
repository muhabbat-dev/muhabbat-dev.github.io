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
        keywords: z.string()
    })
});

const projectCollection = defineCollection({
    type : "content",
    schema : z.object({
        title : z.string(),
        description : z.string(),
        pubDate : z.date(),
        image : z.string(),
        link: z.string().url()
    })
});


export const collections = {
    'posts': postCollection,
    'projects': projectCollection
};