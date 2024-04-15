import { client } from "@/sanity/lib/client"

import { inventory } from "@/config/inventory"

export async function seedSanityData(data: {
  razón: any
  estado: any
  productos: any
  comprobante: any
  id_payer: any
  id_mercado_pago: any
  nombres: any
  apellidos: any
  email: any
  documento: any
  cart_total: any
  telefono: any
  distrito: any
  provincia: any
  direccion: any
  info_adicional: any
  ruc: any
}) {
  const transaction = client.transaction()

  // inventory.forEach((item) => {

  let produc = data.productos.map(
    (el: {
      title: any
      quantity: any
      type: any
      category_id: any
      unit_price: any
    }) => {
      let result = {
        name: el.title,
        cantidad: Number(el.quantity),
        sku: el.type,
        talla: el.category_id,
        unit_price: Number(el.unit_price.toFixed(0)),
      }
      return result
    }
  )

  const pedidos = {
    _type: "pedidos",
    _id: data.id_payer,
    id_payer: data.id_payer,
    estado: data.estado,
    razon: data.razón,
    id_mercado_pago: data.id_mercado_pago,
    nombres: data.nombres,
    apellidos: data.apellidos,
    email: data.email,
    documento: data.documento,
    cart_total: data.cart_total,
    telefono: data.telefono,
    distrito: data.distrito,
    provincia: data.provincia,
    comprobante: data.comprobante,
    direccion: data.direccion,
    info_adicional: data.info_adicional,
    ruc: data.ruc,
    productos: produc,

    // description: item.description,
  }
  transaction.createOrReplace(pedidos)
  // })
  await transaction.commit()
  await seedSanityImages()
  console.log("Sanity data seeded", pedidos)
}

async function seedSanityImages() {
  inventory.forEach(async (item) => {
    let images: any[] = []
    for (const image of item.images) {
      const imageAssetResponse = await fetch(image)
      const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
      const imageAsset = await client.assets.upload(
        "image",
        Buffer.from(imageAssetBuffer)
      )
      images.push({
        _key: imageAsset._id,
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      })
    }
    await client
      .patch(item.id)
      .set({ "slug.current": slugify(item.name), images })
      .commit()
  })
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
