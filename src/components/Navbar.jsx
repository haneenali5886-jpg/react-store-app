function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
      <h2>My Store</h2>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;