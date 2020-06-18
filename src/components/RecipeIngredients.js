import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import getRecipeInfoPage from "../lib/getRecipeInfoPage";

export default function RecipeIngredients() {
  const [ingredients, setIngredients] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    getRecipeInfoPage().then((recipeInfo) => {
      let ingredList =
        recipeInfo.data.data.recipesListOfficials[0].extendedIngredients;
      let listedOut = [];
      for (let i = 0; i < ingredList.length; i += 1) {
        listedOut.push(ingredList[i]);
      }
      setIngredients(listedOut);
      setIsLoading(false);
    });
  }, []);
  return (
    <React.Fragment>
      {!isLoading && (
        <div>
          <Typography
            variant="subtitle2"
            style={{
              fontFamily: "Coiny",
              fontSize: 20,
              position: "relative",
              transform: "translate(-32%, -32%)",
              top: 50,
              align: "left",
            }}
          >
            Ingredients:
          </Typography>
          {ingredients.map((entry) => (
            <ul>
              <Typography
                style={{
                  fontFamily: "comfortaa",
                  fontSize: 16,
                  top: 50,
                  position: "relative",
                  transform: "translate(-30%, -30%)",
                }}
                key={entry.id}
              >
                {entry.originalString}
              </Typography>
            </ul>
          ))}
        </div>
      )}
      ;
    </React.Fragment>
  );
}

//export default RecipeIngredients;
