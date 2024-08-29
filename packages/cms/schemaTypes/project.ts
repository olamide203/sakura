import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technology'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Discription',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'repository',
      title: 'Project Repository',
      type: 'url',
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'mainImage',
    },
  },
})
