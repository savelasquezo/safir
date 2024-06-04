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
    img: "/image/avatar1.png",
  },
  {
    feedback:
      "Para independientes y empleados con buen historial de crédito.",
    client: "El Credimillón",
    title: "Un millón en una hora",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "Crédito dirigido a personas independientes o empleados con reportes menores en data crédito.",
    client: "Crédito SAFIR",
    title: "",
    img: "/image/avatar3.jpg",
  },
];
/* const TESTIMONIALS = [
  {
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Jessica Devis",
    title: "CEO @ MARKETING DIGITAL LTD.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Mary Joshiash",
    title: "MARKETING @ APPLE INC.",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Marcell Glock",
    title: "CFO @ APPLE INC..",
    img: "/image/avatar3.jpg",
  },
]; */

export function Products() {
  return (
    <section className="px-10 !py-10">
      <div className="container mx-auto" id="servicios">
        <div className="mb-10 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <BuildingOffice2Icon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Nuestros servicios
          </Typography>
        </div>
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
