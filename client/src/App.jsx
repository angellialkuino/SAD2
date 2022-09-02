import React, { Component } from "react";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import OrderForm_1 from "./OrderForm_1";
import NavBarStaff from './NavBarStaff';
import NavBarOwner from "./NavBarOwner";
import OrderForm_2 from "./OrderForm_2";
import StaffList from "./StaffList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import StaffProfile from "./StaffProfile";
import StaffAccountViewOwner from "./StaffAccountViewOwner";
import { Route, Routes } from "react-router-dom";
import CreateStaffAccountOwner from "./CreateStaffAccountOwner";
import StaffAccountUpdateOwner from "./StaffAccountUpdate";

export default class App extends Component {
    render() {
        return <React.Fragment>
            <NavBar />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/OrderForm_1' element={<OrderForm_1 />} />
                <Route path='/SignUpForm' element={<SignUpForm />} />
                <Route path='/LoginForm' element={<LoginForm />} />
            </Routes>

            {/*
            <StaffList />
            <StaffAccountViewOwner />
            <CreateStaffAccountOwner />
            <LoginForm />
            <SignUpForm />
            <NavBarOwner />
            <NavBarStaff />
            <OrderForm_2 /> 
            <StaffAccountUpdateOwner />
            <CustDetail />
            */}

        </React.Fragment>
    }
}
