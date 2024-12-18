import { AppBar, Box, Toolbar, Button } from "@mui/material";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { NavLink } from "react-router-dom";
import { IPath } from "../interfaces/navbar.interface";
import { useAuth } from "../utils/useAuth";

interface INavbarProps {
  pages: IPath[];
}

const Navbarpage: React.FC<INavbarProps> = ({ pages }) => {
  const { isAuthenticated, clearToken } = useAuth();
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar sx={{ gap: "3rem" }}>
        <FitbitIcon />
        <Box sx={{ display: "flex", gap: "2rem" }}>
          {pages.map((page) =>
            page.isVisible ? (
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
            ) : null
          )}
          {isAuthenticated ? (
            <Button onClick={clearToken}>Logout</Button>
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbarpage;
