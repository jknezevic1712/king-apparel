import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoints, size } from "assets/breakpoints/breakpoints";

import colorPaletteByCategory from "components/utils/colorPaletteByCategory";

interface LinkContainerProps {
  pb5?: boolean;
}

interface ContainerProps {
  imageUrl: string;
  url?: string;
}

export const LinkContainer = styled(Link)<LinkContainerProps>`
  @media (width < ${size.desktop}) {
    ${(props) => (props.pb5 ? "padding-bottom: 5em;" : "")};
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: 225px;
  width: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid ${(props) => colorPaletteByCategory(props.url)}};
  border-radius: 2rem;
  background-image: ${(props) => props.imageUrl};
  cursor: pointer;

  h2 {
    letter-spacing: 2px;
    font-size: 2rem;
    font-family: "Permanent Marker", cursive;
  }

  @media ${breakpoints.laptop} {
    height: 275px;
    width: 400px;
  }

  @media ${breakpoints.laptopL} {
    height: 325px;
    width: 500px;
  }

  @media ${breakpoints.desktop} {
    height: 350px;
    width: 650px;

    h2 {
      font-size: 3.5rem;
    }
  }
`;
