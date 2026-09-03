import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductCard from '../components/ProductCard'

function Products({ products, onAddProduct, onDeleteProduct }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Products Section</h2>
      
      <ProductForm onAddProduct={onAddProduct} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onDeleteProduct={onDeleteProduct} 
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  )
}

export default Products