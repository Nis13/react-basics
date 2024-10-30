import { IPath } from "../interfaces/navbar.interface";
import Navbarpage from "../pages/navbarpage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const pages: IPath[] = [
    { name: "Home", link: "/" },
    // { name: "About", link: "/about" },
    // { name: "Blog", link: "/blog" },
    // { name: "Contact", link: "/contact" },
    // { name: "User", link: "/user" },
    { name: "Product", link: "/product" },
    { name: "signup", link: "signup" },
    { name: "blogs", link: "blog" },
    { name: "login", link: "login" },
  ];
  return (
    <>
      <Navbarpage pages={pages} />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
