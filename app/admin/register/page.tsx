'use client';

import React from 'react';
import Button from '@/ui/Button';
import InputIcon from '@/ui/InputIcon';
import InputPassword from '@/ui/InputPassword';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import SwitchBlue from '@/ui/Switch';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const year = new Date().getFullYear();
  const { register, handleSubmit } = useForm();
  const { registerUser } = useAuthContext();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [acceptConditions, setAcceptConditions] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (data: any) => {
    setIsLoading(true);
    await registerUser({ ...data, type_user: 'C', points: null, status: 'A' });
    router.push('/login');
    setIsLoading(false);
  };

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleAcceptConditions = useCallback(() => {
    setAcceptConditions(!acceptConditions);
  }, []);

  return (
    <section className="flex h-full w-screen items-center justify-center bg-login bg-cover bg-right lg:justify-start">
      <div className="flex w-11/12 max-w-lg flex-col items-center justify-center rounded-2xl bg-white px-4 py-8 lg:h-full lg:w-1/2 lg:max-w-none lg:rounded-none">
        <div className="flex w-11/12 max-w-xl flex-col items-center justify-center gap-6 lg:w-3/5">
          <div className="mb-8 flex w-full flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
            <h1 className="mb-4 text-2xl font-medium text-gray3 lg:text-4xl">
              Create your free account now!
            </h1>
            <p className="mb-4 text-sm font-medium text-gray3 lg:text-base">
              Already have an account?{' '}
              <Link
                href="/login"
                className="border-b-2 border-solid border-primaryColor text-primaryColor"
              >
                Log In
              </Link>
            </p>
          </div>
          <form
            className="flex w-full flex-col items-center justify-center gap-6"
            onSubmit={handleSubmit(handleRegister)}
          >
            <InputIcon
              register={register}
              name="name"
              Icon={PersonIcon}
              label="Nome"
            />
            <InputIcon register={register} Icon={EmailIcon} label="Email" />
            <InputPassword register={register} showPassword={showPassword} />
            <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-0.5">
                <p className="text-sm font-semibold text-gray3">
                  Show password
                </p>
                <SwitchBlue
                  value={showPassword}
                  onChange={handleShowPassword}
                />
              </div>
              <Button type="submit" isLoading={isLoading}>
                Register
              </Button>
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: '#97A4AF',
                    borderRadius: '0.5rem',
                    transition: '0.2s ease-in-out',
                  }}
                  value={acceptConditions}
                  onChange={handleAcceptConditions}
                />
              }
              sx={{
                color: '#97A4AF',
                fontSize: '0.8rem',
                '& .MuiFormControlLabel-a': {
                  color: '#2b6efd',
                  textDecoration: 'none',
                },
              }}
              label={
                <label>
                  I agree to the{' '}
                  <Link href="/login" className="text-primaryColor">
                    Terms & Conditions
                  </Link>
                </label>
              }
            />
          </form>
          <p className="mb-4 text-center text-base font-medium text-gray3">
            © {year} All Rights Reserved.{' '}
            <span className="cursor-pointer text-primaryColor">CredMarket</span>{' '}
            created by carlos-hss.{' '}
            <span className="cursor-pointer text-primaryColor">
              Terms & Conditions, Privacy Settings.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
