import { useEffect, useState } from "react";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../api/productApi";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", category: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProduct) {
      await updateProduct(editingProduct.id, newProduct);
    } else {
      await addProduct(newProduct);
    }
    setNewProduct({ name: "", description: "", price: "", category: "" });
    setEditingProduct(null);
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);
  };

  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({ ...product });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
          📦 Product Management
        </h1>

        {/* Product Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-6 shadow-md w-full max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="number"
              placeholder="Price ($)"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* Product List - Grid View */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">🛍 Product List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.length === 0 ? (
            <p className="text-gray-500 text-center">No products found.</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="bg-white p-5 rounded-lg shadow-md flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Category: {product.category}</p>
                </div>
                <div className="flex mt-4 space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
