'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Navbar, Footer } from "@/components";

// sections
import ProductosSoat from "./productos-soat";

export default function Home() {
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
