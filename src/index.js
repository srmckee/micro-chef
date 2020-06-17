// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// MicroChef react app entry point
// Contains routing for app
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Redirect exact path="/" to={"/page/1"}/>
            <Route path="/" component={Header}/>
            <Route exact path="/page/:id" component={Recipes}/>
            <Route path="/" component={Footer}/>
        </React.StrictMode>,
    </Router>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
