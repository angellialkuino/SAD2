import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
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
import Order_Form_1 from "./Order_Form_1";
import Order_Form_2_NonWeddings from "./Order_Form_2_NonWeddings";
import CreateStaffAccountOwner from "./CreateStaffAccountOwner";
import StaffAccountUpdateOwner from "./StaffAccountUpdate";
import OrderPickup from "./OrderPickup";
import ShippingAddress from "./ShippingAddress";
import CustAccDetail from "./CustAccDetail";
import CustMyOrders from "./CustMyOrders";
import LoginPage from "./LoginPage";

export default class App extends Component {
    render() {
        return <React.Fragment>
            <NavBar />

            <Routes>
                {/* <Route path='/' element={<HomePage />} /> */}
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/OrderForm_1' element={<OrderForm_1 />} />
                <Route path='/SignUpForm' element={<SignUpForm />} />
                <Route path='/LoginForm' element={<LoginForm />} />
            </Routes>

            {/* <LoginForm /> */}
            {/* <CustAccDetail /> */}
            {/* <StaffList /> */}
            {/* <CustMyOrders /> */}
            <LoginPage />

        </React.Fragment>
    }
}
