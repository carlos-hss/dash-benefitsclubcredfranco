"use client"

import GlobalNav from '@/app/GlobalNav';
import { optionsClient } from '@/lib/option';
import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <GlobalNav option={optionsClient} logoutRoute="/login" />
      {children}
    </>
  );
}
