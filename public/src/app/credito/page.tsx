'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Navbar, Footer } from "@/components";

// sections
import Products from "./productos-credito";

export default function Home() {
  return (
    <SessionProvider>
      <>
        <Navbar />
        <Products />
        <Footer />
      </>
    </SessionProvider>
  );
}
