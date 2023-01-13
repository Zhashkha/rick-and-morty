import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { HomeLink, NavLink } from "./header.styles";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <AppBar position="static" color="default" sx={{ boxShadow: 0 }}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <HomeLink to="/">Rick and Morty Reference Book</HomeLink>
        </Typography>
        <Typography variant="button">
          <NavLink to="/characters" $isCurrentRoute={pathname === "/characters"}>
            Characters
          </NavLink>
        </Typography>
        <Typography variant="button" ml={2}>
          <NavLink to="/episodes" $isCurrentRoute={pathname === "/episodes"}>
            Episodes
          </NavLink>
        </Typography>
        <Typography variant="button" ml={2}>
          <NavLink to="/locations" $isCurrentRoute={pathname === "/locations"}>
            Locations
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
