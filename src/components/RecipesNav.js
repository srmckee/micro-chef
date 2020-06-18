// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Component for navigation between recipe grid pages
import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function RecipesNav() {
    return (<div style={{marginLeft: "42%", marginRight: "42%"}}>
        <Grid container spacing={3} style={{marginBottom: "3%"}}>
            <Grid item xs>
                <Typography component={Link} to={`/page/1`} style={{
                    fontFamily: "Coiny",
                    textDecoration: "none", color: '#DBA496'
                }}>
                    1
                </Typography>
            </Grid>
            <Grid item xs>
                <Typography component={Link} to={`/page/2`} style={{
                    fontFamily: "Coiny",
                    textDecoration: "none", color: '#DBA496'
                }}>
                    2
                </Typography>
            </Grid>
            <Grid item xs>
                <Typography component={Link} to={`/page/3`} style={{
                    fontFamily: "Coiny",
                    textDecoration: "none", color: '#DBA496'
                }}>
                    3
                </Typography>
            </Grid>

            <Grid item xs>

                <Typography component={Link} to={`/page/4`} style={{
                    fontFamily: "Coiny",
                    textDecoration: "none", color: '#DBA496'
                }}>
                    4
                </Typography>
            </Grid>

            <Grid item xs>

                <Typography component={Link} to={`/page/5`} style={{
                    fontFamily: "Coiny",
                    textDecoration: "none", color: '#dba496'
                }}>
                    5
                </Typography>
            </Grid>

        </Grid>
    </div>)
};
