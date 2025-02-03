import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.svg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight">
              🚀 Grow Your Business with <span className="text-yellow-300">SimpleKonnect</span>
            </h1>
            <p className="mt-4 text-lg opacity-90">
              The one-stop platform to connect businesses with customers and drive revenue.
            </p>
            <Link to="/businesses">
              <button className="mt-6 px-8 py-3 bg-yellow-400 text-blue-800 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
                Explore Businesses
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={HeroImage} alt="Marketing" className="w-3/4 md:w-full h-auto object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
