import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
