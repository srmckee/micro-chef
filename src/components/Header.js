import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from "@material-ui/core/Menu"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import logo from "../assets/logo.png"
import mustache from "../assets/mustache.png"

//{/*className={classes.menuButton}*/}
//{/*className={classes.title}*/}

//import "../styles.css";

const styles = {
    rounded: {
        borderRadius: 32,
    },
};
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#E3D5BF',
        },
        secondary: green,
    },
    shape: {
        square: false,
        borderRadius: 4,
    },
    overrides: {
        MuiPaper: {
            rounded: false,
        },
    },
})

function HigherOrderComponent(props) {
    const { classes } = props;
    return <ThemeProvider theme={theme}>
        <Header className={classes.rounded} ></Header>;
    </ThemeProvider>
}
function Header(props) {
    return (
        <AppBar position="static" square={false} style={{borderRadius: 20, width: "98%", maxHeight: "4%", margin: "1% auto auto"}}>
            <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                {/*<IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>*/}
                <div style={{justifyContent: "flex-start", flexWrap: "nowrap", display: "inline-block"}}>
                  <img src={logo} alt="Logo" style={{position: "absolute", top: "-0%", left: "0%", zIndex: 10/*maxHeight: "100%"*/}}/>
                  <Typography variant="h6">
                    MicroChef
                  </Typography>
                </div>
                <div style={{justifyContent: "flex-end", flexWrap: "nowrap", display: "inline-block"}}>
                <Button color="inherit">Login</Button>
                <Button color="inherit">About</Button>
                <img src={mustache} alt="Mustache" style={{maxHeight: "100%"}} />
                </div>
            </Toolbar>
        </AppBar>
    );
}

HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
