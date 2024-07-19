"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid";


export function Terminos() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[4rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1"></div>
        </div>
      </header>
      <section className="py-10 px-4">
        <div className="container mx-auto mb-10 text-center">
          <div className="flex w-full flex-col items-center">
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
              <DocumentMagnifyingGlassIcon className="h-6 w-6" />
            </div>
            <Typography variant="h2" color="blue-gray" className="mb-8">
              REQUISITOS GENERALES DE CRÉDITO
            </Typography>
          </div>
          <ul className="list-disc">
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Presentar Cedula de ciudadanía original contraseña o documento de identificación.
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Vivir dentro de la zona de cobertura de atención.
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Visita del asesor comercial designado a la zona de atención.
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Edad mínima de 18 años máxima de 75 años.
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Actividad como independiente o empleado constante y verificada mínima de 3 meses.
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Consulta en centrales de Riesgo (Data crédito).
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                2 referencias, una personal y una familiar que no viva con el cliente.
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Entregar la información solicitada por el asesor.
              </Typography>
            </li>
            <li className="mx-auto w-full px-4 lg:px-2 lg:w-10/12">
              <Typography
                variant="lead"
                className=" !text-gray-800 text-justify"
              >
                Firma de contrato de crédito y pagaré de SAFIR.
              </Typography>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Terminos;
