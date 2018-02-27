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
        Object.keys(this.state.items).map(function (key) {
            var value = this.state.items[key]
            if (value === '') {
                alert('Please fill out the login form');
                event.preventDefault();
                return;
            }
        });
        
        if (this.state.login_type === 'customer')
        {
            
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }


    render(){
        return (
            <div className="outer-panel">
	            <div className="panel-body">
		            <h2 className="title">Login</h2>
		            <div className="input-fields">
			            <form id="login_form" method ="POST" onSubmit={this.handleSubmit}>
					        <div className="input-line">
						        Username:
						        <input type="text" name="name" onChange={this.handleChange}/>
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
		            <form id="signup_form" method="GET" action="signup.html"></form>
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