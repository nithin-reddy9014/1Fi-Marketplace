import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BottomNav from "../components/BottomNav";
import EmiPlan from "../components/EmiPlan";
import { getProduct } from "../services/productService";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [variant, setVariant] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setProduct(data);
        setVariant(data.variants[0]);
        setSelectedPlan(data.emiPlans[0]);

        setLoading(false);
      })
      .catch(() => {
        setError("Product not found");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="state">Loading product...</div>;
  }

  if (error) {
    return <div className="state error">{error}</div>;
  }

  return (
    <div className="app">
      <div className="details-page">
        {/* Product image */}

        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <p className="product-brand">{product.brand}</p>

          <h1>{product.name}</h1>

          <h2>₹{product.price.toLocaleString("en-IN")}</h2>

          <p className="description">{product.description}</p>

          {/* Variants */}

          <div className="section">
            <h3>Select variant</h3>

            <div className="variant-list">
              {product.variants.map((item) => (
                <button
                  key={item}
                  className={variant === item ? "variant selected" : "variant"}
                  onClick={() => setVariant(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* EMI */}

          <div className="section">
            <h3>Select EMI plan</h3>

            <div className="emi-list">
              {product.emiPlans.map((plan) => (
                <EmiPlan
                  key={plan.months}
                  plan={plan}
                  selected={selectedPlan?.months === plan.months}
                  onSelect={setSelectedPlan}
                />
              ))}
            </div>
          </div>

          {/* CTA */}

          <button
            className="continue-btn"
            onClick={() =>
              alert(
                `Selected ${product.name} - ${selectedPlan.months} months EMI`,
              )
            }>
            Continue with EMI →
          </button>

          {/* Product details */}

          <div className="info-card">
            <h3>How it works</h3>

            <p>1. Select your preferred product and variant.</p>

            <p>2. Choose an EMI plan that works for you.</p>

            <p>3. Continue to proceed with your selected plan.</p>
          </div>

          <div className="info-card">
            <h3>Terms and Conditions</h3>

            <p>
              EMI availability is subject to eligibility and applicable terms.
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default ProductDetails;
