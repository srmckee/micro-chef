import React from "react";
import Header from "./Header";
import Recipes from "./Recipes";
import Footer from "./Footer";
const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Recipes />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
