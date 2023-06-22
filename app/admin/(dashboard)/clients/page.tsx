'use client';

import React from 'react';
import { api } from '@/api';
import Table from '@/components/usersTable';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
      const { data }: IUsersResponse = await api.get("/users/clients");

      setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
      <section className="flex h-full w-full flex-col items-start justify-start gap-8 bg-backgroundColor px-[3%] py-12">
        <h1 className="ml-2 mt-6 text-2xl font-bold text-gray3">Usuários</h1>
        <div className="flex w-full flex-col items-start justify-start gap-3">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <div className="flex max-h-[calc(100vh-170px)] w-full items-start justify-center overflow-auto overflow-x-auto rounded-lg bg-contentColor px-1 py-4 shadow-xl lg:max-h-[calc(100vh-200px)] lg:rounded-3xl lg:p-6">
              <Table users={users} />
            </div>
            <Link
              href="/financial-flow"
              className="text-xs font-extralight text-primaryColor"
            ></Link>
          </div>
        </div>
      </section>
  );
}
