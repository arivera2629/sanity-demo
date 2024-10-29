import { defineType} from 'sanity'

export const blockContentType = defineType({
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
      {
        type: 'block',
      },
      {
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
})
