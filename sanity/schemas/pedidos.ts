import { defineField, defineType } from "sanity"

export const pedidos = defineType({
  name: "pedidos",
  title: "Pedidos",
  type: "document",

  fields: [
    defineField({
      name: "id_payer",
      title: "id_payer",
      type: "string",
    }),
    {
      name: "id_mercado_pago",
      title: "Id Percado Pago",
      type: "string",
    },
    {
      name: "pedido_pagado",
      title: "Pedido Pagado",
      type: "boolean",
    },
    {
      name: "nombres",
      title: "nombres",
      type: "string",
    },
    {
      name: "apellidos",
      title: "apellidos",
      type: "string",
    },
    {
      name: "email",
      title: "email",
      type: "string",
    },
    {
      name: "documento",
      title: "documento",
      type: "string",
    },
    {
      name: "cart_total",
      title: "cart_total",
      type: "string",
    },
    {
      name: "telefono",
      title: "telefono",
      type: "string",
    },
    {
      name: "distrito",
      title: "distrito",
      type: "string",
    },
    {
      name: "provincia",
      title: "provincia",
      type: "string",
    },
    {
      name: "direccion",
      title: "direccion",
      type: "string",
    },
    {
      name: "comprobante",
      title: "comprobante",
      type: "string",
    },
    {
      name: "info_adicional",
      title: "info_adicional",
      type: "string",
    },
    {
      name: "ruc",
      title: "ruc",
      type: "string",
    },
    // Banner Emprende
  ],
})
