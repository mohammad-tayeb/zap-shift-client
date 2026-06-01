import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation()
  console.log(location)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
}

export default PrivateRoute;
