import { type SchemaTypeDefinition } from "sanity"

import { home } from "./schemas/home-schema"
import { pedidos } from "./schemas/pedidos-schema"
import { product } from "./schemas/product-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, product, pedidos],
}
