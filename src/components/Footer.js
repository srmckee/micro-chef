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
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {main: '#000000'},
    },
    shape: {
        square: false,
        borderRadius: 4,
    },
    typography: {
        /*fontFamily: 'Coiny',*/
    },

})

function HigherOrderComponent(props) {
    const {classes} = props;
    return <ThemeProvider theme={theme}>
        <Footer className={classes.root}></Footer>;
    </ThemeProvider>
}

function Footer(props) {
    return (
        <React.Fragment>
        <AppBar position="static" square={false} elevation={0}
                style={{borderRadius: 20, width: "98%", height: 80, margin: "3% auto 2%"}}>
            <Toolbar style={{display: "inline-flex", justifyContent: "space-between"}}>
                <Typography variant="h6"
                            style={{fontFamily: 'Coiny', fontSize: 15}}>
                    Partnership
                </Typography>

                <Typography variant="h6"
                            style={{fontFamily: 'Coiny', fontSize: 15}}>
                    Company
                </Typography>
                <div style={{flexWrap: "nowrap", display: "inline-block"}}>
                    <img src={logo} alt="Logo" style={{display: "inline-block", float: "left", height: "50%", width: "auto"}}/>
                    <div style={{display: "inline-block", marginTop: "30%"}}>
                    <Typography variant="h6"
                                style={{position: "relative", fontFamily: 'Coiny', fontSize: 30}}>
                        Micro
                    </Typography>
                    <Typography variant="h6"
                                style={{position: "relative", bottom: 20, fontFamily: 'Coiny', fontSize: 30}}>
                        Chef
                    </Typography>
                    </div>
                </div>
                <Typography variant="h6"
                            style={{fontFamily: 'Coiny', fontSize: 15}}>
                    Help
                </Typography>
                <Typography variant="h6"
                            style={{fontFamily: 'Coiny', fontSize: 15}}>
                    Blog
                </Typography>
                <Typography variant="h6"
                            style={{fontFamily: 'Coiny', fontSize: 15}}>
                    Resources
                </Typography>
            </Toolbar>
        </AppBar>
        <hr />
            <IconButton edge="start" className={{}} color="inherit" aria-label="menu" />
            <IconButton edge="start" className={{}} color="inherit" aria-label="menu" />
            <IconButton edge="start" className={{}} color="inherit" aria-label="menu" />
            <IconButton edge="start" className={{}} color="inherit" aria-label="menu" />
        </React.Fragment>
    )
}

HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HigherOrderComponent)
