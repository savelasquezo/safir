"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import { IdentificationIcon } from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";


export function Features() {
  return (
    <section className="py-10 px-4">
      <div className="w-3/4 grid grid-cols-2 gap-4 m-auto">
        <div
            className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-600 rounded-xl text-gray-600">
            <span className="absolute -top-6 p-3 border-2 border-gray-600 rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true" className="w-7 h-7 text-yellow-640">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                </path>
            </svg>
        </span>
            <h1 className="my-1 gradient-red text-base uppercase tracking-wide">Mision</h1>
            <p className="py-2 text-center">Some of the components require fews modifications in your Tailwind config or
                CSS file. I obviously give you these instructions alongside the code to make sure the components work
                perfectly.</p>
        </div>
        <div
            className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-600 rounded-xl text-gray-600">
            <span className="absolute -top-6 p-3 border-2 border-gray-600 rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true" className="w-7 h-7 text-yellow-640">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                </path>
            </svg>
        </span>
            <h1 className="my-1 gradient-red text-base uppercase tracking-wide">Vision</h1>
            <p className="py-2 text-center">Some of the components require fews modifications in your Tailwind config or
                CSS file. I obviously give you these instructions alongside the code to make sure the components work
                perfectly.</p>
        </div>
      </div>
      <div className="container mx-auto mt-20 mb-10 text-center" id="quienes-somos">
        <div className="flex w-full flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-8">
            <strong>SAFIR</strong> CON MODALIDAD DE UNA FINTECH
          </Typography>
        </div>
        <Typography variant="lead" className=" !text-gray-800 text-center">
          Ofrecemos productos y servicios financieros innovadores diseñados para satisfacer las necesidades de personas no bancarizadas, utilizando tecnología avanzada para agilizar el proceso de créditos y simplificar trámites, lo que resulta en tiempos de respuesta más rápidos y costos de trámite reducidos para nuestros clientes.
        </Typography>
      </div>
    </section>
  );
}
export default Features;
