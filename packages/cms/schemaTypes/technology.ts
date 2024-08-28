import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'link',
      title: 'URL',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})
