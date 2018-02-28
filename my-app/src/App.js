import React, { Component } from 'react';
import './App.css';
import Login from './components/login.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
