'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { SessionProvider, useSession } from 'next-auth/react';
import { Navbar, Footer } from "@/components";

import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Products from "./productos";
import Testimonials from "./testimonials";
import Slider from "./slider";
import FAQS from "./faqs";

export default function Home() {
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_URL}/app/v1/manager/fetch-settings/`);
        const settings = response.data;
        Object.entries(settings).forEach(([key, value]) => {
          localStorage.setItem(`set_${key}`, JSON.stringify(value));
        });
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  },);

  return (
    <SessionProvider>
      <main className='h-full w-full bg-gray-50'>
        <Navbar />
        <Hero />
        <Products />
        <Feature />
        <MobileConvenience />
        <VideoIntro />
        <Testimonials />
        <Slider />
        <FAQS />
        <Footer />
      </main>
    </SessionProvider>
  );
}
