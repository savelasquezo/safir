"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
// import { UserPlusIcon } from "@heroicons/react/24/solid";
// import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Servicios Fintech <br /> Hechos a su Medida
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Servicio de Asesorías y Fortalecimiento a independientes
              de la Región.
            </Typography>
            { /*
            <Typography className="mb-4" color="white" variant="h6">
              ¿Qué deseas hacer?
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
                Iniciar Sesión
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <UserPlusIcon className="h-6 w-6" />
                Registrarme
              </Button>
            </div>
             */ }
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
            También atendemos empleados informales que no tienen la posibilidad de acceder
            a un préstamo bancario, dando la opción de hacer vida crediticia con nuestro crédito.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
