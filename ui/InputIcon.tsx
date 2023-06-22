'use client';

import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputIconProps<T> = {
  label?: string;
  name?: keyof T;
  required?: boolean;
  defaultValue?: T[keyof T];
  Icon: SvgIconComponent;
  register: UseFormRegister<T>;
};

const InputIcon = <T extends FieldValues>({
  label = 'Senha',
  Icon,
  required,
  name = 'email',
  register,
  ...props
}: InputIconProps<T>) => {
  return (
    <div className="w-full h-10 flex items-center justify-start gap-3 border-b-2 border-solid border-gray1 focus-within:border-primaryColor transition ease-in-out duration-175">
      <Icon style={{ width: '20px', color: '#2b6efd', marginBottom: '4px' }} />
      <input
        placeholder={label}
        type="text"
        className="w-full h-full bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
        {...register(name as Path<T>)}
        required={required}
        {...props}
      />
    </div>
  );
};

export default InputIcon;
