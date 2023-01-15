import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
  // const { isLoading, error, data: products } = useQuery(['products'], getProducts, { staleTime: 1000 * 60 });
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <section className="bg-white dark:bg-black dark:text-white">
      {isLoading && <div className="flex justify-center items-center">로딩중...</div>}

      {error && <p>{error}</p>}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list pb-28">
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </ul>
    </section>
  );
}
