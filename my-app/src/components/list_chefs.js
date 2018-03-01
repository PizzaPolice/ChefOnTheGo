import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ListChefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefs: []
        };

        this.retriveChefs();
    }

    retriveChefs() {
        var localStorage = window.localStorage;
        var listOfChefs = JSON.parse(localStorage.getItem("chef"));
        this.setState({chefs: listOfChefs})
    }

    ChefList(props) {
        const chefs = props.list;
        const listItems = chefs.map((chef) =>
            <li>{chef}</li>
        );
        return (<ul>{listItems}</ul>);
    }

    render() {
        return (
        <div className="outer-panel">
            <div className="panel-body">
                <h2 className="title">List of Chefs</h2>
                <div className="input-fields">
          {/*<ChefList list={this.state.chefs} />*/}
                </div>
            </div>
            <div className="panel-footer">
                <Link to="login">
                    <button className="btn back-btn">Go Back</button>
                </Link>
                <Link to="chat">
                    <button className="btn next-btn">Chat!</button>
                </Link>
            </div>
        </div>
        );
    }
}

export default ListChefs;
