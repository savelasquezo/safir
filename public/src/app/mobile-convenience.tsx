"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "24/7",
    description: "Soporte",
  },
  {
    title: "5/5",
    description: "Calificación de nuestros asesores",
  },
];

function useInterval(callback: any, delay: number) {
  const savedCallback = useRef<any | undefined>();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
    savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function MobileConvenience() {

  const [numSoat, setNumSoat] = useState(0);
  const [numCreditos, setNumCreditos] = useState(0);
  const [conteoTerminado, setConteoTerminado] = useState(false);

  useInterval(() => {
    if (conteoTerminado && numSoat < 200) {
      setNumSoat(numSoat + 1);
    }
  }, 10);

  useInterval(() => {
    if (conteoTerminado && numCreditos < 500) {
      setNumCreditos(numCreditos + 1);
    }
  }, 1);

  return (
    <section className="py-10 px-8" onMouseEnter={() => {setConteoTerminado(true)}}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/investment-fund.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Cifras confiables
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Los mejores en lo que hacemos.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            <InfoCard key={10} title={`${numSoat.toString()} +`}>{"SOAT expedidos"}</InfoCard>
            <InfoCard key={50} title={`${numCreditos.toString()} +`}>{"Créditos desembolsados"}</InfoCard>
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;
