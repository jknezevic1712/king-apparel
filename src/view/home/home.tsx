import React from "react";

import ApparelTile from "../../components/apparelTile/apparelTile";

import { HomeContainer, LogoContainer, TilesContainer } from "./home.styles";

import Logo96 from "assets/icons/home_96.png";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <LogoContainer>
        <img src={Logo96} alt="" />
      </LogoContainer>
      <TilesContainer>
        <ApparelTile title="Women" url="women" imageUrl="/" />
        <ApparelTile title="Men" url="men" imageUrl="/" />
        <ApparelTile title="Kids" url="kids" imageUrl="/" />
        <ApparelTile title="Spring" url="spring" imageUrl="/" />
        <ApparelTile title="Summer" url="summer" imageUrl="/" />
        <ApparelTile title="Autumn" url="autumn" imageUrl="/" />
        <ApparelTile title="Winter" url="winter" imageUrl="/" />
      </TilesContainer>
    </HomeContainer>
  );
};

export default Home;
