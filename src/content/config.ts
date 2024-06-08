import { defineCollection, z } from 'astro:content'

export const collections = {
  stuff: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      created: z.date(),
      lastUpdated: z.date().optional(),
      category: z.enum(['guides', 'posts', 'resources', 'tools']),
      pin: z.number().optional(),
      draft: z.boolean().optional(),
      hidden: z.boolean().optional(),
    }),
  }),
}
