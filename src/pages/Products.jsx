import React, { useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
  Eye,
  Plus,
} from "lucide-react";

import "../css/products.css";

const sampleProducts = [
  {
    id: "DAP001",
    image: "https://picsum.photos/80?1",
    name: "Moong Dal Yellow",
    category: "Pulses",
    price: 125,
    size: "1 kg",
    stock: 52,
  },
  {
    id: "DAP002",
    image: "https://picsum.photos/80?2",
    name: "Basmati Rice",
    category: "Rice",
    price: 780,
    size: "1 kg",
    stock: 24,
  },
  {
    id: "DAP003",
    image: "https://picsum.photos/80?3",
    name: "Mustard Oil",
    category: "Oil",
    price: 180,
    size: "1 L",
    stock: 15,
  },
];

const Products = () => {

  const [search, setSearch] = useState("");

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      {/* Header */}

      <div className="page-header">

        <div>
          <h1>Products</h1>
          <p>Manage your inventory efficiently.</p>
        </div>

        <button className="add-btn">
          <Plus size={20} />
          Add Product
        </button>

      </div>

      {/* Search */}

      <div className="search-box">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Table */}

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Product</th>
              <th>Size</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr key={product.id}>

                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                </td>

                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.size}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>

                <td>
                  <span
                    className={
                      product.stock < 20
                        ? "stock low"
                        : "stock"
                    }
                  >
                    {product.stock}
                  </span>
                </td>

                <td>

                  <div className="action-buttons">

                    <button className="view-btn">
                      <Eye size={18} />
                    </button>

                    <button className="edit-btn">
                      <Pencil size={18} />
                    </button>

                    <button className="delete-btn">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Products;