import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'

const defaultProducts = [
  { 
    id: 1, 
    title: 'Wireless Headphones', 
    category: 'Electronics', 
    price: '150', 
    description: 'High quality sound with noise cancellation technology', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' 
  },
  { 
    id: 2, 
    title: 'Smart Watch', 
    category: 'Electronics', 
    price: '250', 
    description: 'Track your health, heart rate, and daily activity', 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' 
  },
  { 
    id: 3, 
    title: 'Running Shoes', 
    category: 'Fashion', 
    price: '120', 
    description: 'Lightweight and comfortable sports shoes for running', 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' 
  },
  { 
    id: 4, 
    title: 'Classic Backpack', 
    category: 'Fashion', 
    price: '80', 
    description: 'Durable travel and daily backpack with large capacity', 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500' 
  },
  { 
    id: 5, 
    title: 'Mechanical Keyboard', 
    category: 'Electronics', 
    price: '95', 
    description: 'RGB mechanical gaming keyboard with smooth switches', 
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500' 
  },
  { 
    id: 6, 
    title: 'Sunglasses', 
    category: 'Fashion', 
    price: '45', 
    description: 'Stylish UV protection sunglasses for summer', 
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500' 
  },
  { 
    id: 7, 
    title: 'Coffee Mug', 
    category: 'Home', 
    price: '20', 
    description: 'Ceramic coffee mug with modern aesthetic design', 
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500' 
  },
  { 
    id: 8, 
    title: 'Wireless Speaker', 
    category: 'Electronics', 
    price: '60', 
    description: 'Portable Bluetooth speaker with deep bass sound', 
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500' 
  }
]

function App() {
  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem('products')
      return savedProducts ? JSON.parse(savedProducts) : defaultProducts
    } catch (e) {
      return defaultProducts
    }
  })

  const [showAnnouncement, setShowAnnouncement] = useState(true)

  useEffect(() => {
    try {
      localStorage.setItem('products', JSON.stringify(products))
    } catch (e) {
      console.error(e)
    }
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
          <Route 
            path="products" 
            element={
              <Products 
                products={products} 
                onAddProduct={handleAddProduct} 
                onDeleteProduct={handleDeleteProduct} 
              />
            } 
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
