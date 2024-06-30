"use client";

import React, { useState, useEffect } from 'react';
import SoatItemsCard from "../../components/soat-card";

const ITEMS = [
  {
    feedback:
      "Financia el SOAT y el Tecno de tu carro, moto o cualquier otro vehículo rápido y sin complicaciones.",
    client: "SOAT Y Tecnomecanica",
    title: "",
    route: "",
    img: "/image/soat1.webp",
    messaje: "Hola Safir! Estoy interesado en adquirir sus productos.",
  },
  {
    feedback:
      "Para renovación o primera vez, no dude en contactarnos y continúa con tu movilidad sin preocupaciones.",
    client: "Licencias",
    title: "",
    route: "",
    img: "/image/soat2.webp",
    messaje: "Hola Safir! Estoy interesado en adquirir sus productos.",
  },
  {
    feedback:
      "Si necesita pagar multas de tránsito o cualquier otro servicio vehicular, acérquese a nosotros.",
    client: "Otros Trámites",
    title: "",
    route: "",
    img: "/image/soat3.webp",
    messaje: "Hola Safir! Estoy interesado en adquirir sus productos.",
  },
];

export function ProductosSoat() {
  const [adminPhone, setAdminPhone] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const phone = localStorage.getItem("set_phone");
      if (phone) setAdminPhone(JSON.parse(phone));
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[4rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1"></div>
        </div>
      </header>
      <section className="px-10 !py-10 mt-12">
        <div className="container mx-auto" id="servicios">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20 uppercase">
            {ITEMS.map((props, key) => (
              <SoatItemsCard key={key} {...props} />
            ))}
          </div>
        </div>
        <div className="w-full text-center py-8">
          <p className="text-center text-gray-600 text-base mt-9">
            ¿Todavía tienes preguntas?{' '}
            <a href={`https://wa.me/${adminPhone}`} target="_blank"  className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">
              Contacta con nuestro soporte
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
export default ProductosSoat;
