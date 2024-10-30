import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
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
