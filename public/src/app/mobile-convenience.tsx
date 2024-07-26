"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

import { TbReportAnalytics } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { PiIdentificationBadge } from "react-icons/pi";
import { TbStars } from "react-icons/tb";

function useInterval(callback: any, delay: number) {
  const savedCallback = useRef<any | undefined>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

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
  const [numClients, setnumClients] = useState(0);
  const [numQualification, setnumQualification] = useState(0);

  const [conteoTerminado, setConteoTerminado] = useState(false);

  useInterval(() => {
    if (conteoTerminado && numSoat < 125) {
      setNumSoat(numSoat + 5);
    }
  }, 10);

  useInterval(() => {
    if (conteoTerminado && numCreditos < 2850) {
      setNumCreditos(numCreditos + 25);
    }
  }, 10);

  useInterval(() => {
    if (conteoTerminado && numClients < 1320) {
      setnumClients(numClients + 15);
    }
  }, 10);

  useInterval(() => {
    if (conteoTerminado && numQualification < 5) {
      setnumQualification(numQualification + 1);
    }
  }, 10);


  return (
    <section className="py-2 px-8" onMouseEnter={() => {setConteoTerminado(true)}}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
        <Image
          width={2816}
          height={4000}
          src="/image/financial-elements-data.webp"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 mask-image-80 hiiden md:block"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4 flex flex-row justify-start items-center uppercase font-cocogoose">
            <TbReportAnalytics/>
            Cifras confiables
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left text-xl !text-gray-700 lg:px-0  ">
            Los mejores en lo que hacemos.
          </Typography>
          <div className="col-span-2 grid gap-5 grid-cols-2">
            <InfoCard icon={<GrMoney/>} title={`${numCreditos.toString()} +`}>{"Préstamos desembolsados"}</InfoCard>
            <InfoCard icon={<FaUserFriends/>} title={`${numClients.toString()} +`}>{"Clientes atendidos"}</InfoCard>
            <InfoCard icon={<PiIdentificationBadge/>} title={`${numSoat.toString()} +`}>{"SOAT expedidos"}</InfoCard>
            <InfoCard icon={<TbStars/>} title={`${numQualification.toString()}/5`}>{"Calificación del servicio"}</InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;


