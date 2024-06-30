import React, { useState, useEffect } from 'react';
import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";

import { ItemsCardProps } from '@/lib/types/types';

const CreditItemsCard: React.FC<ItemsCardProps> = ({ img, feedback, client, title, messaje }) => {
  const [adminPhone, setAdminPhone] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const phone = localStorage.getItem("set_phone");
      if (phone) setAdminPhone(JSON.parse(phone));
    }
  }, []);

  return (
    <a href={`https://wa.me/${adminPhone}?text=${encodeURIComponent(messaje)}`} target="_blank" className="shadow-2xl hover:scale-105 transition-transform duration-500">
      <Card shadow={true} className="items-center text-center">
        <CardHeader floated={false} className="">
          <img src={img} alt="picture" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="uppercase">
            {client}
          </Typography>
          <Typography variant="small" className="mb-2 font-medium !text-gray-700">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="mb-5 font-normal !text-gray-800 text-justify">
            {feedback}
          </Typography>
        </CardBody>
      </Card>
    </a>
  );
}

export default CreditItemsCard;