// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Header for main page
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import '../index.css'; //import index css to get font
import logo from "../assets/logo.png";
import mustache from "../assets/mustache.png";

export default function Header(props) {
    return (
        <AppBar position="static" square={false} style={{backgroundColor: "#E3D5BF", borderRadius: 20, width: "98%", height: 80, margin: "3% auto 3.5%"}}>
            <Toolbar style={{display: "inline-flex", justifyContent: "space-between"}}>
                <img src={logo} alt="Logo"  style={{position: "absolute", top: "-30%", left: "1.5%", width:77}} />
                <div style={{justifyContent: "flex-start", display: "inline-block"}}>
                  <Typography  variant="h6" style={{color: "#000000", fontFamily:'Coiny', fontSize: 30, position: "relative", top: 13, left: "55%"}}>
                    MicroChef
                  </Typography>
                </div>
                <div style={{justifyContent: "flex-end", flexWrap: "nowrap", display: "inline-block"}}>
                <Button  style={{fontFamily:'Aclonica', color: "white", fontSize: 20, position: "relative", left: -10, top:4}}>LOGIN</Button>
                <Button  style={{fontFamily:'Aclonica', color: "white", fontSize: 20, position: "relative", left: -10, top:4}}>ABOUT</Button>
                <img src={mustache} alt="Mustache" style={{position:"relative",height: 40, top: 15}} />
                </div>
            </Toolbar>
        </AppBar>
    );
}
