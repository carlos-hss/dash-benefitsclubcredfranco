'use client';

import React from 'react';
import MUIButton from '@mui/material/Button';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type,
  isLoading,
  disabled
}: ButtonProps) {
  return (
    <MUIButton
      variant="contained"
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      sx={{
        backgroundColor: '#2b6efd !important',
        color: '#FFFFFF',
        textTransform: 'capitalize',
        fontWeight: 700,
        fontSize: '1rem',
        transition: 'all 0.2s ease-in-out',
        ':disabled': {
          backgroundColor: '#97A4AF !important',
        },

        '&:hover': {
          opacity: 0.9,
        },
      }}
    >
      {isLoading ? (
        <Image
          src="/loading.png"
          alt="Loading Icon"
          width={25}
          height={25}
          className="animate-spin"
        />
      ) : (
        children
      )}
    </MUIButton>
  );
}
