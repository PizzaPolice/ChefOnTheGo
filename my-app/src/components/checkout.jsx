import React,{Component} from 'react';

class Checkout extends Component
{
  render()
  {
    return(
<body>
    <div className="checkout-panel">
        <div className="panel-body">
            <h2 className="title">Checkout</h2>
            <form id="order_status_form" onsubmit="return checkout()" method="POST" action="order_status.html">
            <div className="payment-method">
                <label for="card" className="method card">
                    <span className="card-logos">
                        <img src="../img/visa_logo.png" alt=""></img>
                        <img src="../img/mastercard_logo.png" alt=""></img>
                    </span>
                    <span className="radio-input">
                        <input id="card" type="radio" name="payment"></input>
                        <span id="cardspan"></span>
                    </span>
                </label>
                <label for="paypal" className="method paypal">
                    <img src="../img/paypal_logo.png" alt=""></img>
                    <span className="radio-input">
                        <input id="paypal" type="radio" name="payment"></input>
                        <span id="paypalspan"></span>
                    </span>
                </label>
            </div>

            <div className="input-fields">
                <div className="column-1">
                    <label for="cardholder">Cardholder's Name</label>
                    <input type="text" id="cardholder" name="cardholder"></input>

                    <div className="column-2">
                        <label for="cardnumber">Card Number</label>
                        <input type="password" id="cardnumber" name="cardnumber"></input>
                    </div>

                    <div className="small-inputs">
                        <div>
                            <label for="date">Exp Date</label>
                            <input type="text" id="date" placeholder="MM / YY" name="date"></input>
                        </div>
                        <div>
                            <label for="verification">CVV / CVC *</label>
                            <input type="text" id="verification" name="verifcation"></input>
                        </div>
                        <div className="column-3">
                            <label for="Zipcode">Zipcode</label>
                            <input type="text" id="Zipcode" name="zipcode"></input>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
        <form id="food_order_form" method="GET" action="food_order.html"></form>
        <div className="panel-footer">
            <button className="btn back-btn" form="food_order_form" type="submit">Back</button>
            <button className="btn next-btn" form="order_status_form" type="submit">Checkout</button>
        </div>
    </div>
</body>
      

    );
  }
}
export default Checkout
