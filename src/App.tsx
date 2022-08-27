import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./view/home/home";
import ApparelCategory from "view/apparelCategory/apparelCategory";

import { AppContainer } from "./app.styles";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:apparelCategory" element={<ApparelCategory />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
