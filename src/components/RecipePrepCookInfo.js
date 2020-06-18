import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import getRecipeInfoPage from "../lib/getRecipeInfoPage";

export default function RecipePrepCookInfo() {
  //preparationMinutes
  //cookingMinutes
  //pricePerServing
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  const [price, setPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    getRecipeInfoPage().then((recipeInfo) => {
      let pTime =
        recipeInfo.data.data.recipesListOfficials[0].preparationMinutes;
      let cTime = recipeInfo.data.data.recipesListOfficials[0].cookingMinutes;
      //console.log("cTime" + cTime;
      let pri = recipeInfo.data.data.recipesListOfficials[0].pricePerServing;
      setPrepTime(pTime);
      setCookTime(cTime);
      setPrice(pri);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <Typography
        variant="body2"
        style={{
          fontFamily: "Comfortaa",
          fontSize: 20,
          position: "relative",
          transform: "translate(-21.5%, -21.5%)",
          top: 22,
          align: "left",
        }}
      >
        Prep Time: {prepTime}min. Cook Time: {cookTime}min. Cost: ${price}
      </Typography>
    </div>
  );
}

//export default RecipePrepCookInfo;
