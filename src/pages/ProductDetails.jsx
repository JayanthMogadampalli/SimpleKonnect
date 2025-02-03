import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const data = await fetchProductById(id);
      setProduct(data);
    }
    loadProduct();
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
