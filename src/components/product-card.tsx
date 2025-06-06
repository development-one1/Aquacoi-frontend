"use client";
import Link from "next/link";
import "./product-card.css";

type ImageFormat = {
  url: string;
  width: number;
  height: number;
  // ... otros campos si los necesitas
};

type ImageAttributes = {
  url: string;
  alternativeText: string | null;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  // ... otros campos de imagen
};

type CategoryAttributes = {
  name: string;
  slug?: string;
};

type ProductAttributes = {
  productName: string;
  slug: string;
  description: string;
  price: number;
  isFeatured: boolean;
  active?: boolean;
  origin?: string;
  images: {
    data: {
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

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { attributes } = product;
  
  // Manejo seguro de imágenes
  const imageData = attributes.images.data;
  const mainImage = imageData?.attributes;

  console.log('main image:',mainImage?.formats?.medium?.url)

    // Construye la URL completa usando la variable de entorno
  const getImageUrl = (path: string | undefined) => {
    if (!path) return "/placeholder.svg";
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${path}`;
  };
  
  const imageUrl = getImageUrl(
    mainImage?.formats?.medium?.url || 
    mainImage?.url
  );
  
  const imageAlt = mainImage?.alternativeText || attributes.productName;
  const categoryName = attributes.category_product?.data?.attributes?.name || "Sin categoría";

  return (
    <div className="product-card">
      {attributes.isFeatured && (
        <span className="featured-badge">Destacado</span>
      )}

      <div className="product-image">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="product-info">
        <h2 className="product-name">{attributes.productName}</h2>

        <div className="product-category">
          <span>{categoryName}</span>
        </div>

        <p className="product-description">
          {attributes.description && attributes.description.length > 100
            ? `${attributes.description.substring(0, 100)}...`
            : attributes.description}
        </p>

        <div className="product-footer">
          <span className="product-price">
            {attributes.price.toFixed(2)}€
          </span>
          <Link 
            href={`/productos/${attributes.slug}`} 
            className="view-product-btn"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}