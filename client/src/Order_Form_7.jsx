import React, { Component } from 'react';
import './Order_Form_7.css';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class Order_Form_7 extends Component {
    dateValue = new Date();
    render() {
        return (
            <div className="Order_Form_7">
                <div className="Order_Form_7-container">
                    <div className="Order_Form_7-body>">

                        <div className="Order_Form_7-header-top">
                            <p className="Order_Form_7-numbers number-circle"> 5 </p>
                            <h3> Tell us when the order should be finished. </h3>
                        </div>
                        
                        <div className="Order_Form_7-date-picker">
                            <DatePickerComponent value={this.dateValue} placeholder="Enter Date:"></DatePickerComponent>
                        </div>

                        <div className="Order_Form_7-tac">
                            <p> *Do note we ask an additional 40% of your total order on rush orders (if your order is needed in less than 14 working days).</p>
                        </div>

                        <div className="Order_Form_7-header-bottom">
                            <p className="Order_Form_7-numbers number-circle"> 6 </p>
                            <h3> How would you like to receive your order? </h3>
                        </div>

                        <div className="Order_Form_7-checkboxes">
                            <div className="Order_Form_7-checkbox">
                                <form>
                                    <div className='form-check-rush'>
                                        <input type="radio" id="rush" name="pick" value="rush" />
                                        <label for="rush"> Delivery </label>
                                    </div>

                                    <div className='form-check-pick'>
                                        <input type="radio" id="pickup" name="pick" value="pickup" className ="pickup" />
                                        <label for="pickup">Pick Up at Store</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className ="Order_Form_7-footer">
                        <div className="Order_Form_7-buttons">
                            <button className="Order_Form_7-button-back btn-primary"> Back </button>
                            <button className="Order_Form_7-button-next btn-primary"> Next </button>
                        </div>
                    </div>
                    
            </div>
        );
    }
}

export default Order_Form_7;