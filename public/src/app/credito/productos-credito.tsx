"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import CreditItemsCard from "../../components/credits-card";

const ITEMS = [
  {
    feedback:
      "Aplica para microempresarios con cualquier actividad económica de servicio, comercio o producción.",
    client: "Independiente",
    title: "",
    route: "",
    img: "/image/independiente.png",
    messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
  },
  {
    feedback:
      "Dirigido a personas que trabajan en empresas o negocios comerciales y que no tienen acceso a un crédito formal.",
    client: "Empleado",
    title: "",
    route: "",
    img: "/image/empleado.png",
    messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
  },
  {
    feedback:
      "Dirigido a personas con reportes menores en centrales de riesgo por sector real o telecomunicaciones.",
    client: "SAFIR",
    title: "",
    route: "",
    img: "/image/credsafir.png",
    messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
  },
  {
    feedback:
      "Para independientes o empleados sin historial de crédito, así podrás iniciar tu vida crediticia.",
    client: "Oportunidad",
    title: "",
    route: "",
    img: "/image/oportunidad.png",
    messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
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
        <div className="container mx-auto">
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
