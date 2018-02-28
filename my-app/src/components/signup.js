import React, { Component } from 'react';

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
    }

    handleSubmit(event) {
        for (var key in event.target) {
            
        }

        for (var key in this.state) {
            if (this.state[key] === '') {
                alert('Please completely fill out your form');
                event.preventDefault();
                return false;
            }
        }

        fetch('login', {
            method: 'GET',
            body: ''
        });
    }

    render() {
        return (
            <div className="outer-panel">
            <div className="panel-body">
                <h2 className="title">Sign up</h2>
                <div className="input-fields">
                    <form id="signup_form" onSubmit={this.handleSubmit}>
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
                                <input type="text" name="email"/>
                        </div>
                        <div className="radio-input">
                                <input id="customer" value="customer" type="radio" name="login_type" onChange={this.handleChange}/>
                                Customer
                                <input id="chef" value="chef" type="radio" name="login_type" onChange={this.handleChange}/>
                                Chef
                        </div>
                    </form>
                </div>
            </div>
            <div className="panel-footer">
                    <button className="btn next-btn" type="submit" form="signup_form" value="sign up">Sign up</button>
            </div>
        </div>
        );
    }
}

export default Signup;