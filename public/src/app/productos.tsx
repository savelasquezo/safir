"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import ProductsCard from "../components/product-card";

const TESTIMONIALS = [
  {
    feedback:
      "Financia el SOAT de tu carro o moto, rápido y sin complicaciones.",
    client: "SOAT",
    title: "",
    img: "/image/soat1.webp",
    route: "/soat",
  },
  {
    feedback:
      "Para independientes y empleados con buen historial de crédito.",
    client: "Líneas de Crédito",
    title: "",
    img: "/image/credito1.webp",
    route: "/credito",
  },
  {
    feedback:
      "Conozca lo que se necesita para hacer uso de nuestros excelentes servicios.",
    client: "Credimillon",
    title: "",
    img: "/image/credimillon1.webp",
    route: "/terminos",
  },
];

export function Products() {
  return (
    <section className="px-10 !py-10">
      <div className="container mx-auto" id="servicios">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <ProductsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Products;
