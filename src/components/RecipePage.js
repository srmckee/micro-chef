import React, { useEffect, useState } from "react";
import RecipeTitle from "./RecipeTitle";
import RecipePrepCookInfo from "./RecipePrepCookInfo";
import RecipeIngredients from "./RecipeIngredients";
import RecipePic from "./RecipePic";
import RecipeInstructions from "./RecipeInstructions";
import getRecipeInfoPage from "../lib/getRecipeInfoPage";
import Grid from '@material-ui/core/Grid';

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
        <Grid container direction="row" justify="space-between" alignItems="flex-start" wrap="nowrap" style={{marginLeft: "15px"}}>
           <Grid item xs={6}>
               <div>
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
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{}}>
                    <RecipePic data={recipeData.image} style={{}}/>
                </div>
            </Grid>
        </Grid>
    )
  );
}
