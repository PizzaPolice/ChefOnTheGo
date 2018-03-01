import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Customize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodtype: 'chinese',
            location: '',
            time: '',
            telephone: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        for (var key in this.state) {
            if (this.state[key] === '') {
                console.log(key, this.state[key])
                alert('Please completely fill out your form');
                event.preventDefault();
                break;
            }
        }
    }

    render() {
        return (
            <div className="outer-panel">
                <div className="panel-body">
                    <h2 className="title">Customize</h2>
                    <div className="input-fields">
                        <div className="input-line">
                            Food Type:
                            <select name="foodtype" onChange={this.handleChange}>
                                <option value="chinese">Chinese</option>
                                <option value="greek">Greek</option>
                                <option value="italian">Italian</option>
                                <option value="japanese">Japanese</option>
                                <option value="mediterranean">Mediterranean</option>
                                <option value="burgers">Burgers</option>
                                <option value="dessert">Dessert</option>
                            </select>
                        </div>
                        <div className="input-line">
                            Location:
                            <input type="text" name="location" onChange={this.handleChange}/>
                        </div>
                        <div className="input-line">
                            Time:
                            <input type="time" name="time" onChange={this.handleChange}/>
                        </div>
                        <div className="input-line">
                            Telephone:
                            <input type="tel" name="telephone" onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="panel-footer">
                    <Link to="login">
                        <button className="btn back-btn">Logout</button>
                    </Link>
                    <Link onClick={this.handleSubmit} to="list_chefs">
                        <button className="btn next-btn">Submit</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Customize;