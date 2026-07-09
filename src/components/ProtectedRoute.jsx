import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
