import React,{Component} from 'react';
import { Link } from "react-router-dom";

class Checkout extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        };
    }

    componentDidMount() {
        var storage = window.sessionStorage;
        if (storage !== undefined && storage !== null) {
            var total_price = storage.getItem("total_price");
            var price_parsed = JSON.parse(total_price);
            if (price_parsed !== null && price_parsed !== undefined) {
                this.setState({price: price_parsed});
            }
        }
    }

    render()
    {
        return(
        <div className="outer-panel">
            <div className="panel-body">
                <h2 className="title">Checkout</h2>
                <div className="payment-method">
                    <label htmlFor="card" className="method card">
                        <span className="card-logos">
                            <img src="../img/visa_logo.png" alt=""></img>
                            <img src="../img/mastercard_logo.png" alt=""></img>
                        </span>
                        <span className="radio-input">
                            <input id="card" type="radio" name="payment"></input>
                            <span id="cardspan">${this.state.price.toFixed(2)}</span>
                        </span>
                    </label>
                    <label htmlFor="paypal" className="method paypal">
                        <img src="../img/paypal_logo.png" alt=""></img>
                        <span className="radio-input">
                            <input id="paypal" type="radio" name="payment"></input>
                            <span id="paypalspan">${this.state.price.toFixed(2)}</span>
                        </span>
                    </label>
                </div>

                <div className="input-fields">
                    <div className="column-1">
                        <label htmlFor="cardholder">Cardholder's Name</label>
                        <input type="text" id="cardholder" name="cardholder"></input>

                        <div className="column-2">
                            <label htmlFor="cardnumber">Card Number</label>
                            <input type="password" id="cardnumber" name="cardnumber"></input>
                        </div>

                        <div className="small-inputs">
                            <div>
                                <label htmlFor="date">Exp Date</label>
                                <input type="text" id="date" placeholder="MM / YY" name="date"></input>
                            </div>
                            <div>
                                <label htmlFor="verification">CVV / CVC *</label>
                                <input type="text" id="verification" name="verifcation"></input>
                            </div>
                            <div className="column-3">
                                <label htmlFor="Zipcode">Zipcode</label>
                                <input type="text" id="Zipcode" name="zipcode"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel-footer">
                <Link to="food_order">
                    <button className="btn back-btn">Back</button>
                </Link>
                <Link to="order_status">
                    <button className="btn next-btn">Checkout</button>
                </Link>
            </div>
        </div>
        );
    }
}
export default Checkout
