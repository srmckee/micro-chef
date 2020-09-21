// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Header for main page
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import '../../index.css'; //import index css to get font
import logo from "../../assets/logo.png";
import mustache from "../../assets/mustache.png";
import "./Header.css";

export default function Header(props) {

    return (
        <AppBar position="static" square={false} style={{
            // appbar styling only works in-line
            backgroundColor: "#E3D5BF",
            borderRadius: "20px",
            width: "98%",
            height: "80px",
            margin: "3% auto 3.5%"}}>
            <Toolbar className="toolbar">
                <img src={logo} alt="Logo" style={{
                    // img styling only works in-line
                    position: "absolute",
                    top: "-30%",
                    left: "1.5%",
                    width: "77px",
                }}/>
                <div className="div-prop">
                  <Typography  variant="h6" className="logo-text">
                    MicroChef
                  </Typography>
                </div>
                <div className="div-group">
                <Button  className="button-prop">LOGIN</Button>
                <Button  className="button-prop">ABOUT</Button>
                <img src={mustache} alt="Mustache" style={{
                    // img styling only works in-line
                    position:"relative",
                    height: 40,
                    top: 15}} />
                </div>
            </Toolbar>
        </AppBar>
    );
}
