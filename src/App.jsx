import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Products from "./pages/Products";
import ImageUploader from "./pages/ImageUploader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product" element={<EditProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/image-uploader" element={<ImageUploader />} />
    </Routes>
  );
}

export default App;