import React, { Component } from 'react';
import './Order_Form_5.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Order_Form_5 extends Component {
    render() {
        return (
            <div className ="Order_Form_5">
                <div className ="Order_Form_5-container">
                    <div className = "Order_Form_5-body">
                        <div className="Order_Form_5-carousel">
                            <div className = "Order_Form_5-pages">
                                <div className = "Order_Form_5-pages-top">
                                
                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>
                                
                                </div>
                                
                                <div className = "Order_Form_5-pages-bottom">

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>

                                    <div className = "Order_Form_5-page-example">
                                        <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                        <h4 className="text-bg">Wedding Invitation</h4>
                                    </div>
                                </div>
                            </div>

                        <div className ="Order_Form_5-pages-buttons">
                            <div className = "Order_Form_5-page-buttons">
                                <button className = "Order_Form_5-button-page-back">Back</button>
                                <button className = "Order_Form_5-button-page-next">Next</button>
                            </div>
                        </div>
                    </div>    

                            <div className = "Order_Form_5-dropdown">
                                <p>Paper Type and Color: </p>
                                <select name="papers" id="papers">
                                    <option value="1">Paper 1</option>
                                    <option value="2">Paper 2</option>
                                    <option value="3">Paper 3</option>
                                    <option value="4">Paper 4</option>
                                    <option value="5">Paper 5</option>
                                    <option value="6">Paper 6</option>
                                    <option value="7">Paper 7</option>
                                    <option value="8">Paper 8</option>
                                    <option value="9">Paper 9</option>
                                    <option value="10">Paper 10</option>
                                    <option value="11">Paper 11</option>
                                    <option value="12">Paper 12</option>
                                </select>
                            </div>
                        </div>    

                    </div>

                <div className = "Order_Form_5-footer">
                    <div className = "Order_Form_5-buttons-bottom">
                        <button className="Order_Form_5-button-back btn-primary"> Back </button>
                        <button className="Order_Form_5-button-next btn-primary"> Next </button>
                    </div>
                </div>

            </div>

        );
    }
}

export default Order_Form_5;