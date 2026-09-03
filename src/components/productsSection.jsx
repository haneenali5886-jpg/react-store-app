import ProductCard from './ProductCard';

function ProductsSection() {
  return (
    <div style={{ padding: '0 48px 48px' }}>
      <h2>Our Products</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <ProductCard
          title="Laptop"
          price="$900"
          category="Computers"
          description="High performance laptop for work and gaming"
          image="https://via.placeholder.com/150"
        />
        <ProductCard
          title="Headphones"
          price="$120"
          category="Electronics"
          description="Noise-canceling wireless headphones"
          image="https://via.placeholder.com/150"
        />
        <ProductCard
          title="Smart Watch"
          price="$200"
          category="Electronics"
          description="Fitness tracker and smart watch"
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
}

export default ProductsSection;