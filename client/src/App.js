import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import TermsAndConditions from "./TermsAndConditions";
import StaffList from "./StaffList";
import StaffAccountOwner from "./StaffAccountOwner";
import OrderForm1 from "./OrderForm1";
import StaffAccountCreateOwner from "./StaffAccountCreateOwner";
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
import OrderHistoryStaff from "./OrderHistoryStaff";
import OrderListStaff from "./OrderListStaff";
import OrderDocumentation from "./OrderDocumentation";
import CheckOrder from "./CheckOrder";
import OrderDocumentationCustomer from "./OrderDocumentationCustomer";
import SignUp from "./SignUp";
import Login from "./Login";
import CreateStaffAccountOwner from "./StaffAccountCreateOwner";
import OrderDetailsCheckBox from "./OrderDetailsCheckBox";

function App() {
    //if user is logged in and check role(?)
    const [success, setSuccess] = useState(false);
    const [roles, setRoles] = useState('');

    //order form data
    const sumTotal = useRef(0.00);
    const [payment_method, setPayment_method] = useState('')
    const [order, setOrder] = useState(
        {
            invite_type: '',
            material: '',
            material_price: 0,
            event_date: '',
            motif: '',
            invite_title: '',
            font_style: '',
            content_link: '',
            num_of_invites: 0,
            peg_link: '',
            order_deadline: '',
            claim_type: ''
        }
    )

    const [items_array, setItems_array] = useState([
        { item_id: 'm1', item_name: 'page' }
    ])

    return <React.Fragment>
        <Routes>
            {/* <Route path='*' element={<ErrorPage />} /> */}
            {/* Main Page */}
            {/* <Route path='/' element=
                {<HomePage
                    success={success}
                    roles={roles}
                />} /> */}
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element=
                {<Login
                    success={success}
                    setSuccess={setSuccess}
                    roles={roles}
                    setRoles={setRoles}
                />} />
            {/* Customer Order Form */}
            <Route path='/order-form-login' element={<LoginPage />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/order-form-1' element=
                {<OrderForm1
                    order={order}
                    setOrder={setOrder}
                    items_array={items_array}
                    setItems_array={setItems_array}
                />} />
            <Route path='/order-form-2' element=
                {<OrderForm2
                    order={order}
                    setOrder={setOrder}
                    items_array={items_array}
                    setItems_array={setItems_array}
                    sumTotal={sumTotal}
                />} />
            <Route path='/order-form-3' element=
                {<OrderForm3
                    items_array={items_array}
                    setItems_array={setItems_array}
                    sumTotal={sumTotal}
                />} />
            <Route path='/order-form-4' element=
                {<OrderForm4
                    order={order}
                    setOrder={setOrder}
                    items_array={items_array}
                    setItems_array={setItems_array}
                    sumTotal={sumTotal}
                />} />
            <Route path='/order-form-5' element=
                {<OrderForm5
                    order={order}
                    setOrder={setOrder}
                    items_array={items_array}
                    setItems_array={setItems_array}
                />} />
            <Route path='/check-order' element=
                {<CheckOrder
                    order={order}
                    setOrder={setOrder}
                    items_array={items_array}
                    setItems_array={setItems_array}
                    sumTotal={sumTotal}
                    payment_method={payment_method}
                />} />
            <Route path='/order-pickup' element={<OrderPickup />} />
            <Route path='/shipping-address' element={<ShippingAddress />} />
            <Route path='downpayment' element=
                {<Downpayment
                    payment_method={payment_method}
                    setPayment_method={setPayment_method}
                />} />
            <Route path='/order-payment' element={<OrderBeingConfirmed />} />
            {/* Customer Account and Order Pages */}
            <Route path='/account-details' element={<CustAccDetail />} />
            <Route path='/current-orders' element={<CustMyOrders />} />
            <Route path='/order-details' element={<OrderDetailsCustomer />} />
            <Route path='/order-loc-cust' element={<OrderDocumentationCustomer />} />
            <Route path='/invitation-draft' element={<InvitationDraftCustomer />} />
            {/* Staff Pages */}
            <Route path='/order-list-staff' element={<OrderListStaff />} />
            <Route path='/order-details-staff' element={<OrderDetailsStaff />} />
            <Route path='/invitation-draft-staff' element={<InvitationDraftStaff />} />
            <Route path='/order-history-staff' element={<OrderHistoryStaff />} />
            <Route path='/order-log' element={<OrderDocumentation />} />
            {/* Documentaion of Changes for the staff? */}
            {/* Owner Pages */}
            <Route path='/create-staff' element={<StaffAccountCreateOwner />} />
            <Route path='/staff' element={<StaffAccountOwner />} />
            <Route path='/staff-list' element={<StaffList />} />
        </Routes>

        <StaffAccountCreateOwner />

    </React.Fragment>
}

export default App
