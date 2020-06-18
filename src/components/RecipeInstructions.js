import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import getRecipeInfoPage from "../lib/getRecipeInfoPage";

export default function RecipeInstructions() {
  const [recipeData, setRecipeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    getRecipeInfoPage().then((recipeInfo) => {
      let stepsList =
        recipeInfo.data.data.recipesListOfficials[0].analyzedInstructions[0];
      let listedOut = [];
      for (let i = 0; i < stepsList.steps.length; i += 1) {
        listedOut.push(stepsList.steps[i]);
      }
      //console.log(listedOut);
      setRecipeData(listedOut);
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
              top: 70,
              align: "left",
            }}
          >
            Steps:
          </Typography>
          {recipeData.map((entry) => (
            <li
              style={{
                fontFamily: "Comfortaa",
                fontSize: 16,
                top: 59,
                position: "relative",
                align: "left",
                //transform: "translate(-30%, -30%)",
              }}
              key={entry.number}
            >
              {entry.step}
            </li>
          ))}
          ;
        </div>
      )}
    </React.Fragment>
  );
}

//export default RecipeInstructions;
