"use client";
// import Image from "next/image";
// import { Button } from "@material-tailwind/react";
// @ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

/* export function FixedPlugin() {
  return (
    <a href="https://wa.me/+573126067813" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://web.whatsapp.com/favicon/1x/favicon/"
        />{" "}
        Chatea con nosotros
      </Button>
    </a>
  );
}*/

export function FixedPlugin() {
	return (
		<WhatsAppWidget
			phoneNo="573126067813"
			position="right"
			widgetWidth="250px"
			widgetWidthMobile="220px"
			autoOpen={true}
			autoOpenTimer={15000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="40"
			iconColor="white"
			iconBgColor="green"
			headerIcon=""
			headerIconColor="black"
			headerTxtColor="white"
			headerBgColor="black"
			headerTitle="Safir"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Asesora"
			chatMessage={<>Hola 👋 <br />¿En qué le podemos colaborar?</>}
			footerBgColor="#999"
			placeholder="Escribe aquí..."
			btnBgColor="green"
			btnTxt="Enviar mensaje"
			btnTxtColor="white"
		/>
	);
};

// export default FixedPlugin;