'use client';

import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputPasswordProps<T> = {
  label?: string;
  helperText?: string;
  name?: string;
  error?: boolean;
  showPassword?: boolean;
  required?: boolean;
  register: UseFormRegister<T>;
  onChange?: () => void;
};

const InputPassword = <T extends FieldValues>({
  label = 'Senha',
  showPassword,
  name = 'password',
  error,
  helperText = 'Obrigatório',
  required,
  register,
  onChange,
  ...props
}: InputPasswordProps<T>) => {
  return (
    <div className="flex flex-col w-full items-center justify-start">
      <div className={`w-full flex items-center justify-start gap-3 border-b-2 border-solid border-gray1 ${error ? "focus-within:border-red" :"focus-within:border-primaryColor"} transition ease-in-out duration-175`}>
        <LockIcon
          style={{ width: '20px', color: error ? '#f54c5d' : '#2b6efd', marginBottom: '4px' }}
        />
        <input
          className="w-full h-10 bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
          placeholder={label}
          type={showPassword ? 'text' : 'password'}
          {...register(name as Path<T>)}
          autoComplete="current-password"
          required={required}
          onChange={onChange}
          {...props}
        />
      </div>
      {error && (<p className='w-full text-end text-xs text-red'>{helperText}</p>)}
    </div>
    
  );
};

export default InputPassword;
