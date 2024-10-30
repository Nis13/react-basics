import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/authcontext";

const ProtectedRoute = () => {
  const { isAuthenticated, token } = useAuth();
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
