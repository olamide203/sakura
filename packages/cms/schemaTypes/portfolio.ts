import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'social'}]}],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'experience'}]}],
    }),
    defineField({
      name: 'skills',
      title: 'Skills and Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technology'}]}],
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'reference',
      to: [{type: 'siteMeta'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
})
