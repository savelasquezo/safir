"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import CreditItemsCard from "../../components/credits-card";

const ITEMS = [
  {
    feedback:
      "Para independientes y empleados con buen historial de crédito.",
    client: "El Credimillón",
    title: "",
    img: "/image/credimillon.png",
  },
  {
    feedback:
      "Aplica para microempresarios con cualquier actividad económica de servicio, comercio o producción.",
    client: "Crédito Independiente",
    title: "",
    img: "/image/independiente.png",
  },
  {
    feedback:
      "Dirigido a personas que trabajan en negocios comerciales y que no tienen acceso a un crédito formal.",
    client: "Crédito Empleado",
    title: "",
    img: "/image/empleado.png",
  },
  {
    feedback:
      "Crédito dirigido a personas independientes o empleados con reportes menores en centrales de riesgo por sector real o telecomunicaciones.",
    client: "Crédito SAFIR",
    title: "",
    img: "/image/credsafir.png",
  },
  {
    feedback:
      "Para independientes o empleados sin historial de crédito, así podrás iniciar tu vida crediticia.",
    client: "Crédito Oportunidad",
    title: "",
    img: "/image/oportunidad.png",
  },
];

export function Products() {
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
              <CreditItemsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Products;