import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from "@material-ui/core/Typography";
import '../../index.css'; //import index css to get font
import logo from "../../assets/logo.png";
import './Footer.css';

export default function Footer() {

    return (
        <React.Fragment>
        <AppBar position="static" square={false} elevation={0} className="app-bar"
                >
            <Toolbar className="toolbar" >
                <Typography variant="h6"
                            className='h6-prop'
                            >
                    Partnership
                </Typography>

                <Typography variant="h6"
                            className="h6-prop">
                    Company
                </Typography>
                <div className="div-prop">
                    <img src={logo} alt="Logo" style={{
                        display: "inline-block",
                        float: "left",
                        height: "50%",
                        width: "auto"}}/>
                    <div className="div-inner">
                    <Typography variant="h6"
                                className="h6-large-prop">
                        Micro
                    </Typography>
                    <Typography variant="h6"
                                className="h6-large-prop bottom-margin"
                                >
                        Chef
                    </Typography>
                    </div>
                </div>
                <Typography variant="h6"
                            className="h6-prop">
                    Help
                </Typography>
                <Typography variant="h6"
                           className="h6-prop">
                    Resources
                </Typography>
            </Toolbar>
        </AppBar>
        </React.Fragment>
    )
}
