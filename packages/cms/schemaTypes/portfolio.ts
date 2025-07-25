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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      description: 'A role or job description that shows up on your portfolio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'social'}]}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'experience'}]}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills and Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technology'}]}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'reference',
      to: [{type: 'siteMeta'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
})
