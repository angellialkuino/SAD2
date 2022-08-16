import React, { Component } from "react";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

export default class App extends Component {
    render() {
        return <React.Fragment>
            <NavBar />
            <HomePage />
        </React.Fragment>
    }
}
