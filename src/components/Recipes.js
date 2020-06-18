// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Component for recipe grid page
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Recipe from "./Recipe";
import getRecipeInfo from "../lib/getRecipeInfo";
import '../index.css'; //import index css to get font
import RecipesNav from "./RecipesNav";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "75%",
        margin: "auto",
        fontFace: {
            fontFamily: 'Coiny',
            src: "local('Coiny'), url(../fonts/Coiny/Coiny-Regular.ttf) format('truetype')"
        }
    },
    recipe: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Recipes({match}) {
    const classes = useStyles();
    const [recipeData, setRecipeData] = useState(null);  // list containing lists of three recipes
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async () => {
            setIsLoading(true);
            await getRecipeInfo().then((recipes) => {
                let recipeList = recipes.data.data.recipesLists;
                let chunked = [];
                for (let i = 0; i < recipeList.length; i+=3) {
                    let chunk = recipeList.slice(i, i + 3);
                    if (chunk.length === 3) {
                        chunked.push(chunk);
                    }
                }
                setRecipeData(chunked);
                setIsLoading(false);
           });

    }, []);

    return (
        <React.Fragment>
        {(!isLoading) && (
            <div className={classes.root} >
           <Grid container spacing={3} style={{marginBottom: "3%"}}>
               {recipeData.map(row => (
               <Grid container spacing={3} style={{marginBottom: "3%"}}>
                   <Grid item xs>
                       <Recipe data={row[0]}
                               className={classes.recipe}>xs</Recipe>
                   </Grid>
                   <Grid item xs>
                       <Recipe data={row[1]} className={classes.recipe}>xs</Recipe>
                   </Grid>
                   <Grid item xs>
                       <Recipe data={row[2]} className={classes.recipe}>xs</Recipe>
                   </Grid>
               </Grid>))
               };
           </Grid>
           <RecipesNav />
        </div>)}
        </React.Fragment>
    );
}