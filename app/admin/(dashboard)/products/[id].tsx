'use client';

import React from 'react';
import { api } from '@/api';
import InputIcon from '@/ui/InputIcon';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/ui/Button';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit } = useForm<IProductForm>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleModifyProduct: SubmitHandler<IProductForm> = useCallback(async (productInfo) => {
      setIsLoading(true);
      await api.put(`/products/${id}`, productInfo);
      setIsLoading(false);
  }, []);

  return (
    <section className="flex h-full w-screen flex-col items-start justify-start gap-8 bg-backgroundColor px-[3%] py-12">
      <h1 className="ml-2 mt-6 text-2xl font-bold text-gray3">Minha conta</h1>
      <div className="flex max-h-[calc(100vh-170px)] w-full items-start justify-center overflow-auto overflow-x-auto rounded-lg bg-contentColor px-1 py-4 shadow-xl lg:max-h-[calc(100vh-200px)] lg:rounded-3xl lg:p-6">
        <div className="z-20 flex w-11/12 items-center justify-start text-center text-sm lg:w-full lg:text-base">
          <form
            className="flex w-full flex-col items-center justify-start gap-10 py-8"
            onSubmit={handleSubmit(handleModifyProduct)}
          >
            <div className="w-11/12 flex justify-between items-center gap-[5%]">
              <InputIcon
                Icon={PersonIcon}
                label="Nome"
                name='name'
                register={register}
                required
              />
              <InputIcon
                Icon={EmailIcon}
                label="Email"
                register={register}
                required
              />
            </div>
            <div className="w-11/12 flex justify-between items-center gap-[5%]">
              <InputIcon
                Icon={EmailIcon}
                label="Email"
                register={register}
                required
              />
              <InputIcon
                Icon={EmailIcon}
                label="Email"
                register={register}
                required
              />
            </div>
            <div className="w-11/12 flex justify-end items-center gap-[5%]">
              <Button type="submit" isLoading={isLoading}>
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
