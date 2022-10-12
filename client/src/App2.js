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
    
    const sumTotal = useRef(0);

    //order form data
    const [orderData, setOrderData] = useState({
        inviteType: '',
        material: '',
        materialPrice: 0,
        eventDate: '',
        motif: '',
        invitationTitle: '',
        font: '',
        contentLink: '',
        inviteNumbers: '',
        pegLink: '',
        pagesPaperAndColor: '',
        pagesPrice: {
            pagesSize: '',
            pagesSizePrice: 0,
        },
        envelope: false,
        envelopePaperAndColor: '',
        envelopePrice: {
            envelopeSize: '',
            envelopeSizePrice: 0,
        },
        envelopeLinerPricing: {
            envelopeLiner: false,
            envelopeLinerPrice: 0
        },
        envelopeLockPricing: {
            envelopeLock: false,
            envelopeLockPrice: 0
        },
        allTextembossPricing: {
            allTextEmboss: false,
            allTextEmbossPrice: 0
        },
        headerTextPricing: {
            headerText: '',
            headerTextPrice: 0
        },
        bodyTextPricing: {
            bodyText: '',
            bodyTextPrice: 0
        },
        otherPagesPricing: {
            otherPages: '',
            otherPagesPrice: 0
        },
        coverPricing: {
            cover: '',
            coverPrice: 0
        },
        cardsPricing: {
            cards: '',
            cardPrice: 0
        },
        waxSeal: '',
        sealColor: '',
        driedFlowers: '',
        brooch: '',
        orderFinish: '',
        receivalMethod: '',
        priceTotal: '',
        payentMethod: '',
    })


    return <React.Fragment>
        <Routes>
            {/* <Route path='*' element={<ErrorPage />} /> */}                

            {/* Main Pages */}
            <Route path="/dud" element={<NavBar/>}>
                <Route index element= {<HomePage/>} />
                <Route path='about-us' element={<AboutUs/>} />
                <Route path='sign-up' element={<SignUp />} />
                <Route path='login' element={<Login />} />
                <Route path='order-form-login' element={<LoginPage />} />
            </Route>


            {/* Customer Order Form */}
            <Route path="/form" element={<OrderNavBar/>}>
                <Route path='terms-and-conditions' element={<TermsAndConditions />} />
                <Route path='order-form-1' element=
                    {<OrderForm1
                        orderData={orderData}
                        setOrderData={setOrderData}
                        sumTotal={sumTotal}
                    />} />
                <Route path='order-form-2' element=
                    {<OrderForm2
                        orderData={orderData}
                        setOrderData={setOrderData}
                        sumTotal={sumTotal}
                    />} />
                <Route path='order-form-3' element=
                    {<OrderForm3
                        sumTotal={sumTotal}
                    />} />
                <Route path='order-form-4' element=
                    {<OrderForm4
                        sumTotal={sumTotal}
                    />} />
                <Route path='order-form-5' element=
                    {<OrderForm5
                        sumTotal={sumTotal}
                    />} />
                <Route path='check-order' element={<CheckOrder />} />
                <Route path='order-pickup' element={<OrderPickup />} />
                <Route path='shipping-address' element={<ShippingAddress />} />
                <Route path='downpayment' element={<Downpayment />} />
                <Route path='order-payment' element={<OrderBeingConfirmed />} />
            </Route>

            {/* Customer Account and Order Pages */}
            <Route path="/customer" element={<CustNavBar/>}>
                <Route index element= {<HomePage/>} />
                <Route path='about-us' element={<AboutUs/>} />
                <Route path='my-account' element={<CustAccDetail />} />
                <Route path='my-orders' element={<CustMyOrders />} />
                <Route path='order-details' element={<OrderDetailsCustomer />} />
                <Route path='order-log' element={<OrderDocumentationCustomer />} />
                <Route path='invitation-draft' element={<InvitationDraftCustomer />} />
            </Route>

            {/* Staff Pages */}
            <Route path="/staff" element={<StaffNavBar/>}>
                <Route index element= {<HomePage/>} />
                <Route path='order-list' element={<OrderListStaff />} />
                <Route path='order-details' element={<OrderDetailsStaff />} />
                <Route path='invitation-draft' element={<InvitationDraftStaff />} />
                <Route path='order-history' element={<OrderHistoryStaff />} />
                <Route path='order-log' element={<OrderDocumentation />} />
            </Route>

            {/* Owner Pages */}
            <Route path="/owner" element={<OwnerNavBar/>}>
                <Route index element= {<HomePage/>} />
                <Route path='create-staff' element={<StaffAccountCreateOwner />} />
                <Route path='view-staff' element={<StaffAccountOwner />} />
                <Route path='staff-list' element={<StaffList />} />
                <Route path='order-list' element={<OrderListStaff />} />
                <Route path='order-history' element={<OrderHistoryStaff />} />

            </Route>
        </Routes>
        {/* <AboutUs/> */}
        {/* <InvitationDraftCustomer/> */}
    </React.Fragment>
}

export default App
