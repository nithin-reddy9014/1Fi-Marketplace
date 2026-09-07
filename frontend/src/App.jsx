import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Shop from "./pages/Shop";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/shop" />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
