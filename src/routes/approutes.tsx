import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Homepage from "../pages/homepage";
import Blogpage from "../pages/blogpage";
import Notfoundpage from "../pages/notfoundpage";
import SignupPage from "../pages/signuppage";
import ProtectedRoute from "./protectedroute";
import LoginPage from "../pages/loginpage";

const isAuthenticated = () => {
  return false;
};

const unprotectedRoutes = [
  { id: 1, path: "/", element: <Homepage /> },
  { id: 7, path: "signup", element: <SignupPage /> },
  { id: 8, path: "login", element: <LoginPage /> },
];
const protectedRoutes = [{ id: 3, path: "blog", element: <Blogpage /> }];
const AppRoutes = () => {
  // const routes = [
  //   { id: 1, path: "/", element: <Homepage /> },
  //   { id: 2, path: "about", element: <Aboutpage /> },
  //   { id: 3, path: "blog", element: <Blogpage /> },
  //   { id: 4, path: "contact", element: <Contactpage /> },
  //   { id: 5, path: "product", element: <Productpage /> },
  //   { id: 6, path: "user", element: <Userpage /> },
  //   { id: 7, path: "signup", element: <SignupPage /> },
  // ];

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {unprotectedRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
        <Route
          path="/"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated()}
            ></ProtectedRoute>
          }
        >
          {protectedRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
        </Route>
      </Route>
      <Route path="*" element={<Notfoundpage />} />
    </Routes>
  );
};

export default AppRoutes;
