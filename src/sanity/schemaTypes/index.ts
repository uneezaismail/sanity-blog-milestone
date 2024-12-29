import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import blogpost from './blog'
import author from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,blogpost,author],
}
