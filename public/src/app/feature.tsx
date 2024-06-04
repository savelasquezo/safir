"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  IdentificationIcon,
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Asesores Expertos",
    children:
      "Encuentre el personal más capacitado, presto a solucionar cualquiera de sus inquietudes.",
  },
  {
    icon: HeartIcon,
    title: "Interacción Personalizada",
    children:
      "Siempre encontrará personas amables y serviciales, con respuestas claras a sus requerimientos.",
  },
  {
    icon: LockClosedIcon,
    title: "Logra tus metas",
    children:
      "Nuestros esfuerzos estarán enfocados a que cumpla con sus metas planeadas en el menor tiempo posible.",
  },
  {
    icon: LightBulbIcon,
    title: "Ideas renovadas",
    children:
      "Sabemos que el mundo cambia a diario, por eso nuestro equipo innova constantemente para ofrecerle lo mejor a nuestros clientes.",
  },
];

export function Features() {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto mb-10 text-center" id="quienes-somos">
        <div className="flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <IdentificationIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-8">
            <strong>SAFIR</strong> CON MODALIDAD DE UNA FINTECH
          </Typography>
        </div>
        <ul className="list-disc">
          <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
            <Typography
              variant="lead"
              className=" !text-gray-800 text-justify"
            >
              Ofrecemos productos y servicios financieros a personas no bancarizadas.
            </Typography>
          </li>
          <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
            <Typography
              variant="lead"
              className=" !text-gray-800 text-justify"
            >
              Usamos tecnología en el proceso de créditos.
            </Typography>
          </li>
          <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
            <Typography
              variant="lead"
              className=" !text-gray-800 text-justify"
            >
              Aminora trámites y procesos a los clientes.
            </Typography>
          </li>
          <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
            <Typography
              variant="lead"
              className=" !text-gray-800 text-justify"
            >
              Reduce los tiempos de respuesta y costos de trámite.
            </Typography>
          </li>
        </ul>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
