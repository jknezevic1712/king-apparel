import styled from "styled-components";

import clrs from "assets/colors/colorPalette";

export const Container = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5%;
  background-color: ${clrs.bg};
  border-bottom: 1px solid ${clrs.text};

  & img {
    height: 35px;
    width: 35px;
    cursor: pointer;
  }
`;
