import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/login.js';
import Signup from './components/signup.js'
import Chat from './components/chat.jsx';
import Review from './components/review.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/review" component={Review}/>
          <Route path="/chat" component={Chat}/>
        </div>
      </Router>
    );
  }
}

export default App;
