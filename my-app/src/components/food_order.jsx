import React,{Component} from 'react';

class FoodOrder extends Component
{
  render()
  {
    return(
     
<div>
    <form id="checkout_form" method="POST" onsubmit="return calculatePrice()" action="checkout.html">
    <div className="shopping-cart" id="shopping_cart">
        <div className="title">
            Food Order
        </div>
        <script src="../js/food_order.js"></script>
        <div className="panel-footer">
            <button className="btn back-btn" type="submit" form="list_chefs_form" value="back">Back</button>
            <button className="btn next-btn" type="submit" form="checkout_form" value="submit_order">Submit Order</button>
        </div>
    </div>
    </form>
    <form id="list_chefs_form" method="GET" action="list_chefs.html"></form>
</div>
      
    );
  }
}
export default FoodOrder
