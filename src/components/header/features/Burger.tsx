import React, { useState } from "react";

import { BurgerContainer, BurgerLines } from "./Burger.styles";

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <BurgerContainer onClick={() => setOpen((prevState) => !prevState)}>
      <BurgerLines className={open ? "open" : ""}></BurgerLines>
    </BurgerContainer>
  );
};

export default Burger;
