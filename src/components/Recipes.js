import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recipe from "./Recipe";

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

    return (
        <div className={classes.root} >
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
            </Grid>
        </div>
    );
}