import Link from "next/link"
import "./product-card.css"

type ProductCardProps = {
  product: {
    id: number
    attributes: {
      productName: string
      slug: string
      description: string
      images: {
        data: {
          attributes: {
            url: string
            alternativeText: string
          }
        }
      }
      price: number
      isFeatured: boolean
      category_product: {
        data: {
          attributes: {
            name: string
          }
        }
      }
    }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { attributes } = product
  const imageUrl = attributes.images?.data?.attributes?.url || "/placeholder.svg?height=300&width=300"
  const imageAlt = attributes.images?.data?.attributes?.alternativeText || attributes.productName
  const categoryName = attributes.category_product?.data?.attributes?.name || "Sin categoría"

  return (
    <div className="product-card">
      {attributes.isFeatured && <span className="featured-badge">Destacado</span>}

      <div className="product-image">
        <img src={imageUrl || "/placeholder.svg"} alt={imageAlt} />
      </div>

      <div className="product-info">
        <h2 className="product-name">{attributes.productName}</h2>

        <div className="product-category">
          <span>{categoryName}</span>
        </div>

        <p className="product-description">
          {attributes.description?.length > 100
            ? `${attributes.description.substring(0, 100)}...`
            : attributes.description}
        </p>

        <div className="product-footer">
          <span className="product-price">{attributes.price.toFixed(2)}€</span>
          <Link href={`/productos/${attributes.slug}`} className="view-product-btn">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  )
}
