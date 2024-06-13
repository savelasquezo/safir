import React from "react";
import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";

interface CreditItemsCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function CreditItemsCard({
  img,
  feedback,
  client,
  title,
}: CreditItemsCardProps) {
  return (
    <Card shadow={true} className="items-center text-center">
      <CardHeader floated={false} className="">
        <img src={img} alt="picture" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {client}
        </Typography>
        <Typography variant="small" className="mb-2 font-medium !text-gray-700">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-800 text-justify"
        >
          {feedback}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default CreditItemsCard;