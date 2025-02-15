import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
  
  PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default PrivateRoute;