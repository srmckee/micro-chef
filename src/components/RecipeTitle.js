import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import food from "../assets/recipe.png";
import getRecipeInfoPage from "../lib/getRecipeInfoPage";

export default function RecipeTitle() {
  const [recipeTitle, setRecipeTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    getRecipeInfoPage().then((recipeInfo) => {
      let title = recipeInfo.data.data.recipesListOfficials[0].title;
      setRecipeTitle(title);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <Typography
        variant="h1"
        style={{
          fontFamily: "Coiny",
          fontSize: 30,
          position: "relative",
          //transform: "translate(-30%, -30%)",
          top: 13,
          align: "center",
        }}
      >
        {recipeTitle}
      </Typography>
    </div>
  );
}

//export default RecipeTitle;
