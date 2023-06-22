'use client';

import React from 'react';
import Button from '@/ui/Button';
import InputIcon from '@/ui/InputIcon';
import InputPassword from '@/ui/InputPassword';
import PersonIcon from '@mui/icons-material/Person';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import SwitchBlue from '@/ui/Switch';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '@/context/AuthContext';

export default function Page() {
  const year = new Date().getFullYear();
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuthContext();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [keepLogged, setKeepLogged] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleKeepLogged = useCallback(() => {
    setKeepLogged(!keepLogged);
  }, [keepLogged]);

  const handleLogin = async (data: any) => {
    setIsLoading(true);

    if(!data.password) {
      setIsPasswordEmpty(true)
      setIsLoading(false);
      return;
    }

    await signIn(data, 'M');
    setIsLoading(false);
  };

  const handleChangePassword = useCallback(() => {
    setIsPasswordEmpty(false)
  }, [])

  return (
    <section className="flex h-full w-screen items-center justify-center bg-login bg-cover bg-right lg:justify-start">
      <div className="flex w-11/12 max-w-lg flex-col items-center justify-center rounded-2xl bg-white px-4 py-8 lg:h-full lg:w-1/2 lg:max-w-none lg:rounded-none">
        <div className="max-w-90 lg:max-w-100 flex w-11/12 flex-col items-center justify-center gap-6 lg:w-1/2">
          <div className="mb-8 flex w-full flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
            <h1 className="mb-4 text-2xl font-medium text-gray3 lg:text-5xl">
              LogIn <span className="text-primaryColor">CredMarket</span>
            </h1>
            <p className="mb-4 text-sm font-medium text-gray3 lg:text-base">
              Novo aqui?{' '}
              <Link
                href="/register"
                className="border-b-2 border-solid border-primaryColor text-primaryColor"
              >
                Crie uma conta
              </Link>
            </p>
          </div>
          <form
            className="flex w-full flex-col items-center justify-center gap-6"
            onSubmit={handleSubmit(handleLogin)}
          >
            <InputIcon
              Icon={PersonIcon}
              label="Email"
              register={register}
              required
            />
            <InputPassword
              showPassword={showPassword}
              error={isPasswordEmpty}
              helperText="Senha obrigatória"
              register={register}
              onChange={handleChangePassword}
              required
            />
            <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-0.5">
                <p className="text-sm font-semibold text-gray3">
                  Mostrar senha
                </p>
                <SwitchBlue
                  value={showPassword}
                  onChange={handleShowPassword}
                />
              </div>
              <Button type="submit" isLoading={isLoading}>
                Entrar
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
                  value={keepLogged}
                  onChange={handleKeepLogged}
                />
              }
              sx={{
                color: keepLogged ? '#1E2022' : '#97A4AF',
                fontSize: '0.8rem',
                fontWeight: 700,
              }}
              label="Mantenha-me logado"
            />
          </form>
          <p className="mb-4 text-center text-base font-medium text-gray3">
            © {year} Todos os direitos reservados.{' '}
            <span className="cursor-pointer text-primaryColor">CredMarket</span>{' '}
            criado por{' '}
            <span className="cursor-pointer text-primaryColor">carlos-hss</span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
