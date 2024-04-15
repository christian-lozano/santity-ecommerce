import NewPedido from "@/models/pagoPendiente"
import { client } from "@/sanity/lib/client"

import { seedSanityData } from "@/lib/seed"

export async function POST(req) {
  // console.log(data)
  try {
    const data = await req.json()
    const dato = await seedSanityData(data)

    console.log(dato)
    // const newPedido = new NewPedido(data)
    // const savePedido = await newPedido.save()
    // console.log(savePedido)
    return new Response(JSON.stringify({ url: "test" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.log(error)
  }
}
