import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'

const defaultProducts = [
  { id: 1, title: 'Product 1', category: 'Electronics', price: '150', description: 'Sample description 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Product 2', category: 'Fashion', price: '250', description: 'Sample description 2', image: 'https://via.placeholder.com/150' }
]

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products')
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts
  })

  const [showAnnouncement, setShowAnnouncement] = useState(true)

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev])
  }

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div>
      {showAnnouncement && (
        <div style={{ background: '#f39c12', color: '#fff', padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
          🎉 Welcome to our Mini Store! Enjoy browsing our products.
        </div>
      )}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products products={products} onAddProduct={handleAddProduct} onDeleteProduct={handleDeleteProduct} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
