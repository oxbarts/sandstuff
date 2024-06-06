import { defineCollection, z } from 'astro:content'

export const collections = {
  stuff: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      created: z.date(),
      lastUpdated: z.date().optional(),
      // categories: z.array(z.enum(['guide', 'post', 'resource', 'tool'])).optional(),
      category: z.enum(['guide', 'post', 'resource', 'tool']),
      pin: z.number().optional(),
      draft: z.boolean().optional(),
      hidden: z.boolean().optional(),
    }),
  }),
}
