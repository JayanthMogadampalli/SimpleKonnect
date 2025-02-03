import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.svg";
import Feature1 from "../assets/feature1.svg";
import Feature2 from "../assets/feature2.svg";
import Feature3 from "../assets/feature3.svg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight">
              🚀 Scale Your Business with <span className="text-yellow-300">SimpleKonnect</span>
            </h1>
            <p className="mt-4 text-lg opacity-90">
              The one-stop marketing platform to connect businesses with customers & grow revenue.
            </p>
            <Link to="/dashboard">
              <button className="mt-6 px-8 py-3 bg-yellow-400 text-blue-800 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
                Get Started for Free
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={HeroImage} alt="Marketing Concept" className="w-[400px] h-auto object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Image & Text */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">🌟 Why Choose SimpleKonnect?</h2>

        {/* Feature 1 (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 flex justify-center">
            <img src={Feature1} alt="Feature 1" className="w-[300px] h-auto object-contain rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">📢 Connect with Customers</h3>
            <p className="text-gray-600 mt-2">
              Engage with your audience, increase brand visibility, and boost sales effortlessly.
            </p>
          </div>
        </div>

        {/* Feature 2 (Image Right, Text Left) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
          <div className="md:w-1/2 flex justify-center">
            <img src={Feature2} alt="Feature 2" className="w-[300px] h-auto object-contain rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">📊 Data-Driven Insights</h3>
            <p className="text-gray-600 mt-2">
              Track your business growth with real-time analytics and AI-powered recommendations.
            </p>
          </div>
        </div>

        {/* Feature 3 (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img src={Feature3} alt="Feature 3" className="w-[300px] h-auto object-contain rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">🛒 Seamless Product Management</h3>
            <p className="text-gray-600 mt-2">
              Easily add, update, and showcase your products to the right customers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold text-gray-800">Start Growing Your Business Today</h2>
        <p className="text-lg text-gray-600 mt-4">Join thousands of businesses using SimpleKonnect to reach more customers.</p>
        <Link to="/dashboard">
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            🚀 Sign Up for Free
          </button>
        </Link>
      </section>

    </div>
  );
};

export default LandingPage;
