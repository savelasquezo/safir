"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";

const TESTIMONIALS = [
  {
    feedback:
      "Han sido un gran apoyo para mi negocio. Su experiencia me ha dado mucha confianza. Recomiendo de corazón sus servicios.",
    client: "Angélica Gómez",
    title: "Microempresaria",
    img: "/image/cliente1.jpg",
  },
  {
    feedback:
      "Entendieron mis necesidades y estuvieron prestos a ayudarme con mucha amabilidad, siempre me escucharon y mostraron su compromiso en darme el mejor producto según mis necesidades.",
    client: "Juan Pérez",
    title: "Tendero",
    img: "/image/cliente2.jpg",
  },
  {
    feedback:
      "Superaron mis expectativas. La velocidad con la que solucionaron mi solicitud dan muestra de su eficacia, los seguiré buscando en el futuro.",
    client: "Jhonatan Vásquez",
    title: "Transportador",
    img: "/image/cliente3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-10">
      <div className="container mx-auto">
        <div className="mb-10 flex w-full flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-1 uppercase">
            Testimonios
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
