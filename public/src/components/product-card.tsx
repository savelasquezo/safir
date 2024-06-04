import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";

interface ProductsCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function ProductsCard({
  img,
  feedback,
  client,
  title,
}: ProductsCardProps) {
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
        { /*
          <a href="#">
          <Button color="gray" size="sm" className="ml-auto">
            Saber más
          </Button>
        </a>
        */ }
      </CardBody>
    </Card>
  );
}

export default ProductsCard;