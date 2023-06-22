'use client';

import React from 'react';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import Burger from '@/ui/Burger';
import Image from 'next/image';
import { destroyCookie } from 'nookies';

export default function GlobalNav({ option, logoutRoute }: {option : Option[], logoutRoute: string}) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    destroyCookie(null, 'credmarket:token', { path: '/' });
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoRedirect = () => {
    router.push('/products');
  };

  const options = React.useMemo(() => {
    return option.map((item) => {
      const arraySlug = item.slug.split("/")

      const isActive = arraySlug[arraySlug.length - 1] === selectedLayoutSegment;

      return (
        <Link
          key={item.slug}
          href={`/${item.slug}`}
          className={`flex h-12 w-[90%] items-center justify-start gap-4 pl-6 text-sm font-medium text-gray2 no-underline transition-colors duration-300 ease-in-out lg:text-backgroundColor ${
            isActive
              ? 'border-l-4 border-primaryColor bg-primaryHover lg:border-backgroundColor'
              : 'hover:border-l-4 hover:border-gray2 hover:bg-grayHover'
          }
          `}
        >
          {item.icon}
          {item.name}
        </Link>
      );
    });
  }, [selectedLayoutSegment]);

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-30 flex h-full w-full max-w-[12rem] flex-col items-center justify-start bg-backgroundColor pb-8 transition-all duration-200 ease-in-out lg:relative lg:bg-primaryColor ${
          isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
        } lg:translate-x-0`}
      >
        <Image
          src="/logo.png"
          alt="MyFin Logo"
          width={160}
          height={160}
          priority
          onClick={handleLogoRedirect}
          className="hidden cursor-pointer lg:block"
        />
        <div className="m-0 flex h-full w-full flex-col items-end justify-between p-0">
          <div className="lg mt-6 flex h-full w-full flex-col items-end justify-start lg:mt-0">
            {options}
          </div>
        </div>
        <div className="flex w-full items-center justify-end">
          <Link
            href={logoutRoute}
            className={`flex h-12 w-[85%] items-center justify-start gap-2 pl-6 text-base font-medium text-gray2 no-underline transition-colors duration-300 ease-in-out hover:border-l-4 hover:border-gray2 hover:bg-primaryHover lg:text-backgroundColor`}
            onClick={handleLogout}
          >
            <LogoutIcon /> Sair
          </Link>
        </div>
      </div>
      <Burger onClick={handleOpen} isOpen={isOpen} />
    </>
  );
}
