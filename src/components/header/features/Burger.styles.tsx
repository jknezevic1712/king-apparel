import styled from "styled-components";

import clrs from "assets/colors/colorPalette";

export const BurgerContainer = styled.div`
  height: 35px;
  width: 35px;
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
`;

export const BurgerLines = styled.div`
  pointer-events: none;
  display: block;
  content: "";
  width: 75%;
  border-radius: 0.25em;
  background-color: ${clrs.text};
  height: 0.25em;
  // height: 100%;
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
    top: 1em;
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
    top: -1em;
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
`;
