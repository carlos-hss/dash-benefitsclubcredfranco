'use client';

import React from 'react';
import { api } from '@/api';
import Table from '@/components/vouchersTable';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [vouchers, setVouchers] = useState<IVoucher[]>([]);

  const getVouchers = async () => {
      const { data }: IVouchersResponse = await api.get("/vouchers");

      setVouchers(data.vouchers);
  };

  useEffect(() => {
    getVouchers();
  }, []);

  return (
      <section className="flex h-full w-full flex-col items-start justify-start gap-8 bg-backgroundColor px-[3%] py-12">
        
        <h1 className="ml-2 mt-6 text-2xl font-bold text-gray3">Vouchers</h1>
        <div className="flex w-full flex-col items-start justify-start gap-3">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <div className="flex max-h-[calc(100vh-170px)] w-full items-start justify-center overflow-auto overflow-x-auto rounded-lg bg-contentColor px-1 py-4 shadow-xl lg:max-h-[calc(100vh-200px)] lg:rounded-3xl lg:p-6">
              <Table vouchers={vouchers} />
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
