import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
        },
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
