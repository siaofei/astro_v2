import { getCollection } from 'astro:content'

import type { CollectionEntry } from 'astro:content'
import type { BookmarkItem } from '@/types'

export async function getAllBookmarks() {
  // eslint-disable-next-line unicorn/no-await-expression-member
  const bookmarks: BookmarkItem[] = (await getCollection('bookmarks')).map(
    (bookmark: CollectionEntry<'bookmarks'>) => {
      const data = bookmark.data
      // Auto add tag "favorite" if it's marked as favorite
      if (data.favorite && !data.tags.includes('favorite')) {
        data.tags.push('favorite')
      }
      return data
    },
  )

  // Excluding favorite tag
  const tags = [
    ...new Set(bookmarks.flatMap((bookmark) => bookmark.tags)),
  ].filter((tag) => tag != 'favorite')

  return { bookmarks, tags }
}
