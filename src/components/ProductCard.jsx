function ProductCard(props) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', width: '220px', backgroundColor: '#fff', textAlign: 'left' }}>
      <img src={props.image} alt={props.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px' }} />
      <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '10px' }}>{props.category}</p>
      <h3 style={{ margin: '5px 0' }}>{props.title}</h3>
      <p style={{ fontSize: '14px', color: '#4b5563' }}>{props.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <span style={{ fontWeight: 'bold' }}>{props.price}</span>
        <button style={{ padding: '6px 12px', backgroundColor: '#1e1b4b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;