import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

import { GrMoney } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { PiIdentificationBadge } from "react-icons/pi";
import { TbStars } from "react-icons/tb";

export function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <Card color="transparent" shadow={false} className="px-4 py-1 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardBody className="grid px-0">
        <Typography variant="h2" color="blue-gray" className="mb-2 flex flex-row justify-start items-center gap-x-2">
          <span className="">{icon}</span>
          {title}
        </Typography>
        <Typography className=" font-normal">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;