import React from 'react';
import Link from 'next/link';
import { FC, useMemo } from 'react';

interface Props {
  users: IUser[];
}

const UsersTable: FC<Props> = ({ users }) => {
  const Users = useMemo(
    () =>
      users?.map((data, index) => (
        <tr
          key={data.id}
          className={`table-row h-10 text-gray1 text-xs lg:text-sm ${
            index < users.length - 1 &&
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
            key={`${data.id}-${data.email}`}
            className="table-cell text-center"
          >
            {data.email}
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
    [users],
  );

  return (
    <>
      {users && users.length ? (
        <table className="table-auto w-11/12 lg:w-full text-sm lg:text-base text-center z-20">
          <thead className="text-xs lg:text-sm text-gray2 uppercase">
            <tr className="h-12">
              <th className="table-cell">Nome</th>
              <th className="table-cell">Email</th>
            </tr>
          </thead>
          <tbody className="table-row-group">{Users}</tbody>
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

export default UsersTable;
