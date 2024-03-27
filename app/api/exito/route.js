import mercadopago from "mercadopago"

mercadopago.configure({
  access_token: `${process.env.ACCESS_TOKEN_MERCADO}`,
})
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const topic = searchParams.get("collection_id")
  console.log(topic)
  fetch(`https://api.mercadopago.com/v1/payments/${topic}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN_MERCADO}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result)
    })
}
