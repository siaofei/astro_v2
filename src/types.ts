/**
 * ImageType
 *
 * @param {(string|undefined)} sourceUrl
 *    + Image in the 'plubic/' folder: use the image’s file path relative to the public folder
 *    + Remote image: use the image’s full URL as the property value
 * @param {(string|undefined)} altText
 * @param {(number|undefined)} width - If image in 'plubic/' folder,
 *    this property value must be given
 * @param {(number|undefined)} hight - If image in 'plubic/' folder,
 *    this property  value must be given
 * @param {ImageMetadata} imageMetadata - locate image must be imported
 *    (in 'src/' folder)
 */
export type ImageType = {
  sourceUrl?: string | null
  sizes?: string
  altText?: string
  width?: number
  height?: number
  imageMetadata?: ImageMetadata // for default featured images
} | null

/**
 * Corresponding Bookmarks Schema
 */
export type BookmarkItem = {
  url: string
  date: Date
  title?: string
  description?: string
  tags: string[]
  favorite: boolean
  pinned: boolean
  keySearch?: string
}
