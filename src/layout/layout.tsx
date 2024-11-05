import { IPath } from "../interfaces/navbar.interface";
import Navbarpage from "../pages/navbarpage";
import { Outlet } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

const Layout = () => {
  const { isAuthenticated } = useAuth();
  const pages: IPath[] = [
    { name: "Home", link: "/", isVisible: true },
    {
      name: "Product",
      link: "product",
      isVisible: !!isAuthenticated,
    },
    {
      name: "signup",
      link: "signup",
      isVisible: !isAuthenticated,
    },
    { name: "Blog", link: "blog", isVisible: !!isAuthenticated },
    { name: "login", link: "login", isVisible: !isAuthenticated },
    { name: "user", link: "user", isVisible: !!isAuthenticated },
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
