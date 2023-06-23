'use client';

import React, { useEffect } from 'react';
import { api } from '@/api';
import { setCookie, parseCookies } from 'nookies';
import { createContext, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface IProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthContextProvider({ children }: IProps) {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: ISignInProps, type_allowed: string) {
    try {
      const { data }: ILoginResponse = await api.post('/login', {
        email,
        password,
        type_allowed
      });

      setCookie(null, 'credmarket:token', data.token, {
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
  
      setUser(data.user);

      type_allowed === "M" ? router.push('/admin/products') : router.push('/products');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const { status } = axiosError.response;

          toast.error(status === 500 ? "Erro no servidor" : "Credenciais inválidas", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
        }
      }
    }
  }

  async function registerUser({
    name,
    email,
    password,
    type_user,
    points,
    status = 'C'
  }: IRegisterUserProps) {
    const { data }: IRegisterResponse = await api.post('/users', {
      name,
      email,
      password,
      type_user,
      points,
      status
    });

    setCookie(null, 'credmarket:token', data.token, {
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    setUser(data.user);
  }

  async function recoverUserInformation() {
    try {
      const { data }: IRecoverResponse = await api.get(
        '/user/recover',
      );
      setUser(data.user);
    } catch (errors) {
      console.log(errors)
    }
  }

  useEffect(() => {
    const { 'credmarket:token': token } = parseCookies();

    if (token) {
      recoverUserInformation();
    }
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      registerUser,
      user,
      setUser,
      signIn,
      recoverUserInformation
    }),
    [isAuthenticated, signIn, registerUser, user, setUser, recoverUserInformation],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }

  return context;
}

export { AuthContextProvider, useAuthContext };
