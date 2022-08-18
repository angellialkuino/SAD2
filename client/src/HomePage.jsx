import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="m-5">
                <h1 className="text-center fw-bold">Custom-made Designs</h1>
                <div className="horizontal-content m-5">
                    <div className="feed-frame mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/sample1.jpg'} alt="Debut Invitation" />
                        <h4 className="text-bg">Debut Invitation</h4>
                    </div>
                    <div className="feed-frame mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                        <h4 className="text-bg">Wedding Invitation</h4>
                    </div>
                    <div className="feed-frame mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/sample3.jpg'} alt="Debut Invitation" />
                        <h4 className="text-bg">Wedding Invitation</h4>
                    </div>
                    <div className="feed-frame mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/sample4.jpg'} alt="Birthday Invitation" />
                        <h4 className="text-bg">Birthday Invitation</h4>
                    </div>
                    <div className="feed-frame mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/sample5.jpg'} alt="Debut Invitation" />
                        <h4 className="text-bg">Wedding Invitation</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;