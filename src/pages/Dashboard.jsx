import {
  Plus,
  Pencil,
  Trash2,
  ImagePlus,
  IndianRupee,
  Package,
  Boxes,
  ShoppingCart,
} from "lucide-react";

import "../css/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      {/* Statistics */}

      <div className="stats">

        <div className="card">
          <Boxes size={35} />
          <h2>250</h2>
          <p>Total Products</p>
        </div>

        <div className="card">
          <Package size={35} />
          <h2>12</h2>
          <p>Out of Stock</p>
        </div>

        <div className="card">
          <ShoppingCart size={35} />
          <h2>38</h2>
          <p>Today's Orders</p>
        </div>

      </div>

      {/* Quick Actions */}

      <h2>Quick Actions</h2>

      <div className="actions">

        <button>
          <Plus size={22} />
          Add Product
        </button>

        <button>
          <Pencil size={22} />
          Edit Product
        </button>

        <button>
          <Trash2 size={22} />
          Delete Product
        </button>

        <button>
          <ImagePlus size={22} />
          Upload Image
        </button>

        <button>
          <IndianRupee size={22} />
          Price Update
        </button>

        <button>
          <Package size={22} />
          Stock Update
        </button>

      </div>

      {/* Recent Products */}

      <h2>Recent Products</h2>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Milk</td>
            <td>₹58</td>
            <td>24</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>Rice</td>
            <td>₹720</td>
            <td>10</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>Potato</td>
            <td>₹30</td>
            <td>42</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}