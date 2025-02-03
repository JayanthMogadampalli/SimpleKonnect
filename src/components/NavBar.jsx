import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-blue-600 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          SimpleKonnect
        </Link>
        <div className="space-x-6">
          <Link to="/dashboard" className="text-white text-lg hover:underline">
            Dashboard
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
