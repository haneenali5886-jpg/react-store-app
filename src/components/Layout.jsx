import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#333', color: '#fff', alignItems: 'center' }}>
        <h2>Mini Store</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink 
            to="/" 
            end 
            style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Products
          </NavLink>
        </div>
      </nav>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout