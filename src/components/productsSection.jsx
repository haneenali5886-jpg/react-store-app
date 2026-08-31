import ProductCard from './ProductCard';

function ProductsSection() {
  return (
    <div style={{ padding: '0 40px 40px' }}>
      <h2>Our Products</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <ProductCard 
          title="Laptop" 
          price="$900" 
          category="Computers" 
          description="High performance laptop for work and gaming."
          image="https://via.placeholder.com/150" 
        />
        <ProductCard 
          title="Headphones" 
          price="$120" 
          category="Electronics" 
          description="Noise-canceling wireless headphones."
          image="https://via.placeholder.com/150" 
        />
        <ProductCard 
          title="Smart Watch" 
          price="$200" 
          category="Accessories" 
          description="Track your fitness and everyday stats."
          image="https://via.placeholder.com/150" 
        />
        <ProductCard 
          title="Camera" 
          price="$550" 
          category="Electronics" 
          description="Capture brilliant pictures and 4K videos."
          image="https://via.placeholder.com/150" 
        />
        <ProductCard 
          title="Keyboard" 
          price="$80" 
          category="Computers" 
          description="Mechanical RGB keyboard for typing."
          image="https://via.placeholder.com/150" 
        />
        <ProductCard 
          title="Smartphone" 
          price="$750" 
          category="Electronics" 
          description="Latest model with powerful camera."
          image="https://via.placeholder.com/150" 
        />
      </div>
    </div>
  );
}

export default ProductsSection;