// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Component for navigation between recipe grid pages
import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Icon from '@material-ui/core/Icon';

export default function RecipesNav({pageNum}) {
    let pages = [];
    for (let i = 1; i <= 5; i++) {
        let isCurPage = pageNum == i;
        pages.push(
        <Grid item xs>
            <>
                <div style={{zIndex: 1, backgroundColor: isCurPage ? '#DBA496' : '#FFFFFF', borderRadius: "50%",
                width: "25px", height: "25px"}}>
            <Typography component={Link} to={`/page/${i}`} style={{
                position: "relative",
                left: "8px",
                zIndex: 1,
                fontFamily: "Coiny",
                textDecoration: "none",
                color: isCurPage ? '#FFFFFF' : '#DBA496',
            }}>
                {i}
            </Typography>
                </div>
            </>
        </Grid>
        );
    }
    return (<div style={{marginLeft: "38%", marginRight: "38%"}}>
        <Grid container spacing={3} style={{marginBottom: "3%"}}>
            {pages}
       </Grid>
    </div>);
};
