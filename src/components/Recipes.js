import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recipe from "./Recipe";
import getRecipeInfo from "../lib/getRecipeInfo";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "75%",
        margin: "auto"
    },
    recipe: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Recipes() {
    const classes = useStyles();
    const [recipeData, setRecipeData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async () => {
            setIsLoading(true);
            getRecipeInfo().then((recipes) => {
                    setRecipeData(recipes);
                    setIsLoading(false);
                }
            );
    }, []);
    return (
        <div className={classes.root} >
            <Grid container spacing={3} style={{marginBottom: "3%"}}>
                <Grid item xs>
                    <Recipe data={isLoading ? "Loading..." : recipeData.data.data.recipesList.title}
                            className={classes.recipe}>xs</Recipe>
                </Grid>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
            </Grid>{/*
            <Grid container spacing={3} style={{marginBottom: "3%"}}>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{marginBottom: "3%"}}>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
                <Grid item xs>
                    <Recipe className={classes.recipe}>xs</Recipe>
                </Grid>
            </Grid>*/}
        </div>
    );
}