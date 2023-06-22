'use client';

import React from 'react';
import { api } from '@/api';
import { useAuthContext } from '@/context/AuthContext';
import InputIcon from '@/ui/InputIcon';
import SwitchBlue from '@/ui/Switch';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputPassword from '@/ui/InputPassword';
import Button from '@/ui/Button';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PointsCard from '@/ui/PointsCard';
import { optionsManager } from '@/lib/option';
import GlobalNav from '@/app/GlobalNav';

export default function Page() {
  const { user, setUser } = useAuthContext();
  const { register, handleSubmit } = useForm<IAccountForm>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordDifferent, setIsPasswordDifferent] = useState<boolean>(false);

  const handleModifyUser: SubmitHandler<IAccountForm> = async (userInfo) => {
    if(userInfo.password !== userInfo.confirm_password) {
      setIsPasswordDifferent(true)
      return;
    }

    if (user) {
      setIsLoading(true);

      const requestData: IAccountForm = {
        name: userInfo.name,
        email: userInfo.email,
      }

      userInfo.password && (requestData.password = userInfo.password);

      const { data }: IUpdateUserResponse = await api.put(`/users/${user.id}`, requestData);

      setUser(data.user)
      setIsLoading(false);
    }
  };

  const handleChangePassword = useCallback(() => {
    setIsPasswordDifferent(false)
  }, [])

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <section className="flex h-full w-screen flex-col items-start justify-start gap-8 bg-backgroundColor px-[3%] py-12">
      <h1 className="ml-2 mt-6 text-2xl font-bold text-gray3">Minha conta</h1>
      <div className="flex max-h-[calc(100vh-170px)] w-full items-start justify-center overflow-auto overflow-x-auto rounded-lg bg-contentColor px-1 py-4 shadow-xl lg:max-h-[calc(100vh-200px)] lg:rounded-3xl lg:p-6">
        <div className="z-20 flex w-11/12 items-center justify-start text-center text-sm lg:w-full lg:text-base">
          <form
            className="flex w-full flex-col items-center justify-start gap-10 py-8"
            onSubmit={handleSubmit(handleModifyUser)}
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
              <InputPassword
                showPassword={showPassword}
                register={register}
                error={isPasswordDifferent}
                helperText="As senhas estão diferentes"
                onChange={handleChangePassword}
              />
              <InputPassword
                showPassword={showPassword}
                name="confirm_password"
                label='Confirmar senha'
                error={isPasswordDifferent}
                helperText="As senhas estão diferentes"
                onChange={handleChangePassword}
                register={register}
              />
            </div>
            <div className="w-11/12 flex justify-between items-center gap-[5%]">
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
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
