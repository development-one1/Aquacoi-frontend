import ProductGrid from '@/components/Productos/ProductGrid';
import { getProductsByCategory } from '@/lib/api';

export default async function FiltradoPage() {
  const products = await getProductsByCategory('filtrado-y-descalcificacion');
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Sistemas de Filtrado y Descalcificación</h1>
      <p className="text-lg text-gray-600 mb-8">
        Soluciones avanzadas para el tratamiento de agua en tu hogar o negocio.
      </p>
      
      <ProductGrid products={products} />
    </main>
  );
}