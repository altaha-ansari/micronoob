import React from "react";
import ReactDOM from "react-dom";
import "./static/index.css";
import "./static/article.css";
import "./static/ResponsiveIndex.css";
import App from "./App";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

ReactDOM.render( < Header / > , document.getElementById("header"));
ReactDOM.render( < NavBar / > , document.getElementById("menu"));
ReactDOM.render( < App / > , document.getElementById("Root"));