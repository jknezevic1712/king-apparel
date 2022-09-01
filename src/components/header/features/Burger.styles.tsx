import styled from "styled-components";

import clrs from "assets/colors/colorPalette";
import { breakpoints } from "assets/breakpoints/breakpoints";

export const BurgerContainer = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }

  @media ${breakpoints.laptop} {
    height: 50px;
    width: 50px;
  }

  @media ${breakpoints.desktop} {
    height: 70px;
    width: 70px;
  }
`;

export const BurgerLines = styled.div`
  pointer-events: none;
  display: block;
  content: "";
  width: 75%;
  border-radius: 0.25em;
  background-color: ${clrs.text};
  height: 0.25em;
  position: absolute;
  -webkit-transform: rotate(0);
  transform: rotate(0);
  top: 50%;
  transition: all 0.2s;

  &:before {
    pointer-events: none;
    display: block;
    content: "";
    width: 50%;
    border-radius: 0.25em;
    background-color: ${clrs.text};
    height: 0.25em;
    position: absolute;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    left: 1em;
    top: 0.8em;
  }

  &:after {
    pointer-events: none;
    display: block;
    content: "";
    width: 50%;
    border-radius: 0.25em;
    background-color: ${clrs.text};
    height: 0.25em;
    position: absolute;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    left: 0;
    top: -0.8em;
  }

  &.open {
    -webkit-transform: translateX(-2em);
    transform: translateX(-2em);
    background-color: initial;

    &:before {
      width: 100%;
      -webkit-transform: translateX(2em) rotate(135deg);
      transform: translateX(2em) rotate(135deg);
      left: 0.5em;
      top: 0;
    }

    &:after {
      width: 100%;
      -webkit-transform: translateX(2em) rotate(-135deg);
      transform: translateX(2em) rotate(-135deg);
      left: 0.5em;
      top: 0;
    }
  }

  @media ${breakpoints.laptop} {
    height: 0.3em;

    &:before {
      height: 0.3em;
      left: 1.7em;
    }

    &:after {
      height: 0.3em;
    }
  }

  @media ${breakpoints.desktop} {
    height: 0.45em;

    &:before {
      height: 0.45em;
      top: 1.2em;
      left: 2.2em;
    }

    &:after {
      height: 0.45em;
      top: -1.2em;
    }
  }
`;
