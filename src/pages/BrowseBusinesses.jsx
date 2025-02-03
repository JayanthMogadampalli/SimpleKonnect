import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBusinesses } from "../api/businessApi"; // API function

const BrowseBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    async function loadBusinesses() {
      const data = await fetchBusinesses();
      setBusinesses(data);
    }
    loadBusinesses();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">🏢 Browse Businesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {businesses.map((business) => (
          <div key={business.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">{business.name}</h3>
            <p className="text-gray-600">{business.description}</p>
            <Link to={`/business/${business.id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBusinesses;
