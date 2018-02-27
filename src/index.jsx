import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//Import components
import Login from './components/login.jsx'
import Review from './components/review.jsx'

render(
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/review" cmpnent={Review}/>
    </Router>,
    document.getElementById('container')
);
