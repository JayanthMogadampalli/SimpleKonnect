import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/productApi"; // API function

const BrowseProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">🛒 Browse Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProducts;
