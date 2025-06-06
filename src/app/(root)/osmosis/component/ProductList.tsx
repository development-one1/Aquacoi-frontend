// src/app/(root)/osmosis/ProductsList.tsx
async function load() {
   const res = await fetch('http://localhost:1337/api/category-products')
   const data = await res.json()
   return data
}

  async function ProductList() {

    const products = await load()
    console.log(products)

    return (
        <div>Hola</div>
    )
  }

  export default ProductList
