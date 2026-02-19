import { Navigate } from "react-router-dom";


  const useAuth = { isAuthenticated: true }; // simulate login

  function ProtectedRoute({ children }) {
  if (!useAuth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
} 
export default ProtectedRoute;
