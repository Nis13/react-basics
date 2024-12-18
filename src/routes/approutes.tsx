import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Homepage from "../pages/homepage";
import Blogpage from "../pages/blogpage";
import Notfoundpage from "../pages/notfoundpage";
import SignupPage from "../pages/signuppage";
import ProtectedRoute from "./protectedroute";
import LoginPage from "../pages/loginpage";
import Productpage from "../pages/productpage";
import { AuthContext } from "../store/authcontext";
import Userpage from "../pages/userpage";
import GetUserpage from "../pages/getuserpage";

const publicRoutes = [
  { id: 1, path: "/", element: <Homepage /> },
  { id: 7, path: "signup", element: <SignupPage /> },
  { id: 8, path: "login", element: <LoginPage /> },
];
const protectedRoutes = [
  { id: 3, path: "blog", element: <Blogpage /> },
  { id: 5, path: "product", element: <Productpage /> },
  { id: 6, path: "user", element: <GetUserpage /> },
  { id: 9, path: "addUser", element: <Userpage /> },
];
const AppRoutes = () => {
  // const routes = [
  //   { id: 1, path: "/", element: <Homepage /> },
  //   { id: 2, path: "about", element: <Aboutpage /> },
  //   { id: 3, path: "blog", element: <Blogpage /> },
  //   { id: 4, path: "contact", element: <Contactpage /> },
  //   { id: 6, path: "user", element: <Userpage /> },
  //   { id: 7, path: "signup", element: <SignupPage /> },
  // ];

  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          {publicRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
          <Route path="/" element={<ProtectedRoute />}>
            {protectedRoutes.map((route) => (
              <Route path={route.path} element={route.element} key={route.id} />
            ))}
          </Route>
        </Route>
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </AuthContext>
  );
};

export default AppRoutes;
