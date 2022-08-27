import styled from "styled-components";

import breakpoints from "assets/breakpoints/breakpoints";

import colorPaletteByCategory from "components/utils/colorPaletteByCategory";

interface ContainerProps {
  imageUrl: string;
  url?: string;
}

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

  @media ${breakpoints.desktop} {
    height: 350px;
    width: 650px;
  }
`;
