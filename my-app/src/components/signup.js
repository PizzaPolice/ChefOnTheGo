import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            login_type: ''
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
                <h2 className="title">Sign up</h2>
                <div className="input-fields">
                    <div className="input-line">
                        Username:
                        <input type="text" name="username" onChange={this.handleChange}/>
                    </div>
                    <div className="input-line">
                        Password:
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-line">
                            Re-enter Password:
                            <input type="password" name="check_password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-line">
                            Email:
                            <input type="text" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="radio-input">
                            <label htmlFor="customer">Customer</label>
                            <input id="customer" value="customer" type="radio" name="login_type" onChange={this.handleChange}/>
                            <label htmlFor="chef">Chef</label>
                            <input id="chef" value="chef" type="radio" name="login_type" onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
            <div className="panel-footer">
                <Link onClick={this.handleSubmit} to="login">
                    <button className="btn next-btn">Sign up</button>
                </Link>
            </div>
        </div>
        );
    }
}

export default Signup;