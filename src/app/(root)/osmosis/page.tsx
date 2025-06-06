// src/app/(root)/osmosis/page.tsx
import ProductGrid from "@/components/product-grid";

interface Product {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    // Añade más campos según necesites
  };
}

async function load() {
  const res = await fetch('http://localhost:1337/api/category-products?populate=*');
  
  const data = await res.json();
  return data.data as Product[]; // Conversión de tipo explícita
}

export default async function OsmosisPage() {
  const products = await load();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Sistemas de Ósmosis</h1>
      <ProductGrid products={products} />
    </div>
  );
}