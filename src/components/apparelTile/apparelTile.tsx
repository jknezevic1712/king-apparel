import React from "react";

import { LinkContainer, Container } from "./apparelTile.styles";

interface ApparelTileProps {
  title: string;
  imageUrl: string;
  url?: string;
  pb5?: boolean;
}

const ApparelTile: React.FC<ApparelTileProps> = ({
  title,
  imageUrl,
  url,
  pb5,
}) => {
  if (url) {
    return (
      <LinkContainer to={`/${url}`} pb5={pb5}>
        <Container url={url} imageUrl={imageUrl}>
          <h2>{title}</h2>
        </Container>
      </LinkContainer>
    );
  } else {
    return (
      <Container imageUrl={imageUrl}>
        <h2>{title}</h2>
      </Container>
    );
  }
};

export default ApparelTile;
