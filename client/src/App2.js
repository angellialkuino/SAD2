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

import NavBar from "./NavBar";
import CustNavBar from "./NavBarCustomerLoggedIn";
import OwnerNavBar from "./NavBarOwner";
import StaffNavBar from "./NavBarStaff";
import OrderNavBar from "./NavBarOrder";


function App() {
    
    //order form data
    const [sumTotal,setSumTotal] = useState(0);
    const [payment_method, setPayment_method] = useState('')
    const [order, setOrder] = useState(
        {
            invite_type: '',
            material: '',
            event_date: '',
            motif: '',
            invite_title: '',
            font_style: '',
            content_link: '',
            num_of_invites: 0,
            peg_link: ''
            // order_deadline: '',
            // claim_type: ''
        }
    )

    const [items_array, setItems_array] = useState([
        { item_id: 'm1', item_name: 'page', price: 30, quantity: 2 },
        { item_id: 't1', item_name: 'plain print', price: 30, type:'all text' },
        { item_id: 'e1', item_name: 'envelope', price: 30 },
    ])

    return <React.Fragment>
        <Routes>

            {/* Main Pages */}
            <Route path="/" element={<NavBar/>}>
                <Route path='*' element={<ErrorPage />} />                
                <Route index element= {<HomePage/>} />
                <Route path='about-us' element={<AboutUs/>} />
                <Route path='sign-up' element={<SignUp />} />
                <Route path='login' element={<Login />} />
                <Route path='order-form-login' element={<LoginPage />} />
            </Route>


            {/* Customer Order Form */}
            <Route path="/form" element={<OrderNavBar/>}>
                <Route path='*' element={<ErrorPage />} />                
                <Route path='terms-and-conditions' element={<TermsAndConditions />} />
                <Route path='order-form-1' element=
                {<OrderForm1
                        items_array={items_array}
                        setItems_array={setItems_array}
                        order={order}
                        setOrder={setOrder}
                    />} />
                <Route path='order-form-2' element=
                    {<OrderForm2
                        order={order}
                        setOrder={setOrder}
                        items_array={items_array}
                        setItems_array={setItems_array}
                        sumTotal={sumTotal}
                        setSumTotal={setSumTotal}
                    />} />
                {/* <Route path='order-form-3' element=
                    {<OrderForm3
                        items_array={items_array}
                        setItems_array={setItems_array}
                        sumTotal={sumTotal}
                        setSumTotal={setSumTotal}
                    />} /> */}
                <Route path='order-form-4' element=
                    {<OrderForm4
                        order={order}
                        setOrder={setOrder}
                        items_array={items_array}
                        setItems_array={setItems_array}
                        sumTotal={sumTotal}
                        setSumTotal={setSumTotal}
                    />} />
                <Route path='order-form-5' element=
                    {<OrderForm5
                        order={order}
                        setOrder={setOrder}
                        items_array={items_array}
                        setItems_array={setItems_array}
                    />} />
                <Route path='check-order' element=
                    {<CheckOrder
                        order={order}
                        setOrder={setOrder}
                        items_array={items_array}
                        setItems_array={setItems_array}
                        sumTotal={sumTotal}
                        setSumTotal={setSumTotal}
                        payment_method={payment_method}
                    />} />
                <Route path='order-pickup' element={<OrderPickup order={order} />} />
                <Route path='shipping-address' element={<ShippingAddress order={order} />} />
                <Route path='downpayment' element=
                    {<Downpayment
                        setOrder={setOrder}
                        setItems_array={setItems_array}
                        order={order}
                        items_array={items_array}
                        sumTotal={sumTotal}
                        setSumTotal={setSumTotal}
                        payment_method={payment_method}
                        setPayment_method={setPayment_method}
                    />} />
            </Route>

            {/* Customer Account and Order Pages */}
            <Route path="/customer" element={<CustNavBar/>}>
                <Route path='*' element={<ErrorPage />} />        
                <Route index element= {<HomePage/>} />
                <Route path='about-us' element={<AboutUs/>} />
                <Route path='my-account' element={<CustAccDetail />} />
                <Route path='my-orders' element={<CustMyOrders />} />
                <Route path='order-details' element={<OrderDetailsCustomer />} />
                <Route path='order-log' element={<OrderDocumentationCustomer />} />
                <Route path='invitation-draft' element={<InvitationDraftCustomer />} />
                <Route path='order-payment' element={<OrderBeingConfirmed />} />
            </Route>

            {/* Staff Pages */}
            <Route path="/staff" element={<StaffNavBar/>}>
                <Route index element= {<HomePage/>} />
                <Route path='*' element={<ErrorPage />} />                
                <Route path='order-list' element={<OrderListStaff />} />
                <Route path='order-details' element={<OrderDetailsStaff />} />
                <Route path='invitation-draft' element={<InvitationDraftStaff />} />
                <Route path='order-history' element={<OrderHistoryStaff />} />
                <Route path='order-log' element={<OrderDocumentation />} />
            </Route>

            {/* Owner Pages */}
            <Route path="/owner" element={<OwnerNavBar/>}>
                <Route index element= {<HomePage/>} />
                <Route path='*' element={<ErrorPage />} />                
                <Route path='create-staff' element={<StaffAccountCreateOwner />} />
                <Route path='view-staff' element={<StaffAccountOwner />} />
                <Route path='staff-list' element={<StaffList />} />
                <Route path='order-list' element={<OrderListStaff />} />
                <Route path='order-history' element={<OrderHistoryStaff />} />

            </Route>
        </Routes>
    </React.Fragment>
}

export default App
