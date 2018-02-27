import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

render(<Home />, document.getElementById('container'));