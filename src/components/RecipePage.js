import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RecipeTitle from "./RecipeTitle";
import RecipePrepCookInfo from "./RecipePrepCookInfo";
import RecipeIngredients from "./RecipeIngredients";
import RecipePic from "./RecipePic";
import RecipeInstructions from "./RecipeInstructions";

const RecipePage = () => {
  return (
    <React.Fragment>
      <RecipePic />
      <RecipeTitle />
      <RecipePrepCookInfo />
      <RecipeIngredients />
      <RecipeInstructions />
    </React.Fragment>
  );
};

export default RecipePage;
