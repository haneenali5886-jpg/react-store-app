import React, { useState } from 'react'

function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !price) {
      alert('Please fill in at least the Title and Price!')
      return
    }

    const newProduct = {
      id: Date.now(),
      title,
      category,
      price: parseFloat(price),
      description,
      image
    }

    onAddProduct(newProduct)

    // تفريغ المدخلات بعد الإضافة
    setTitle('')
    setCategory('')
    setPrice('')
    setDescription('')
    setImage('')
  }

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Add New Product</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="text" 
          placeholder="Image URL (optional)" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit" 
          style={{ background: '#2ecc71', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default ProductForm