import React from "react";
import './HomePage.css';

function HomePage() {
    return (
        <div>
            <h1 className="text-center fw-bold m-5">Custom-made Designs</h1>
            <div className="horizontal-content m-5">
                <div className="feed-frame mb-5">
                    <img className="homepage-img" src={process.env.PUBLIC_URL + '/images/sample1.jpg'} alt="Debut Invitation" />
                    <h4 className="">Debut Invitation</h4>
                </div>
                <div className="feed-frame mb-5">
                    <img className="homepage-img" src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                    <h4 className="">Wedding Invitation</h4>
                </div>
                <div className="feed-frame mb-5">
                    <img className="homepage-img" src={process.env.PUBLIC_URL + '/images/sample3.jpg'} alt="Debut Invitation" />
                    <h4 className="">Wedding Invitation</h4>
                </div>
                <div className="feed-frame mb-5">
                    <img className="homepage-img" src={process.env.PUBLIC_URL + '/images/sample4.jpg'} alt="Birthday Invitation" />
                    <h4 className="">Birthday Invitation</h4>
                </div>
                <div className="feed-frame mb-5">
                    <img className="homepage-img" src={process.env.PUBLIC_URL + '/images/sample5.jpg'} alt="Debut Invitation" />
                    <h4 className="">Wedding Invitation</h4>
                </div>
            </div>
        </div>
    );
}

export default HomePage;