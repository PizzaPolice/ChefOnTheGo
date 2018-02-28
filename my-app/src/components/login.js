import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login_type: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        for (var key in this.state) {
            if (this.state[key] === '') {
                alert('Please completely fill out your form');
                return false;
            }
        }
        const data = new FormData(event.target);

        if (this.state.login_type === 'customer')
        {
            fetch('customize', {
                method: 'POST',
                body: data
            });
        }
        else if (this.state.login_type === 'chef')
        {
            fetch('inactive_chef', {
                method: 'POST',
                body: data
            });
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="outer-panel">
	            <div className="panel-body">
		            <h2 className="title">Login</h2>
		            <div className="input-fields">
			            <form id="login_form" onSubmit={this.handleSubmit}>
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
			            </form>
		            </div>
		            <form id="signup_form" method="GET" action="signup"></form>
	            </div>
                <div className="panel-footer">
                        <button className="btn back-btn" type="submit" form="signup_form" value="new user">New User?</button>
                        <button className="btn next-btn" type="submit" form="login_form" value="login">Login</button>
                </div>
            </div>
        );
    }
}
export default Login;