import {defineType, defineField, StringOptions} from 'sanity'
import {LinkedinLogo} from '@phosphor-icons/react/LinkedinLogo'
import {XLogo} from '@phosphor-icons/react/XLogo'
import {InstagramLogo} from '@phosphor-icons/react/InstagramLogo'
import {GithubLogo} from '@phosphor-icons/react/GithubLogo'

type account = 'x' | 'github' | 'linkedIn' | 'instagram'

const icons = {
  github: GithubLogo,
  linkedIn: LinkedinLogo,
  x: XLogo,
  instagram: InstagramLogo,
}

export default defineType({
  name: 'social',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'account',
      title: 'Account',
      type: 'string',
      options: {
        list: [
          {
            title: 'X',
            value: 'x',
          },
          {
            title: 'GitHub',
            value: 'github',
          },
          {
            title: 'LinkedIn',
            value: 'linkedIn',
          },
          {
            title: 'Instagram',
            value: 'instagram',
          },
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'account',
      subtitle: 'username',
    },
    prepare: (selection) => {
      const {title, subtitle} = selection

      return {
        title: title,
        subtitle: subtitle ? `@${subtitle}` : 'No username',
        media: icons[title as account],
      }
    },
  },
})
