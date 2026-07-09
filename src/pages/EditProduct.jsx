import React, { useState } from "react";
import "../css/edit-product.css";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "DAP001",
    name: "Moong Dal Yellow",
    category: "Pulses",
    brand: "Anna Basket",
    image: "https://picsum.photos/400",
    measurementUnit: "kg",
    size: "1 kg",
    mrp: "140",
    sellingPrice: "125",
    stock: "50",
    description: "Premium quality moong dal.",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log("Updated Product:", product);

    // API Call
  };

  return (
    <div className="edit-product">
      <h1>Edit Product</h1>

      <form onSubmit={handleUpdate}>

        <div className="form-group">
          <label>Product ID</label>
          <input
            type="text"
            name="id"
            value={product.id}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Measurement Unit</label>
          <select
            name="measurementUnit"
            value={product.measurementUnit}
            onChange={handleChange}
          >
            <option>kg</option>
            <option>g</option>
            <option>ltr</option>
            <option>ml</option>
            <option>pcs</option>
          </select>
        </div>

        <div className="form-group">
          <label>Size</label>
          <input
            type="text"
            name="size"
            value={product.size}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>MRP</label>
          <input
            type="number"
            name="mrp"
            value={product.mrp}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Selling Price</label>
          <input
            type="number"
            name="sellingPrice"
            value={product.sellingPrice}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Product Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>

        <div className="full-width image-preview">
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxWidth: "180px",
              maxHeight: "180px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            rows="5"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn">
          Update Product
        </button>

      </form>
    </div>
  );
};

export default EditProduct;