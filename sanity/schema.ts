import { type SchemaTypeDefinition } from "sanity"
import { product } from "./schemas/product-schema"
import { header } from "./schemas/header-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, header],


}
