import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/login.js';
import Chat from './components/chat.jsx';
import Review from './components/review.jsx';
import EditDishes from './components/edit_dishes.jsx';
import InactiveChef from './components/inactive_chef.jsx';
import ActiveChef from './components/active_chef.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
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
              <Link to="/active_chef">Active Chef</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/review" component={Review}/>
          <Route path="/inactive_chef" component={InactiveChef}/>
          <Route path="/edit_dishes" component={EditDishes}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/active_chef" component={ActiveChef}/>
      </div>
      </Router>
    );
  }
}

export default App;
