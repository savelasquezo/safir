"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Safir
            </Typography>
            <Typography variant="lead" className="mb-7 !text-white md:pr-16 xl:pr-28">
              Servicio de Asesorías y Fortalecimiento a empleados e independientes de la regiion.
            </Typography>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/build-arrow.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            ¿Qué es SAFIR?
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-700 lg:w-5/12 text-justify"
          >
            Es una empresa de servicios de asesoría y fortalecimiento a personas que
            trabajan de forma independiente en negocios de servicio, comercio o producción.
            También atendemos empleados formales e informales que no tienen la posibilidad de acceder
            a un préstamo bancario, brindando la opción de hacer historial de crédito con nuestro productos.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
