import React, { useEffect, useState } from "react";
import RecipeTitle from "./RecipeTitle";
import RecipePrepCookInfo from "./RecipePrepCookInfo";
import RecipeIngredients from "./RecipeIngredients";
import RecipePic from "./RecipePic";
import RecipeInstructions from "./RecipeInstructions";
import getRecipeInfoPage from "../lib/getRecipeInfoPage";

export default function RecipePage(props) {
  let recipeid = props.match.params.recipeid; //473967
  const [recipeData, setRecipeData] = useState(null); // a recipe
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      await getRecipeInfoPage(recipeid).then((recipe) => {
        setRecipeData(recipe.data.data.recipesListOfficials[0]);
        setIsLoading(false);
      });
    }
    getData();
  }, [recipeid]);
  return (
    !isLoading && (
      <React.Fragment>
        <RecipePic data={recipeData.image} />
        <RecipeTitle data={recipeData.title} />
        <RecipePrepCookInfo
          data={{
            prepTime: recipeData.preparationMinutes,
            cookTime: recipeData.cookingMinutes,
            price: recipeData.pricePerServing,
          }}
        />
        <RecipeIngredients data={recipeData.extendedIngredients} />
        <RecipeInstructions data={recipeData.analyzedInstructions[0].steps} />
      </React.Fragment>
    )
  );
}
