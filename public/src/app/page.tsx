'use client';

import React, { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

import ComponentEjemplo from "@/components/ComponentEjemplo";

export default function Home() {
  return (
    <SessionProvider>
      <main className='w-full h-full'>
        <ComponentEjemplo />
      </main>
    </SessionProvider>
  );
}
