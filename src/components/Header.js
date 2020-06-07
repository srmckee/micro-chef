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
import '../index.css'; //import index css to get font
import logo from "../assets/logo.png";
import mustache from "../assets/mustache.png";

const styles = {
    root: {
        fontFace: {
            fontFamily: 'Coiny',
            src: "local('Coiny'), url(../fonts/Coiny/Coiny-Regular.ttf) format('truetype')"
        }
    }
};

const theme = createMuiTheme({
    /*
    palette: {
        primary: {
            main: '#E3D5BF',
        },
        secondary: {main: '#000000'},
    },*/
    shape: {
        square: false,
        borderRadius: 4,
    },
    typography: {
        /*fontFamily: 'Coiny',*/
      },

})

function HigherOrderComponent(props) {
    const { classes } = props;
    return <ThemeProvider theme={theme}>
        <Header className={classes.root} ></Header>;
    </ThemeProvider>
}
function Header(props) {
    return (
        <AppBar position="static" square={false} style={{ backgroundColor: "#E3D5BF", borderRadius: 20, width: "98%", height: 80, margin: "3% auto 2%"}}>
            <Toolbar style={{display: "inline-flex", justifyContent: "space-between"}}>
                {/*<IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>*/}
                <img src={logo} alt="Logo"  style={{position: "absolute", top: "-30%", left: "1.5%", width:77}} />
                <div style={{justifyContent: "flex-start", /*flexWrap: "nowrap",*/ display: "inline-block"}}>
                  <Typography  variant="h6" style={{fontFamily:'Coiny', fontSize: 30, position: "relative", top: 13, left: "55%"}}>
                    MicroChef
                  </Typography>
                </div>
                <div style={{justifyContent: "flex-end", flexWrap: "nowrap", display: "inline-block"}}>
                <Button  style={{fontFamily:'Aclonica', color: "white", fontSize: 20,position: "relative",left: -10, top:4}}>LOGIN</Button>
                <Button  style={{fontFamily:'Aclonica', color: "white", fontSize: 20,position: "relative",left: -10, top:4}}>ABOUT</Button>
                <img src={mustache} alt="Mustache" style={{position:"relative",height: 40, top:15}} />
                </div>
            </Toolbar>
        </AppBar>
    );
}

HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
