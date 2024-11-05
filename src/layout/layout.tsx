import { IPath } from "../interfaces/navbar.interface";
import Navbarpage from "../pages/navbarpage";
import { Outlet } from "react-router-dom";
import { useAuth } from "../store/authcontext";

const Layout = () => {
  const { isAuthenticated } = useAuth();
  const pages: IPath[] = [
    { name: "Home", link: "/", isVisible: true },
    // { name: "About", link: "/about" },
    // { name: "Blog", link: "/blog" },
    // { name: "Contact", link: "/contact" },
    // { name: "User", link: "/user" },
    {
      name: "Product",
      link: "product",
      isVisible: isAuthenticated ? true : false,
    },
    {
      name: "signup",
      link: "signup",
      isVisible: isAuthenticated ? false : true,
    },
    { name: "Blog", link: "blog", isVisible: isAuthenticated ? true : false },
    { name: "login", link: "login", isVisible: isAuthenticated ? false : true },
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
