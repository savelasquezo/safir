'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Navbar, Footer } from "@/components";

// sections
import Terminos from "./terminos";

export default function Home() {
  return (
    <SessionProvider>
      <>
        <Navbar />
        <Terminos />
        <Footer />
      </>
    </SessionProvider>
  );
}
