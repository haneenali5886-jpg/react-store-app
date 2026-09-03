import React from 'react'

function ProductCard({ product, onDeleteProduct }) {
  if (!product) return null

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '220px', textAlign: 'center', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img 
        src={product.image || 'https://via.placeholder.com/150'} 
        alt={product.title} 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h4 style={{ margin: '10px 0 5px' }}>{product.title}</h4>
      <p style={{ color: '#777', fontSize: '14px', margin: '0 0 5px' }}>{product.category}</p>
      <p style={{ fontWeight: 'bold', color: '#2ecc71', margin: '0 0 5px' }}>${product.price}</p>
      <p style={{ fontSize: '13px', color: '#555', margin: '0 0 10px' }}>{product.description}</p>
      <button 
        onClick={() => onDeleteProduct(product.id)} 
        style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  )
}

export default ProductCard