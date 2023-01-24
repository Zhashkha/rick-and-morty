import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const underlineDecoration = css`
  border-bottom: 3px solid var(--linkColor);
`;

export const NavLink = styled(Link)<{ $isCurrentRoute: boolean }>`
  --linkColor: ${({ $isCurrentRoute }) => ($isCurrentRoute ? "blue" : "black")};

  text-decoration: none;
  color: var(--linkColor);
  ${({ $isCurrentRoute }) => $isCurrentRoute && underlineDecoration};
  padding-bottom: 4px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CharactersLink = ({ sx = {} }) => {
  const { pathname } = useLocation();

  return (
    <Typography variant="button" sx={sx}>
      <NavLink to="/characters" $isCurrentRoute={pathname === "/characters"}>
        Characters
      </NavLink>
    </Typography>
  );
};

export const EpisodesLink = ({ sx = {} }) => {
  const { pathname } = useLocation();

  return (
    <Typography variant="button" sx={sx}>
      <NavLink to="/episodes" $isCurrentRoute={pathname === "/episodes"}>
        Episodes
      </NavLink>
    </Typography>
  );
};

export const LocationsLink = ({ sx = {} }) => {
  const { pathname } = useLocation();

  return (
    <Typography variant="button" sx={sx}>
      <NavLink to="/locations" $isCurrentRoute={pathname === "/locations"}>
        Locations
      </NavLink>
    </Typography>
  );
};
