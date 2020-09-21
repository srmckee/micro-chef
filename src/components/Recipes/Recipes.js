// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Component for recipe grid page
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Recipe from "../Recipe/Recipe";
import getRecipeInfo from "../../lib/getRecipeInfo";
import "../../index.css"; //import index css to get font
import RecipesNav from "../RecipesNav/RecipesNav";

import { Link } from "react-router-dom";
 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "85%",
    margin: "auto",
  },
  recipe: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Recipes({ match }) {
  const classes = useStyles();
  const [recipeData, setRecipeData] = useState(null); // list containing lists of three recipes
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      await getRecipeInfo().then((recipes) => {
        let recipeList = recipes.data.data.recipesListOfficials;
        let chunked = [];
        for (let i = 0; i < recipeList.length; i += 3) {
          let chunk = recipeList.slice(i, i + 3);
          if (chunk.length === 3) {
            chunked.push(chunk);
          }
        }
        setRecipeData(chunked);
        setIsLoading(false);
      });
    }
    getData();
  }, []);

  return (
    <React.Fragment>
      {!isLoading && (
        <div className={classes.root}>
          <Grid container spacing={3} style={{ marginBottom: "3%" }}>
            {recipeData
              .slice((match.params.id - 1) * 10, match.params.id * 10)
              .map((row, i) => (
                <Grid
                  container
                  spacing={3}
                  key={i}
                  style={{ marginBottom: "3%" }}
                >
                  <Grid item xs role="navbutton" key={row[0].id}>
                    <Link to={`/recipe/${row[0].id}`} key={row[0].id}>
                      <Recipe
                        data={row[0]}
                        key={row[0].id}
                        className={classes.recipe}
                      >
                        xs
                      </Recipe>
                    </Link>
                  </Grid>
                  <Grid item xs role="navbutton" key={row[1].id}>
                    <Link to={`/recipe/${row[1].id}`} key={row[1].id}>
                      <Recipe
                        data={row[1]}
                        className={classes.recipe}
                        key={row[1].id}
                      >
                        xs
                      </Recipe>
                    </Link>
                  </Grid>
                  <Grid item xs role="navbutton" key={row[2].id}>
                    <Link to={`/recipe/${row[2].id}`} key={row[2].id}>
                      <Recipe
                        data={row[2]}
                        className={classes.recipe}
                        key={row[2].id}
                      >
                        xs
                      </Recipe>
                    </Link>
                  </Grid>
                </Grid>
              ))}
          </Grid>
          <RecipesNav pageNum={match.params.id} />
        </div>
      )}
    </React.Fragment>
  );
}
