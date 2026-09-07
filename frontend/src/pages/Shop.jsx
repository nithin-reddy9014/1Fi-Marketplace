import { useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "./Shop.css";

function Shop() {
  const [activeTab, setActiveTab] = useState("brands");

  return (
    <div className="app">
      <div className="shop-page">
        {/* Hero */}

        <div className="hero">
          <span>✦ NO-COST EMIs</span>

          <h1>
            Shop today,
            <br />
            <i>Pay later using</i>
            <br />
            Mutual funds.
          </h1>

          <p>
            No credit score required. No interest.
            <br />
            Backed by your investments.
          </p>
        </div>

        {/* Three Shop Options */}

        <div className="tabs">
          <button
            className={activeTab === "brands" ? "selected" : ""}
            onClick={() => setActiveTab("brands")}>
            Top Brands
          </button>

          <button
            className={activeTab === "nearby" ? "selected" : ""}
            onClick={() => setActiveTab("nearby")}>
            Nearby Stores
          </button>

          <button
            className={activeTab === "marketplace" ? "selected" : ""}
            onClick={() => setActiveTab("marketplace")}>
            Marketplace
          </button>
        </div>

        {/* Top Brands - Blank */}

        {activeTab === "brands" && (
          <div className="blank-page">{/* No implementation required */}</div>
        )}

        {/* Nearby Stores - Blank */}

        {activeTab === "nearby" && (
          <div className="blank-page">{/* No implementation required */}</div>
        )}

        {/* Marketplace */}

        {activeTab === "marketplace" && (
          <div className="marketplace-entry">
            <div className="marketplace-intro">
              <p>1Fi</p>

              <h2>1Fi Marketplace</h2>

              <span>Shop products with flexible EMI options</span>

              <Link to="/marketplace" className="marketplace-btn">
                Explore Marketplace →
              </Link>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

export default Shop;
