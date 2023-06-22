'use client';

import React from 'react';
import Table from '@/components/productsTable';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '@/api';
import PointsCard from '@/ui/PointsCard';
import { useAuthContext } from '@/context/AuthContext';

export default function Page() {
  const { user } = useAuthContext();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
      const { data }: IProductsResponse = await api.get('/products/active');

      setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="flex h-full w-screen flex-col items-start justify-start gap-8 bg-backgroundColor px-[3%] py-12">
      <PointsCard points={user?.points}/>
      <h1 className="ml-2 mt-6 text-2xl font-bold text-gray3">Produtos</h1>
      <div className="flex w-full flex-col items-start justify-start gap-3">
        <div className="flex w-full flex-col items-center justify-start gap-4">
          <div className="flex max-h-[calc(100vh-170px)] w-full items-start justify-center overflow-auto overflow-x-auto rounded-lg bg-contentColor px-1 py-4 shadow-xl lg:max-h-[calc(100vh-200px)] lg:rounded-3xl lg:p-6">
            <Table products={products} />
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
