import React, { useState, useEffect } from 'react';
import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { ItemsCardProps } from "@/lib/types/types";

const SoatItemsCard: React.FC<ItemsCardProps> = ({ img, feedback, client, title, messaje}) => {
  const [adminPhone, setAdminPhone] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const phone = localStorage.getItem("set_phone");
      if (phone) setAdminPhone(JSON.parse(phone));
    }
  }, []);

  return (
    <a href={`https://wa.me/${adminPhone}?text=${encodeURIComponent(messaje)}`} target="_blank">
      <Card shadow={true} className="items-center text-center">
        <CardHeader floated={false}>
          <img src={img} alt="picture" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">{client}</Typography>
          <Typography variant="small" className="mb-2 font-medium !text-gray-700">{title}</Typography>
          <Typography variant="paragraph" className="mb-5 font-normal !text-gray-800 text-center lowercase">
            {feedback}
          </Typography>
        </CardBody>
      </Card>
    </a>
  );
}

export default SoatItemsCard;
