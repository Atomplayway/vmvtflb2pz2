import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('load error');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">

      {loading && <p>load</p>}
      {error && <p className="error">{error}</p>}

      <div className="product-list">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p className="price">{product.price} грн</p>
            <p>{product.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
