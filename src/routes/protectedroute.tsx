import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated === false) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Outlet />;
    </>
  );
};

export default ProtectedRoute;
