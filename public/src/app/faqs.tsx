"use client";

import React from "react";
import { Typography, Card, CardHeader, CardBody } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";

const FAQS = [
  {
    title: "¿Qué necesito para acceder a los servicios?",
    desc: "Si es trabajador independiente que pueda demostrar al menos 3 mese de funcionamiento y constancia en su negocio, con edad superios a 20 años y de fácil ubicación.",
  },
  {
    title: "¿Necesitas mejorar tu puntaje e historial crediticio?",
    desc: "Aquí te brindamos toda la información y la asesoría pertinente para que puedas mejorar tanto tu puntaje como historial crediticio.",
  },
  {
    title: "¿Necesitas resolver problemas en mora, que no sabes quién te ha reportado?",
    desc: "En SAFIR también te damos el servicio de asesoría financiera y jurídica para que puedas resolver tus reportes en mora y así mejorar tu vida crediticia.",
  },
];

export function Faqs() {
  return (
    <section className="px-8">
      <div className="flex justify-center items-center">
        <Carousel transition={{ duration: 1 }} loop={true} className="rounded-xl max-w-lg max-h-lg"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="container max-w-6xl mx-auto py-20">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Preguntas Frecuentes
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-700 lg:w-3/5"
          >
            Si necesita una mejor asesoría, no dude en contactarnos.
          </Typography>
        </div>

        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-1">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent" className="w-full flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none pt-6"
              >
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              </CardHeader>
              <CardBody>
                <div className="pt-0">
                  <Typography className="font-normal !text-gray-600">
                    {desc}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
