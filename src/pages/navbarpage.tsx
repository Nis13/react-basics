import { AppBar, Box, Toolbar, Button } from "@mui/material";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { NavLink } from "react-router-dom";

const Navbarpage = () => {
  const pages = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "Product", link: "/product" },
  ];

  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar sx={{ gap: "3rem" }}>
        <FitbitIcon />
        <Box sx={{ display: "flex", gap: "2rem" }}>
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.link}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "white",
                backgroundColor: isActive ? "#C0C0C080" : "",
              })}
            >
              <Button sx={{ color: "inherit" }}>{page.name}</Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbarpage;
