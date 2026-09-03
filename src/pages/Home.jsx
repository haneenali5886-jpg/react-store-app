import React from 'react'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Hero />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Welcome to Mini Product Store</h2>
        <p>Explore our wide collection of products easily from the Products page.</p>
      </div>
    </div>
  )
}

export default Home