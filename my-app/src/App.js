import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/chat">Chat</Link>
            </li>

            <li>
              <Link to="/inactive_chef">Inactive Chef</Link>
            </li>
            <li>
              <Link to="/edit_dishes">Edit Dishes</Link>
            </li>

            <li>
              <Link to="/food_order">Food Order</Link>
            </li>
            <li>
              <Link to="/active_chef">Active Chef</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
          <hr/>
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
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
