"use client"

import React from 'react';
import { AuthContextProvider } from '@/context/AuthContext';
import '@/styles/globals.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-screen w-screen">
      <head>
        <title>CredMarket</title>
      </head>
      <body className='flex'>
        <AuthContextProvider>
            {children}
            <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
