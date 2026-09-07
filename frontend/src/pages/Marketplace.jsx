import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";
import { getProducts } from "../services/productService";
import "./Marketplace.css";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load products");
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="app">
      <div className="marketplace-page">
        <div className="marketplace-header">
          <h1>1Fi Marketplace</h1>

          <p>Shop now. Pay later with mutual funds.</p>
        </div>

        <div className="search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading && <div className="state">Loading products...</div>}

        {error && <div className="state error">{error}</div>}

        {!loading && !error && (
          <>
            <div className="marketplace-title">
              <h2>Products</h2>

              <span>{filteredProducts.length} items</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="state">No products found</div>
            )}
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

export default Marketplace;
