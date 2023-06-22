"use client"

import React from 'react';
import '@/styles/globals.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
        <ToastContainer />
    </>
  );
}
