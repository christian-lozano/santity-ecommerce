import { type SchemaTypeDefinition } from "sanity"

import { home } from "./schemas/home-schema"
import { product } from "./schemas/product-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, home],
}
