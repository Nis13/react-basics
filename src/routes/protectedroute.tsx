import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Outlet />;
    </>
  );
};

export default ProtectedRoute;
