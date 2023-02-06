// currently using RSuite

import React from "react";
import ReactDOM from "react-dom";
import { MyApp } from './app.js'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <MyApp />
        </Router>
    </React.StrictMode>,
rootElement);
