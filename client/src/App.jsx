import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import NavBarStaff from './NavBarStaff';
import NavBarOwner from "./NavBarOwner";
import TermsAndConditions from "./TermsAndConditions";
import StaffList from "./StaffList";
import LoginForm from "./LoginForm";
import StaffProfile from "./StaffProfile";
import StaffAccountViewOwner from "./StaffAccountViewOwner";
import Order_Form_1 from "./Order_Form_1";
import CreateStaffAccountOwner from "./CreateStaffAccountOwner";
import StaffAccountUpdateOwner from "./StaffAccountUpdate";
import OrderPickup from "./OrderPickup";
import ShippingAddress from "./ShippingAddress";
import CustAccDetail from "./CustAccDetail";
import CustMyOrders from "./CustMyOrders";
import LoginPage from "./LoginPage";
import OrderBeingConfirmed from "./OrderBeingConfirmed";
import Order_Form_2 from "./Order_Form_2";
import Order_Form_10 from "./Order_Form_10";
import Order_Form_7 from "./Order_Form_7";
import InvitationDraftCustomer from './InvitationDraftCustomer'
import InvitationDraftStaff from './InvitationDraftStaff'
import OrderDetailsCustomer from "./OrderDetailsCustomer";
import OrderDetailsStaff from "./OrderDetailsStaff";
import Order_Form_4 from "./Order_Form_4";
import Order_Form_3 from "./Order_Form_3";
import Order_History_Staff_Table from "./Order_History_Staff_Table";
import Order_History_STAFF from "./Order_History_STAFF";
import Order_List_Staff_Table from "./Order_List_Staff_Table";
import Order_List_STAFF from "./Order_List_STAFF";
import Order_Documentation from "./Order_Documentation";
import Order_Documentation_Table from "./Order_Documentation_Table";
import Check_Order from "./Check_Order";
import Order_Documentation_Customer from "./Order_Documentation_Customer";
import Order_Documentation_Table_Customer from "./Order_Documentation_Table_Customer";
import Sign_up from "./Sign_up";

export default class App extends Component {
    render() {
        return <React.Fragment>
            <NavBar />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/OrderForm' element={<LoginPage />} />
                <Route path='/sign-up' element={<Sign_up />} />
                <Route path='/log-in' element={<LoginForm />} />
                <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
                <Route path='/order-form-1' element={<Order_Form_1 />} />
                <Route path='/order-form-2' element={<Order_Form_2 />} />
                <Route path='/order-form-3' element={<Order_Form_3 />} />
            </Routes>

        </React.Fragment>
    }
}
