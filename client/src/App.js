import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import HomePageCustomerLoggedIn from './HomePageCustomerLoggedIn';
import NavBarStaff from './NavBarStaff';
import NavBarOwner from "./NavBarOwner";
import TermsAndConditions from "./TermsAndConditions";
import StaffList from "./StaffList";
import StaffAccountViewOwner from "./StaffAccountViewOwner";
import OrderForm1 from "./OrderForm1";
import CreateStaffAccountOwner from "./CreateStaffAccountOwner";
import StaffAccountUpdateOwner from "./StaffAccountUpdate";
import OrderPickup from "./OrderPickup";
import ShippingAddress from "./ShippingAddress";
import CustAccDetail from "./CustAccDetail";
import CustMyOrders from "./CustMyOrders";
import LoginPage from "./LoginPage";
import OrderBeingConfirmed from "./OrderBeingConfirmed";
import OrderForm2 from "./OrderForm2";
import Downpayment from "./Downpayment";
import OrderForm5 from "./OrderForm5";
import InvitationDraftCustomer from './InvitationDraftCustomer'
import InvitationDraftStaff from './InvitationDraftStaff'
import OrderDetailsCustomer from "./OrderDetailsCustomer";
import OrderDetailsStaff from "./OrderDetailsStaff";
import OrderForm4 from "./OrderForm4";
import OrderForm3 from "./OrderForm3";
import OrderHistoryStaffTable from "./OrderHistoryStaffTable";
import OrderHistoryStaff from "./OrderHistoryStaff";
import OrderListStaffTable from "./OrderListStaffTable";
import OrderListStaff from "./OrderListStaff";
import OrderDocumentation from "./OrderDocumentation";
import OrderDocumentationTable from "./OrderDocumentationTable";
import CheckOrder from "./CheckOrder";
import OrderDocumentationCustomer from "./OrderDocumentationCustomer";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
    const [success, setSuccess] = useState(false);

    return <React.Fragment>
        <Routes>
            <Route path='*' element={<ErrorPage />} />
            {/* Main Page */}
            <Route path='/' element=
                {<HomePage
                    success={success}
                />} />
            <Route path='/homepage' element={<HomePageCustomerLoggedIn />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element=
                {<Login
                    success={success}
                    setSuccess={setSuccess}
                />} />
            {/* Customer Order Form */}
            <Route path='/order-form-login' element={<LoginPage />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/order-form-1' element={<OrderForm1 />} />
            <Route path='/order-form-2' element={<OrderForm2 />} />
            <Route path='/order-form-3' element={<OrderForm3 />} />
            <Route path='/order-form-4' element={<OrderForm4 />} />
            <Route path='/order-form-5' element={<OrderForm5 />} />
            <Route path='/check-order' element={<CheckOrder />} />
            <Route path='/order-pickup' element={<OrderPickup />} />
            <Route path='/shipping-address' element={<ShippingAddress />} />
            <Route path='downpayment' element={<Downpayment />} />
            <Route path='/order-payment' element={<OrderBeingConfirmed />} />
            {/* Customer Account and Order Pages */}
            <Route path='/account-details' element={<CustAccDetail />} />
            <Route path='/current-orders' element={<CustMyOrders />} />
            <Route path='/order-details' element={<OrderDetailsCustomer />} />
            <Route path='/documentation-of-changes' element={<OrderDocumentationCustomer />} />
            <Route path='/invitation-draft' element={<InvitationDraftCustomer />} />
            {/* Staff Pages */}
            <Route path='/order-list-staff' element={<OrderListStaff />} />
            <Route path='/order-details-staff' element={<OrderDetailsStaff />} />
            <Route path='/invitation-draft-staff' element={<InvitationDraftStaff />} />
            <Route path='/order-history-staff' element={<OrderHistoryStaff />} />
            {/* Documentaion of Changes for the staff? */}
            {/* Owner Pages */}
            <Route path='/create-staff' element={<CreateStaffAccountOwner />} />
            <Route path='/view-staff' element={<StaffAccountViewOwner />} />
            <Route path='/update-staff' element={<StaffAccountUpdateOwner />} />
            <Route path='/staff-list' element={<StaffList />} />
        </Routes>
        {/* <StaffList /> */}
        <InvitationDraftStaff />

    </React.Fragment>
}

export default App
