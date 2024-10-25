import React from "react";
import Navbarpage from "../pages/navbarpage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbarpage />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
