import React, { Component } from 'react';
import { Link } from "react-router-dom";

const const_chefs = [
    {
        name: 'Jae',
        bio: 'Chef for 5 years',
        rating: '5 stars'
    },
    {
        name: 'Kevin',
        bio: 'Chef for 6 years',
        rating: '5 stars'
    },
    {
        name: 'Audrey',
        bio: 'Chef for 7 years',
        rating: '5 stars'
    }
]

function ChefList(props) {
    const chefs = props.chefs;
    const listItems = chefs.map((chef) => 
        <div key={chef.name} className="radio-input">
            <input name="chefs" type="radio"/>
            Name: {chef.name} <br/>
            Bio: {chef.bio} <br/>
            Rating: {chef.rating}
        </div>
    );
    return (<div>{listItems}</div>);
}
  
class ListChefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefs: const_chefs
        };
    }

    componentDidMount() {
        var storage = window.localStorage;
        if (storage !== undefined && storage !== null) {
            var chefs = storage.getItem("chefs");
            var chefList = JSON.parse(chefs);
            if (chefList !== null && chefList !== undefined) {
                this.setState({chefs: chefList});
            }
        }
    }
    
    render() {
        return (
        <div className="outer-panel">
            <div className="panel-body">
                <h2 className="title">List of Chefs</h2>
                <div className="input-fields">
                    <ChefList chefs={this.state.chefs}/>
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
