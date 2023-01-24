import { useState } from "react";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import {
  CharactersLink,
  EpisodesLink,
  HomeLink,
  LocationsLink,
  NavLink
} from "./header.styles";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="default" sx={{ boxShadow: 0 }}>
      <Toolbar sx={{ flexWrap: "wrap", display: { xs: "none", md: "flex" } }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <HomeLink to="/">Rick and Morty Reference Book</HomeLink>
        </Typography>
        <CharactersLink />
        <EpisodesLink sx={{ marginLeft: 2 }} />
        <LocationsLink sx={{ marginLeft: 2 }} />
      </Toolbar>

      <Toolbar sx={{ flexWrap: "wrap", display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" }
          }}
        >
          <MenuItem>
            <CharactersLink />
          </MenuItem>
          <MenuItem>
            <EpisodesLink />
          </MenuItem>
          <MenuItem>
            <LocationsLink />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
