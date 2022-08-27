import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./apparelTile.styles";

interface ApparelTileProps {
  title: string;
  imageUrl: string;
  url?: string;
}

const ApparelTile: React.FC<ApparelTileProps> = ({ title, imageUrl, url }) => {
  if (url) {
    return (
      <Link to={`/${url}`}>
        <Container url={url} imageUrl={imageUrl}>
          <h2>{title}</h2>
        </Container>
      </Link>
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
