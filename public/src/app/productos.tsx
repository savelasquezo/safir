"use client";

import React, { useState, useEffect } from 'react';

import { Typography } from "@material-tailwind/react";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import ProductsCard from "../components/product-card";

export function Products() {
  const [adminPhone, setAdminPhone] = useState("");

  const [listImages, setListImages] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const keys = ["set_product1", "set_product2", "set_product3"];
      const images = keys
        .map((key) => {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : null;
        }); 
      setListImages(images);
    }
  }, []);

  const messaje = "Gracias por comunicarse con Safir, Por favor infórmanos en que municipio vives y con quien has tenido historial de créditos.";

  const DATA = [
    {
      feedback:
        "Financia el SOAT y Tecno de tu carro o moto, rápido y sin complicaciones.",
      client: "SOAT y Tecnomecanica",
      title: "",
      img: listImages[0],
      route: "/soat",
      messaje: "",
    },
    {
      feedback:
        "Para independientes y empleados con buen historial de crédito.",
      client: "Líneas de Crédito",
      title: "",
      img: listImages[1],
      route: "/credito",
      messaje: "",
    },
    {
      feedback:
        "Un millón en una hora, cupo rotativo dirigido a personas con historial crediticio positivo.",
      client: "Credimillon",
      title: "",
      img: listImages[2],
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
    <section className="px-10 !py-10" id="servicios">
      <div className="container mx-auto">
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
