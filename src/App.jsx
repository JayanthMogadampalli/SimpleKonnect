import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BrowseBusinesses from "./pages/BrowseBusinesses";
import BrowseProducts from "./pages/BrowseProducts";
import BusinessProfile from "./pages/BusinessProfile";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute"; // Protect dashboard
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Customer Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/businesses" element={<BrowseBusinesses />} />
        <Route path="/products" element={<BrowseProducts />} />
        <Route path="/business/:id" element={<BusinessProfile />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Business Pages (Protected) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
