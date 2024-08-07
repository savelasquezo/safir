"use client";

import React, { useState, useEffect } from 'react';
import { NextResponse } from 'next/server';
import CircleLoader from 'react-spinners/CircleLoader';

import { Typography, IconButton, Button, Input, Textarea } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [adminAddress, setAdminAddress] = useState("");
  const [adminNequi, setAdminNequi] = useState("");
  const [adminBancolombia, setAdminBancolombia] = useState("");
  const [adminAttention, setAdminAttention] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const address = localStorage.getItem("set_address");
      const nequi = localStorage.getItem("set_nequi");
      const bancolombia = localStorage.getItem("set_bancolombia");
      const attention = localStorage.getItem("set_attention");

      if (address) setAdminAddress(JSON.parse(address));
      if (nequi) setAdminNequi(JSON.parse(nequi));
      if (bancolombia) setAdminBancolombia(JSON.parse(bancolombia));
      if (attention) setAdminAttention(JSON.parse(attention));
    }
  }, []);
  
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/app/v1/manager/send-message/`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });
  
      const data = res.headers.get('content-type')?.includes('application/json') ? await res.json() : {};
      if (!data.error) {
        setRegistrationSuccess(true);
      }
    } catch (error) {
      return NextResponse.json({ error: 'There was an error with the network request' }, { status: 500 });
    }
    setLoading(false);
  }

  const isFormValid = email !== "" && subject !== "" && message !== "";

  return (
    <footer className="mt-10 pb-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto" id="fin">
        <div className="grid justify-between sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="w-10/12 text-center md:text-left">
            <form className="w-full h-full">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">Correo</Typography>
                <Input size="lg" type="email" id="email" value={email} className=" !border-blue-gray-300 focus:!border-gray-100" color="white"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="nombre@mail.com"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin=""
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Asunto
                </Typography>
                <Input
                  size="lg"
                  id="subject"
                  value={subject}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSubject(event.target.value);
                  }}
                  placeholder="Asunto..."
                  className=" !border-blue-gray-300 focus:!border-gray-100"
                  color="white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin=""
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Mensaje
                </Typography>
                <Textarea
                  size="lg"
                  id="message"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  placeholder="Mensaje..."
                  rows={2}
                  resize={true}
                  className="min-h-full !border-blue-gray-300 focus:!border-gray-100 text-white"
                  color="red"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              {registrationSuccess ? (
                    <Button color="green" className="mt-4" fullWidth onClick={handleSubmit}>
                    Enviado
                  </Button>
                ) : (
                loading ? (
                  <button type="button" className="mt-4 h-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full text-center flex items-center justify-center">
                    <CircleLoader loading={loading} size={25} color="#1c1d1f" />
                  </button>
                ) : (
                  <Button color="white" className="mt-4" fullWidth onClick={handleSubmit} disabled={!isFormValid}>
                    Enviar
                  </Button>
                )
              )}
            </form>
          </div>
          <div className="w-1/3 mt-8 flex flex-col justify-center gap-y-8 md:mt-0 md:w-auto">
            <div className="flex flex-col">
              <Typography color="white" className="mb-4 uppercase text-sm lg:text-lg font-semibold font-cocogoose">Horarios de Atención:</Typography>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold text-sm lg:text-base font-cocogoose">Chinchina:</Typography>
                <Typography color="white" className="mb-2 font-normal text-xs lg:text-sm ">
                  {adminAttention}
                </Typography>
              </span>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold">Virtual:</Typography>
                <Typography color="white" className="mb-2 font-normal text-xs lg:text-sm ">
                  Whatsapp -- {adminAttention}
                </Typography>
              </span>
            </div>
            <div className="flex flex-col">
              <Typography color="white" className="mb-4 uppercase text-sm lg:text-lg font-semibold font-cocogoose">Medios de Pago</Typography>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold text-sm lg:text-base font-cocogoose">Nequi</Typography>
                <Typography color="white" className="mb-2 font-normal text-xs lg:text-sm ">
                  {adminNequi}
                </Typography>
              </span>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold text-sm lg:text-base font-cocogoose">Bancolombia:</Typography>
                <Typography color="white" className="mb-2 font-normal text-xs lg:text-sm ">
                  {adminBancolombia}
                </Typography>
              </span>
              <span className="flex flex-row items-center justify-start">
              <Typography color="white" className="mb-2 mx-4 uppercase font-semibold text-sm lg:text-base font-cocogoose">Oficina:</Typography>
                <Typography color="white" className="mb-2 font-normal text-xs lg:text-sm ">
                  {adminAddress}
                </Typography>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <ul className="flex flex-wrap items-center justify-center md:justify-start">
            <li key={1}>
              <Typography
                as="a"
                href="/#"
                color="white"
                className={`py-1 font-medium transition-colors pr-3`}
              >
                Inicio
              </Typography>
            </li>
            <li key={2}>
              <Typography
                as="a"
                href="/#servicios"
                color="white"
                className={`py-1 font-medium transition-colors px-3`}
              >
                Servicios
              </Typography>
            </li>
            <li key={3}>
              <Typography
                as="a"
                href="/#quienes-somos"
                color="white"
                className={`py-1 font-medium transition-colors px-3`}
              >
                ¿Quiénes somos?
              </Typography>
            </li>
            <li key={4}>
              <Typography
                as="a"
                href="#fin"
                color="white"
                className={`py-1 font-medium transition-colors px-3`}
              >
                Contáctanos
              </Typography>
            </li>
          </ul>
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} {" "}
            <a href="/#">
              SAFIR.
            </a>{" "}
            Todos los derechos reservados.{" "}
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-tiktok text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
