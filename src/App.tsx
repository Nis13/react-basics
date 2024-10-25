import Homepage from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutpage from "./pages/aboutpage";
import Blogpage from "./pages/blogpage";
import Contactpage from "./pages/contactpage";
import Layout from "./layout/layout";
import Notfoundpage from "./pages/notfoundpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Route>
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
