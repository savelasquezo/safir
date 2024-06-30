import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { TestimonialProps } from "@/lib/types/types";

export function TestimonialCard({
  file,
  full_name,
  job,
  date,
  testimonial,
}: TestimonialProps) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardBody>
        <Avatar src={file} className="mb-3" alt="" size="xxl" />
        <Typography variant="h6" color="blue-gray">
          {full_name}
        </Typography>
        <Typography variant="small" className="mb-3 font-medium !text-gray-700">
          {job}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-800 text-center lowercase text-sm">
          &quot;{testimonial}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;
