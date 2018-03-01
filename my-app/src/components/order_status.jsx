import React,{Component} from 'react';

class OrderStatus extends Component
{
  render()
  {
    return(

    <div className="order-status-panel">
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
    <form id="reivew_form" method="GET" action="review.html"></form>
    <div className="panel-footer">
        <button className="btn next-btn" type="submit" form="reivew_form" value="review">Received Order</button>
    </div>
      </div>

    );
  }
}
export default OrderStatus
