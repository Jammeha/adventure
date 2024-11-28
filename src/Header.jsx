import React from "react";

import Home from "./components/Home";
import Yours from "./components/Yours";
import Main from "./components/Main";
import Webbb from "./components/Webbb";
import Footer from "./components/Footer";
const Header = () => {
  return (
    <>
      <Home />
      <Main />
      <Yours />

      <Webbb />
      <Footer />
    </>
  );
};

export default Header;
