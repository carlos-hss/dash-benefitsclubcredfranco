import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import ModalGenerateVoucher from './modalGenerateVoucher';

interface Props {
  vouchers: IVoucher[];
}

const VouchersTable: FC<Props> = ({ vouchers }) => {

  const Vouchers = useMemo(
    () =>
      vouchers?.map((data, index) => (
        <tr
          key={data.id}
          className={`table-row h-10 text-gray1 text-xs lg:text-sm ${
            index < vouchers.length - 1 &&
            'border-b border-backgroundColor'
          }`}
        >
          <td
            key={`${data.id}-${data.product.name}`}
            className="table-cell text-center"
          >
            {data.product.name}
          </td>
          <td
            key={`${data.id}-${data.code}`}
            className="table-cell text-center"
          >
            {data.code}
          </td>
          
          <td key={`${data.id}-link`} className="hidden lg:table-cell">
            <Link
              href={'/'}
              className=" text-primaryColor hover:text-primaryHover transition-colors ease-in-out duration-150 "
            >
              Detalhes
            </Link>
          </td>
        </tr>
      )),
    [vouchers],
  );

  return (
    <>
      {vouchers && vouchers.length ? (
        <table className="table-auto w-11/12 lg:w-full text-sm lg:text-base text-center z-20">
          <thead className="text-xs lg:text-sm text-gray2 uppercase">
            <tr className="h-12">
              <th className="table-cell">Produto</th>
              <th className="table-cell">Código</th>
            </tr>
          </thead>
          <tbody className="table-row-group">{Vouchers}</tbody>
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

export default VouchersTable;
