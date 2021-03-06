import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import Login from './components/login.js';
import Signup from './components/signup.js'
import Customize from './components/customize.js';
import Chat from './components/chat.jsx';
import ListChefs from './components/list_chefs.js';
import Review from './components/review.jsx';
import EditDishes from './components/edit_dishes.jsx';
import InactiveChef from './components/inactive_chef.jsx';
import ActiveChef from './components/active_chef.jsx';
import FoodOrder from './components/food_order.jsx';
import Checkout from './components/checkout.jsx';
import OrderStatus from './components/order_status.jsx';

require('./App.css');

class App extends Component {  
  render(){
    return (
      <BrowserRouter>
      <div>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/customize" component={Customize}/>
          <Route path="/list_chefs" component={ListChefs}/>
          <Route path="/review" component={Review}/>
          <Route path="/inactive_chef" component={InactiveChef}/>
          <Route path="/edit_dishes" component={EditDishes}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/active_chef" component={ActiveChef}/>
          <Route path="/food_order" component={FoodOrder}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/order_status" component={OrderStatus}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
