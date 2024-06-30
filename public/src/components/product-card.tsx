import React from "react";
import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { ItemsCardProps } from '@/lib/types/types';

const ProductsCard: React.FC<ItemsCardProps> = ({ img, feedback, client, title, route }) => {
  const openInNewTab = client === "Credimillon";

  return (
    <a href={route} target={openInNewTab ? "_blank" : "_self"} rel="noopener noreferrer" className="shadow-2xl hover:scale-105 transition-transform duration-500">
      <Card shadow={true} className="items-center text-center">
        <CardHeader floated={false} className=""><img src={img} alt="" /></CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">{client}</Typography>
          <Typography variant="small" className="mb-2 font-medium !text-gray-700">{title}</Typography>
          <Typography variant="paragraph" className="mb-5 font-normal !text-gray-800 text-justify">
            {feedback}
          </Typography>
        </CardBody>
      </Card>
    </a>
  );
}

export default ProductsCard;