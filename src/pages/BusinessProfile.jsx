import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBusinessById } from "../api/businessApi";

const BusinessProfile = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    async function loadBusiness() {
      const data = await fetchBusinessById(id);
      setBusiness(data);
    }
    loadBusiness();
  }, [id]);

  if (!business) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gray-800">{business.name}</h2>
      <p className="text-gray-600">{business.description}</p>
    </div>
  );
};

export default BusinessProfile;
