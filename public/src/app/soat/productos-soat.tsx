"use client";

import React, { useState, useEffect } from 'react';
import SoatItemsCard from "../../components/soat-card";


export function ProductosSoat() {
  const [adminPhone, setAdminPhone] = useState("");
  const [listImages, setListImages] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const keys = ["set_soat1", "set_soat2", "set_soat3"];
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
        "Financia el SOAT y el Tecno de tu carro, moto o cualquier otro vehículo rápido y sin complicaciones.",
      client: "SOAT Y Tecnomecanica",
      title: "",
      route: "",
      img: listImages[0],
      messaje: "Gracias por comunicarse con Safir, por favor infórmanos placa y tipo de vehículo.",
    },
    {
      feedback:
        "Para renovación o primera vez, no dude en contactarnos y continúa con tu movilidad sin preocupaciones.",
      client: "Licencias",
      title: "",
      route: "",
      img: listImages[1],
      messaje: "Gracias por comunicarse con Safir, por favor infórmanos placa y tipo de vehículo.",
    },
    {
      feedback:
        "Si necesita pagar multas de tránsito o cualquier otro servicio vehicular, acérquese a nosotros.",
      client: "Otros Trámites",
      title: "",
      route: "",
      img: listImages[2],
      messaje: "Gracias por comunicarse con Safir, por favor infórmanos placa y tipo de vehículo.",
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
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20 uppercase">
            {ITEMS.map((props, key) => (
              <SoatItemsCard key={key} {...props} />
            ))}
          </div>
        </div>
        <div className="w-full text-center py-8 h-60">
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
export default ProductosSoat;
