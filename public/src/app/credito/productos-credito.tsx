"use client";

import React, { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";
import CreditItemsCard from "../../components/credits-card";

export function Products() {
  const [adminPhone, setAdminPhone] = useState("");
  const [listImages, setListImages] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const keys = ["set_credit1", "set_credit2", "set_credit3", "set_credit4"];
      const images = keys
        .map((key) => {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : null;
        });
      setListImages(images);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const phone = localStorage.getItem("set_phone");
      if (phone) setAdminPhone(JSON.parse(phone));
    }
  }, []);

  const ITEMS = [
    {
      feedback:
        "Aplica para microempresarios con cualquier actividad económica de servicio, comercio o producción.",
      client: "Independiente",
      title: "",
      route: "",
      img: listImages[0],
      messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
    },
    {
      feedback:
        "Dirigido a personas que trabajan en empresas o negocios comerciales y que no tienen acceso a un crédito formal.",
      client: "Empleado",
      title: "",
      route: "",
      img: listImages[1],
      messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
    },
    {
      feedback:
        "Dirigido a personas con reportes menores en centrales de riesgo por sector real o telecomunicaciones.",
      client: "SAFIR",
      title: "",
      route: "",
      img: listImages[2],
      messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
    },
    {
      feedback:
        "Para independientes o empleados sin historial de crédito, así podrás iniciar tu vida crediticia.",
      client: "Oportunidad",
      title: "",
      route: "",
      img: listImages[3],
      messaje: "Gracias por comunicarse con Safir, Por favor infórmanos cuál es tu ocupación y cuánto dinero necesitas.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 w-full">
      <header className="grid !min-h-[4rem] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1"></div>
        </div>
      </header>
      <section className="px-10 !py-10 mt-12 bg-white">
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
        <div className="w-full text-center py-8">
          <p className="text-center text-gray-600 text-base mt-9">
            ¿Todavía tienes preguntas?{' '}
            <a href={`https://wa.me/${adminPhone}`} target="_blank" className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">
              Contacta con nuestro soporte
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
export default Products;
