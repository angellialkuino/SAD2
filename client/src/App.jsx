import React, { Component } from "react";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import OrderForm_2 from "./OrderForm_2";

export default class App extends Component {
    render() {
        return <React.Fragment>
            <NavBar />
            <HomePage />
            <OrderForm_2 />
        </React.Fragment>
    }
}
