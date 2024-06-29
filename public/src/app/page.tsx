'use client';

import React, { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

// import ComponentEjemplo from "@/components/ComponentEjemplo";
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Products from "./productos";
import Testimonials from "./testimonials";
import Slider from "./slider";
import FAQS from "./faqs";


export default function Home() {
  return (
    <SessionProvider>
      <>
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
      </>
    </SessionProvider>
  );
}
