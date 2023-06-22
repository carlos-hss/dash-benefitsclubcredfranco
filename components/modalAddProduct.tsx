import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/ui/Button';
import { api } from '@/api';

interface Props {
  setIsModalProductsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalAddProducts: FC<Props> = ({ setIsModalProductsOpened }) => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addProducts = async (data: any) => {
    try {
      setIsLoading(true)
      await api.post('/products', data);
      handleCloseModal()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  };

  const handleCloseModal = () => {
    setIsModalProductsOpened(false)
  }

  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-30">
      <CloseIcon
        style={{ position: "fixed", top: '1rem', right: '1rem', width: '30px', height: '30px', color: '#FFF', cursor: 'pointer' }}
        onClick={handleCloseModal}
      />
      <div className="flex w-full max-w-[500px] items-start justify-center overflow-auto overflow-x-auto rounded-lg bg-contentColor px-3 py-6 shadow-xl lg:rounded-3xl lg:p-6">
        <form
            className="flex w-full flex-col items-center justify-center gap-6"
            onSubmit={handleSubmit(addProducts)}
          >
            <input
              placeholder="Nome"
              type="text"
              className="w-full h-10 bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
              {...register("name")}
              required
            />
            <input
              placeholder="Descrição"
              type="text"
              className="w-full h-10 bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
              {...register("description")}
              required
            />
            <input
              placeholder="Preço '12.50'"
              type="text"
              className="w-full h-10 bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
              {...register("price")}
              required
            />
            <input
              placeholder="Peso '5.00kg'"
              type="text"
              className="w-full h-10 bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
              {...register("weight")}
              required
            />
            <input
              placeholder="Quantos pontos custa '130.00'"
              type="text"
              className="w-full h-10 bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
              {...register("points_cost")}
              required
            />
            <div className="mt-4 flex w-full items-center justify-end gap-2">
              <Button type="submit" isLoading={isLoading}>
                Criar
              </Button>
            </div>
          </form>
      </div>
    </section>
    
  )
};

export default ModalAddProducts;
