"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import SoatItemsCard from "../../components/soat-card";

const ITEMS = [
  {
    feedback:
      "Financia el SOAT de tu carro, moto o cualquier otro vehículo rápido y sin complicaciones.",
    client: "SOAT",
    title: "",
    img: "/image/soat1.webp",
  },
  {
    feedback:
      "Para renovación o primera vez, no dude en contactarnos y continúa con tu movilidad sin preocupaciones.",
    client: "Licencia de conducción",
    title: "",
    img: "/image/soat2.webp",
  },
  {
    feedback:
      "Si necesita pagar multas de tránsito o cualquier otro servicio vehicular, sólo acérquese a nosotros y permítanos colaborarle.",
    client: "Otros trámites",
    title: "",
    img: "/image/soat3.webp",
  },
];

export function ProductosSoat() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[4rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1"></div>
        </div>
      </header>
      <section className="px-10 !py-10">
        <div className="container mx-auto" id="servicios">
          <div className="mb-10 flex w-full flex-col items-center">
            <Typography variant="h2" color="blue-gray" className="mb-2">
              Nuestros Productos
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
            {ITEMS.map((props, key) => (
              <SoatItemsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProductosSoat;
