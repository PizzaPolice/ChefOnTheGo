import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login_type: '',
            next_page: 'login'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        }, () => {
            if (this.state.login_type === 'customer')
            {
                this.setState({next_page: 'customize'});
            }
            else if (this.state.login_type === 'chef')
            {
                this.setState({next_page: 'inactive_chef'});
            }
            else {
                this.setState({next_page: 'login'});
            }
        });
    }

    render() {
        return (
            <div className="outer-panel">
	            <div className="panel-body">
		            <h2 className="title">Login</h2>
		            <div className="input-fields">
                        <div className="input-line">
                            Username:
                            <input type="text" name="username" onChange={this.handleChange}/>
                        </div>
                        <div className="input-line">
                            Password:
                            <input type="password" name="password" onChange={this.handleChange}/>
                        </div>
                        <div className="radio-input">
                            <label htmlFor="customer">Customer</label>
                            <input id="customer" type="radio" name="login_type" value="customer" 
                                        onChange={this.handleChange}/>
                            <label htmlFor="chef">Chef</label>
                            <input id="chef" type="radio" name="login_type" value="chef" 
                                        onChange={this.handleChange}/>
                        </div>
		            </div>
	            </div>
                <div className="panel-footer">
                    <Link to="signup">
                        <button className="btn back-btn">New User?</button>
                    </Link>
                    <Link onClick={this.handleSubmit} to={this.state.next_page}>
                        <button className="btn next-btn">Login</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Login;