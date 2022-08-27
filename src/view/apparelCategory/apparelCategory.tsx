import React from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  TitleContainer,
  ItemsContainer,
} from "./apparelCategory.styles";

import ApparelTile from "components/apparelTile/apparelTile";

const ApparelCategory: React.FC = () => {
  const title = useParams();

  return (
    <Container>
      <TitleContainer>
        <h2>{title.apparelCategory}</h2>
      </TitleContainer>
      <ItemsContainer>
        <ApparelTile title="Jeans" imageUrl="/" />
        <ApparelTile title="Shorts" imageUrl="/" />
        <ApparelTile title="Long-sleeved shirt" imageUrl="/" />
        <ApparelTile title="Short-sleeved shirt" imageUrl="/" />
      </ItemsContainer>
    </Container>
  );
};

export default ApparelCategory;
