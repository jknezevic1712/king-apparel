import styled from "styled-components";

import { breakpoints } from "assets/breakpoints/breakpoints";

import clrs from "assets/colors/colorPalette";

export const HomeContainer = styled.div`
  height: 300vh;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 10% 90%;
  background-color: ${clrs.bg};

  @media ${breakpoints.tablet} {
    height: 200vh;
  }

  @media ${breakpoints.desktop} {
    height: 250vh;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TilesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5em;

  @media ${breakpoints.tablet} {
    gap: 0 5em;
  }

  @media ${breakpoints.laptop} {
    gap: 0 10em;
  }

  @media ${breakpoints.desktop} {
    gap: 5em 10em;
  }
`;
