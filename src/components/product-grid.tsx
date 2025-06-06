"use client";
import ProductCard from "./product-card";
import "./product-card.css";

type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type ImageAttributes = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};

type CategoryAttributes = {
  name: string;
  slug: string;
};

type ProductAttributes = {
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  price: number;
  origin: "españa";
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: {
    data: {
      id: number;
      attributes: ImageAttributes;
    } | null;
  };
  category_product: {
    data: {
      attributes: CategoryAttributes;
    } | null;
  };
};

type Product = {
  id: number;
  attributes: ProductAttributes;
};

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  // Filtra productos activos
  const activeProducts = products.filter((product) => product.attributes.active);

  return (
    <div className="product-grid">
      {activeProducts.length > 0 ? (
        activeProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))
      ) : (
        <p className="no-products">No hay productos disponibles actualmente.</p>
      )}
    </div>
  );
}