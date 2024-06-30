'use client';

import React, { useEffect } from 'react';
import axios from 'axios';

import { SessionProvider } from 'next-auth/react';
import { Navbar, Footer } from "@/components";
import ProductosSoat from "./productos-soat";

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
      <>
        <Navbar />
        <ProductosSoat />
        <Footer />
      </>
    </SessionProvider>
  );
}
