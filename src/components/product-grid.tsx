"use client"
import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import "./product-card.css"

// Tipo basado en el esquema proporcionado
type Product = {
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
    active: boolean
    price: number
    origin: "españa"
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

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Ajusta la URL a tu endpoint real
        const response = await fetch("/api/products?populate=*")

        if (!response.ok) {
          throw new Error("Error al cargar los productos")
        }

        const data = await response.json()
        setProducts(data.data)
      } catch (err) {
        setError("No se pudieron cargar los productos. Por favor, inténtalo de nuevo más tarde.")
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="loading">Cargando productos...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  // Filtrar productos activos
  const activeProducts = products.filter((product) => product.attributes.active)

  return (
    <div className="product-grid">
      {activeProducts.length > 0 ? (
        activeProducts.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p className="no-products">No hay productos disponibles actualmente.</p>
      )}
    </div>
  )
}
