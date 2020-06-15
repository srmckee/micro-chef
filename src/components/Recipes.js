import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recipe from "./Recipe";
import getRecipeInfo from "../lib/getRecipeInfo";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../index.css'; //import index css to get font
import Typography from "@material-ui/core/Typography";

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
    const [recipeData, setRecipeData] = useState(null);  //chunked
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async () => {
            setIsLoading(true);
            getRecipeInfo().then((recipes) => {
                //setRecipeData(recipes);
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
               <div style={{marginLeft: "42%", marginRight: "42%"}}>
                   <Grid container spacing={3} style={{marginBottom: "3%"}}>
                       <Grid item xs>
                           <Typography component={Link} to={`/page/2`} style={{fontFamily: "Coiny",
                               textDecoration: "none", color: '#DBA496'}} >
                               1
                           </Typography>
                       </Grid>
                       <Grid item xs>
                               <Typography component={Link} to={`/page/2`} style={{fontFamily: "Coiny",
                                   textDecoration: "none", color: '#DBA496'}} >
                               2
                               </Typography>
                       </Grid>
                       <Grid item xs>
                       <Typography component={Link} to={`/page/3`} style={{fontFamily: "Coiny",
                           textDecoration: "none", color: '#DBA496'}} >
                           3
                       </Typography>
                       </Grid>

                           <Grid item xs>

                       <Typography component={Link} to={`/page/4`} style={{fontFamily: "Coiny",
                           textDecoration: "none", color: '#DBA496'}} >
                           4
                       </Typography>
                           </Grid>

                               <Grid item xs>

                       <Typography component={Link} to={`/page/5`} style={{fontFamily: "Coiny",
                           textDecoration: "none", color: '#DBA496'}} >
                           5
                       </Typography>
                               </Grid>

                   </Grid>
               </div>
        </div>)}
        </React.Fragment>
    );
}