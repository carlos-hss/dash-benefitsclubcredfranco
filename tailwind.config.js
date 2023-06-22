/** @type {import('tailwindcss').Config} */

export const content = [
  './app/**/*.{js,ts,jsx,tsx}',
  './ui/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './public/**/*.{js,ts,jsx,tsx}'
];

export const theme = {
  extend: {
    colors: {
      white: '#ffffff',
      primaryColor: '#316fea',
      gray1: '#97A4AF',
      gray2: '#60676d',
      gray3: '#1E2022',
      primaryHover: '#316fea40',
      grayHover: '#97A4AF1A',
      contentColor: '#ffffff',
      backgroundColor: '#F2F4F8',
      textColor: '#9da1ad',
      red: '#f54c5d',
      green: '#2aebad',
    },
    backgroundImage: { login: "url('/background.jpg')" },
  },
};
