import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from "@material-ui/core/Menu"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

//{/*className={classes.menuButton}*/}
//{/*className={classes.title}*/}

//import "../styles.css";

const useStyles = makeStyles({
    root: {
        color: 'red',
    },
});

const Header = (props) => {
    const { classes } = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default function Hook() {
    const classes = useStyles();
    return <Header className={classes.root}>Test</Header>;
}
