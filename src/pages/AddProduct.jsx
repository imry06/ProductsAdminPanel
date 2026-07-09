import React, { useState } from "react";
import "../css/add-product.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    category: "",
    brand: "",
    image: "",
    measurementUnit: "kg",
    size: "",
    mrp: "",
    sellingPrice: "",
    stock: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    // TODO:
    // Upload Image
    // Save Product
    // Reset Form
  };

  return (
    <div className="add-product">

      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Product ID</label>
          <input
            type="text"
            name="id"
            placeholder="DAP001"
            value={product.id}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Product Name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="Pulses"
            value={product.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="Anna Basket"
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
            placeholder="1 kg"
            value={product.size}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>MRP</label>
          <input
            type="number"
            name="mrp"
            placeholder="120"
            value={product.mrp}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Selling Price</label>
          <input
            type="number"
            name="sellingPrice"
            placeholder="105"
            value={product.sellingPrice}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="50"
            value={product.stock}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Product Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="https://..."
            value={product.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            rows="5"
            name="description"
            placeholder="Write product description..."
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Add Product
        </button>

      </form>

    </div>
  );
};

export default AddProduct;