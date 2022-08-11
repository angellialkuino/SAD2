import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="m-5">
                <h1 className="text-center fw-bold">Custom-made Designs</h1>
                <div className="vertical-center m-5">
                    <div className="feed-frame vertical-center">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Wedding Invitation" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;