import {defineField, defineType} from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 100,
        },
    }),
    defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: { type: 'author' },
    }),
    defineField({
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    }),
    defineField({
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
    }),
    defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
            {
            type: 'reference',
            to: { type: 'category' },
            },
        ],
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
    }),
    defineField({
        name: 'disclosure',
        title: 'Disclosure',
        type: 'text',
        description: 'Disclosure to display on the single blog post page (required by marketing)',
    }),
  ],
  preview: {
    select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
  },
})
