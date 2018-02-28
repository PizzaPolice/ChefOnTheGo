import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/login.js';
import Signup from './components/signup.js'
import Chat from './components/chat.jsx';
import Review from './components/review.jsx';
import EditDishes from './components/edit_dishes.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/chat">Chat</Link>
            </li>

            <li>
              <Link to="/edit_dishes">Edit Dishes</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/review" component={Review}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/edit_dishes" component={EditDishes}/>
      </div>
      </Router>
    );
  }
}

export default App;
