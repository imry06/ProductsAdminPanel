import React, { useState } from "react";
import "../css/edit-product.css";

const products = [
  {
    id: "DAP001",
    name: "Moong Dal Yellow",
    category: "Pulses",
    brand: "Anna Basket",
    image: "https://picsum.photos/200?1",
    measurementUnit: "kg",
    size: "1 kg",
    mrp: 140,
    sellingPrice: 125,
    stock: 50,
    description: "Premium quality moong dal.",
  },
  {
    id: "DAP002",
    name: "Masoor Dal",
    category: "Pulses",
    brand: "Anna Basket",
    image: "https://picsum.photos/200?2",
    measurementUnit: "kg",
    size: "1 kg",
    mrp: 130,
    sellingPrice: 118,
    stock: 80,
    description: "Fresh Masoor Dal",
  },
];

const EditProduct2 = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState(null);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(product);

    // Update API
  };

  return (
    <div className="edit-product">

      <h1>Edit Product</h1>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {search && (
        <div className="search-results">

          {filteredProducts.length ? (
            filteredProducts.map((item) => (
              <div className="search-card" key={item.id}>

                <img src={item.image} alt="" />

                <div>

                  <h3>{item.name}</h3>

                  <p>{item.id}</p>

                </div>

                <button onClick={() => setProduct(item)}>
                  Edit
                </button>

              </div>
            ))
          ) : (
            <p>No product found.</p>
          )}

        </div>
      )}

      {product && (
        <form onSubmit={handleUpdate}>

          <div className="form-group">

            <label>Product ID</label>

            <input value={product.id} disabled />

          </div>

          <div className="form-group">

            <label>Name</label>

            <input
              name="name"
              value={product.name}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Category</label>

            <input
              name="category"
              value={product.category}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Brand</label>

            <input
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

            <label>Image URL</label>

            <input
              name="image"
              value={product.image}
              onChange={handleChange}
            />

          </div>

          <div className="image-preview">

            <img src={product.image} alt="" />

          </div>

          <div className="form-group full-width">

            <label>Description</label>

            <textarea
              rows={5}
              name="description"
              value={product.description}
              onChange={handleChange}
            />

          </div>

          <button className="submit-btn">
            Update Product
          </button>

        </form>
      )}

    </div>
  );
};

export default EditProduct2;