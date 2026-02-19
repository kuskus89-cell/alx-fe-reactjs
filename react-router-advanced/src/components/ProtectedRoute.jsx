import { Navigate } from "react-router-dom";


  const auth = { isAuthenticated: true }; // simulate login

  function ProtectedRoute({ children }) {
  if (!auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
} 
export default ProtectedRoute;
