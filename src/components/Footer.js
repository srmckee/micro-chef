import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from "@material-ui/core/Typography";
import '../index.css'; //import index css to get font
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <React.Fragment>
        <AppBar position="static" square={false} elevation={0}
                style={{color: "#000000", backgroundColor: "#FFFFFF", borderRadius: 20, width: "98%", height: 80,
                    margin: "3% auto 2%"}}>
            <Toolbar style={{display: "inline-flex", justifyContent: "space-between"}}>
                <Typography variant="h6"
                            style={{fontFamily: 'Coiny', fontSize: 15}}>
                    Partnership
                </Typography>

                <Typography variant="h6"
                            style={{fontFamily: 'Coiny', fontSize: 15}}>
                    Company
                </Typography>
                <div style={{fontFamily: 'Coiny', flexWrap: "nowrap", display: "inline-block"}}>
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
                    Resources
                </Typography>
            </Toolbar>
        </AppBar>
        </React.Fragment>
    )
}
