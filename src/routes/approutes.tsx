import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Homepage from "../pages/homepage";
import Aboutpage from "../pages/aboutpage";
import Blogpage from "../pages/blogpage";
import Contactpage from "../pages/contactpage";
import Notfoundpage from "../pages/notfoundpage";

const AppRoutes = () => {
  const routes = [
    { id: 1, path: "/", element: <Homepage /> },
    { id: 2, path: "about", element: <Aboutpage /> },
    { id: 3, path: "blog", element: <Blogpage /> },
    { id: 4, path: "contact", element: <Contactpage /> },
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
      </Route>
      <Route path="*" element={<Notfoundpage />} />
    </Routes>
  );
};

export default AppRoutes;
