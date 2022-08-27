import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./header.styles";

import Burger from "./features/Burger";

// import homeIcon96 from "assets/icons/home_96.png";
import loginIcon100 from "assets/icons/login_100.png";
import logoutIcon100 from "assets/icons/logout_100.png";

const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Container>
      <Burger />
      <a href="/">
        <h1>KING Apparel</h1>
      </a>
      <img
        src={loggedIn ? logoutIcon100 : loginIcon100}
        alt=""
        onClick={() => setLoggedIn((prevState) => !prevState)}
      />
    </Container>
  );
};

export default Header;
