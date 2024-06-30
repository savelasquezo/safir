"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-tailwind/react";
import TestimonialCard from "../components/testimonial-card";
import { TestimonialProps } from "@/lib/types/types";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/app/v1/manager/fetch-testimonials/`
        );
        setTestimonials(response.data.results);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="px-10 py-10">
      <div className="container mx-auto">
        <div className="mb-10 flex w-full flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-1 uppercase">
            Testimonios
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
