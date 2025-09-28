"use client";

import { useProducts } from "../hooks/use-products";

export function Product() {
  const { data } = useProducts();

  return (
    <div>
      <h1>{data?.products[0]?.title}</h1>
    </div>
  );
}
