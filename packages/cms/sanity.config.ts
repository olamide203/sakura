import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {SiteMeta} from 'sanity-plugin-sitemeta'

export default defineConfig({
  name: 'default',
  title: 'sakura',

  projectId: 'k5cl2l8h',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), SiteMeta()],

  schema: {
    types: schemaTypes,
  },
})
