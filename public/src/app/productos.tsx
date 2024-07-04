"use client";

import React, { useState, useEffect } from 'react';

import { Typography } from "@material-tailwind/react";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import ProductsCard from "../components/product-card";

export function Products() {
  const [adminPhone, setAdminPhone] = useState("");
  const messaje = "Gracias por comunicarse con Safir, Por favor infórmanos en que municipio vives y con quien has tenido historial de créditos.";

  const DATA = [
    {
      feedback:
        "Financia el SOAT y Tecno de tu carro o moto, rápido y sin complicaciones.",
      client: "SOAT y Tecnomecanica",
      title: "",
      img: "/image/soat1.webp",
      route: "/soat",
      messaje: "",
    },
    {
      feedback:
        "Para independientes y empleados con buen historial de crédito.",
      client: "Líneas de Crédito",
      title: "",
      img: "/image/credito1.webp",
      route: "/credito",
      messaje: "",
    },
    {
      feedback:
        "Un millón en una hora, cupo rotativo dirigido a personas con historial crediticio positivo.",
      client: "Credimillon",
      title: "",
      img: "/image/credimillon1.webp",
      route: `https://wa.me/${adminPhone}?text=${messaje}`,
      messaje: "",
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const phone = localStorage.getItem("set_phone");
      if (phone) setAdminPhone(JSON.parse(phone));
    }
  }, []);

  return (
    <section className="px-10 !py-10">
      <div className="container mx-auto" id="servicios">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {DATA.map((props, key) => (
            <ProductsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Products;
