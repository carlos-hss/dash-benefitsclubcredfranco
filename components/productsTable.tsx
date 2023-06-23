import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import ModalGenerateVoucher from './modalGenerateVoucher';

interface Props {
  products: IProduct[];
}

const ProductsTable: FC<Props> = ({ products }) => {
  const { user } = useAuthContext()

  const [product, setProduct] = useState<IProduct>({} as IProduct)
  const [isModalGenerateVoucherOpened, setIsModalGenerateVoucherOpened] = useState<boolean>(false)

  const handleOpenGenerateVoucher = useCallback((product: IProduct) => {
    setIsModalGenerateVoucherOpened(true)
    setProduct(product)
  }, [])

  const Products = useMemo(
    () =>
      products?.map((data, index) => {
        const hasNecessaryPoints = user && user.points >= data.points_cost;

        return (
            <tr
              key={data.id}
              className={`table-row h-10 text-gray1 text-xs lg:text-sm ${
                index < products.length - 1 &&
                'border-b border-backgroundColor'
              }`}
            >
              <td
                key={`${data.id}-${data.name}`}
                className="table-cell text-center"
              >
                {data.name}
              </td>
              <td
                key={`${data.id}-${data.points_cost}`}
                className="table-cell text-center"
              >
                {data.points_cost}
              </td>
              {user?.type_user === 'C' && (
                <td key={`${data.id}-link`} className="table-cell">
                  <p
                    onClick={() => hasNecessaryPoints && handleOpenGenerateVoucher(data)}
                    className={`${hasNecessaryPoints ? "text-primaryColor cursor-pointer hover:text-primaryHover" : "text-gray2"} transition-colors ease-in-out duration-150`}
                  >
                    Voucher
                  </p>
                </td>
              )}
              <td key={`${data.id}-link`} className="hidden lg:table-cell">
                <Link
                  href={'/'}
                  className=" text-primaryColor hover:text-primaryHover transition-colors ease-in-out duration-150"
                >
                  Detalhes
                </Link>
              </td>
            </tr>
          )}
      ),
    [products, user],
  );

  return (
    <>
      {isModalGenerateVoucherOpened && (<ModalGenerateVoucher setIsModalGenerateVoucherOpened={setIsModalGenerateVoucherOpened} product={product} setProduct={setProduct} />)}
      {products.length ? (
        <table className="table-auto w-11/12 lg:w-full text-sm lg:text-base text-center z-20">
          <thead className="text-xs lg:text-sm text-gray2 uppercase">
            <tr className="h-12">
              <th className="table-cell">Nome</th>
              <th className="table-cell">Pontos</th>
            </tr>
          </thead>
          <tbody className="table-row-group">{Products}</tbody>
        </table>
      ) : (
        <div className="flex justify-start items-center w-11/12 lg:w-full text-sm lg:text-base text-center z-20">
          <h2 className='w-11/12 lg:w-full leading-10 text-lg lg:text-xl text-gray2 text-center'>
            Nenhum registro encontrado!
          </h2>
        </div>
      )}
    </>
  );
};

export default ProductsTable;
