import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/ui/Button';
import { api } from '@/api';
import { useAuthContext } from '@/context/AuthContext';

interface Props {
  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  setIsModalGenerateVoucherOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalGenerateVoucher: FC<Props> = ({ setIsModalGenerateVoucherOpened, product, setProduct }) => {
  const { handleSubmit } = useForm();
  const { user } = useAuthContext()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateVoucher = async () => {
    if (user) {
      setIsLoading(true)
      await api.post('/vouchers/generate', {
        product_id: product.id,
        user_id: user.id
      });
      handleCloseModal()
      setIsLoading(false)
    }
  };

  const handleCloseModal = () => {
    setProduct({} as IProduct)
    setIsModalGenerateVoucherOpened(false)
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
            onSubmit={handleSubmit(generateVoucher)}
          >
            <input
              placeholder="Nome"
              type="text"
              value={product.name}
              disabled
              className="w-full h-10 bg-transparent text-gray2 text-base text-medium focus:outline-none placeholder:text-gray1"
              required
            />
            <div className="mt-4 flex w-full items-center justify-end gap-2">
              <Button type="submit" isLoading={isLoading}>
                Gerar Voucher
              </Button>
            </div>
          </form>
      </div>
    </section>
    
  )
};

export default ModalGenerateVoucher;
