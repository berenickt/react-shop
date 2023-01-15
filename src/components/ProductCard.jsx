import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, product: { id, image, title, category, price } }) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="rounded-md shadow-md overflow-hidden cursor-pointer transition-all"
    >
      <div className="">
        <img className="w-full cover hover:scale-105" src={image} alt={title} />
      </div>

      <h3 className="text-2xl md:text-base font-bold mb-2 dark:text-slate-400">{title}</h3>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <p className="text-2xl md:text-base font-bold mb-4 p-2 dark:text-slate-400">{`${price}원`}</p>
        <p className="mb-2 px-2 text-gray-600">{category}</p>
      </div>
    </li>
  );
}
