"use client";

import React from "react";
import { Typography, IconButton, Button, Input, Textarea } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {

  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async () => {
    console.log(email);
    console.log(subject);
    console.log(message);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/app/v1/accounts/send-message/`, 
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
        // setRegistrationSuccess(true);
      }
    } catch (error) {
      // return NextResponse.json({ error: 'There was an error with the network request' }, { status: 500 });
    }
  }

  return (
    <footer className="mt-10 pb-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto" id="fin">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-1/3 text-center md:text-left">
            <form className="max-w-screen-lg sm:w-96">
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
              <Button color="white" className="mt-8" fullWidth onClick={handleSubmit}>
                Enviar
              </Button>
            </form>
          </div>
          <div className="w-2/3 mt-8 flex flex-col justify-center gap-y-8 md:mt-0 md:w-auto">
            <div className="flex flex-col">
              <Typography color="white" className="mb-4 uppercase text-lg font-semibold">Horarios de Atencion:</Typography>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold">Chinchina:</Typography>
                <Typography color="white" className="mb-2 font-normal text-sm">
                  Cra. 8 No. 9-07 -- Lunes a Sabado 8am a 6pm 
                </Typography>
              </span>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold">Virtual:</Typography>
                <Typography color="white" className="mb-2 font-normal text-sm">
                  Whatsapp Lunes a Domingo 6am - 9pm
                </Typography>
              </span>
            </div>
            <div className="flex flex-col">
              <Typography color="white" className="mb-4 uppercase text-lg font-semibold">Medios Autorizados</Typography>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold">Nequi </Typography>
                <Typography color="white" className="mb-2 font-normal text-sm">
                  3126067813
                </Typography>
              </span>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold">Bancolombia:</Typography>
                <Typography color="white" className="mb-2 font-normal text-sm">
                  Cuenta de Ahorros No. 706-000018-42
                </Typography>
              </span>
              <span className="flex flex-row items-center justify-start">
                <Typography color="white" className="mb-2 mx-4 uppercase font-semibold">Oficina:</Typography>
                <Typography color="white" className="mb-2 font-normal text-sm">
                  Carrera 8 No. 9-07 Cooworking
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
