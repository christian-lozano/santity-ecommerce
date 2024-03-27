import { NextResponse } from "next/server"
import Pagos from "@/models/pagoPendiente"
import mercadopago from "mercadopago"

mercadopago.configure({
  access_token: `${process.env.ACCESS_TOKEN_MERCADO}`,
})
export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams
    const collection_id = searchParams.get("collection_id")
    const preference_id = searchParams.get("preference_id")

    const filter = { id_payer: preference_id }
    const update = {
      pedido_pagado: true,
      id_mercado_pago: collection_id,
    }
    let PedidoUpdate = await Pagos.findOneAndUpdate(filter, update)

    return NextResponse.redirect(new URL("/", req.url))
  } catch (error) {
    console.log(error)
  }
}
