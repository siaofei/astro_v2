import { defineCollection, z } from 'astro:content'

/**
 * Don't forget update `@/types.ts` when updating this schema
 */
const bookmarksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    url: z.string().url(),
    date: z.date().readonly(), // created date
    title: z.string().optional(), // string | undefined
    description: z.string().optional(),
    tags: z.array(z.string()).default(['others']),
    favorite: z.boolean().default(false), // boolean | false
    pinned: z.boolean().default(false),
    keySearch: z.string().optional(),
  }),
})

export const collections = {
  bookmarks: bookmarksCollection,
}
