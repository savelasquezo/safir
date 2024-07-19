import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { imageLoader } from '@/utils/imageConfig';
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { ImagenSlider } from '@/lib/types/types';

const Slider: React.FC = () => {
  const [imagenSliders, setImagenSliders] = useState<ImagenSlider[]>([]);

  useEffect(() => {
    const fetchImagenSliders = async () => {
      try {
        const res = await axios.get<{ results: ImagenSlider[] }>(`${process.env.NEXT_PUBLIC_APP_API_URL}/app/v1/manager/fetch-sliders/`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setImagenSliders(res.data.results); // Extracting 'results' array from response
      } catch (error) {
        console.error('Error fetching sliders:', error);
      }
    };

    fetchImagenSliders();
  }, []);

  return (
    <div className="w-screen h-auto mx-0">
      <div id="default-carousel" className="relative" data-carousel="slide">
        <div className={`overflow-hidden relative z-0 h-44 md:h-80 lg:h-[calc(100vh-112px)]`}>
          <Suspense fallback={null}>
            {imagenSliders?.length > 0 ? (
              <Carousel slide={true} slideInterval={3000} indicators={false} className='w-full h-full px-12'
                rightControl={<svg className="w-5 h-5 text-gray-400 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>}
                leftControl={<svg className="w-5 h-5 text-gray-400 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>}>
                {imagenSliders?.map((imagenSlider, i) => (
                  <Image key={i} width={3000} height={2000} src={imagenSlider?.file} loader={imageLoader} priority={true} className="w-auto h-full bg-contain" alt=""/>
                ))}
              </Carousel>
              ) : null}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Slider;
