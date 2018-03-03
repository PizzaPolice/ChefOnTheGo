import React,{Component} from 'react';
import { Link } from "react-router-dom";

class OrderStatus extends Component
{
  render()
  {
    return(
        <div className="outer-panel">
            <div className="panel-body">
                <h2 className="title">Your Order Has Been Placed!</h2>
                <table className="countdownContainer">
                    <tr className="info">
                        <td colspan="3"> Your food will arrive in:</td>
                    </tr>
                    <tr className="info">
                        <td id="hours">20</td>
                        <td id="minutes">23</td>
                        <td id="seconds">2</td>
                    </tr>
                    <tr>
                        <td> Hours</td>
                        <td> Minutes</td>
                        <td> Seconds</td>
                    </tr>
                </table>
            </div>
            <div className="panel-footer">
                <Link to="review">
                    <button className="btn next-btn">Received Order</button>
                </Link>
            </div>
        </div>
    );
  }
}
export default OrderStatus
