import React, { Component } from "react";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import NavBarStaff from './NavBarStaff';
import NavBarOwner from "./NavBarOwner";
import OrderForm_2 from "./OrderForm_2";
import StaffList from "./StaffList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
    render() {
        return <React.Fragment>
            <NavBar />
            <Routes>
                {/* <Route path='/' element={<HomePage />} /> */}
                <Route path='/aboutus' element={<AboutUs />} />
            </Routes>

            <LoginForm />
            <SignUpForm />

            {/*
            <NavBarOwner />
            <NavBarStaff />
            <OrderForm_2 /> 
            */}
        </React.Fragment>
    }
}
