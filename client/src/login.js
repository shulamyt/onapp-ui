import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		};
	};

	render() {
		return (
			<div>
				<label>Name:<input type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} /></label>
				<label>Password:<input type="text" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} /></label>
				<input type="button" value="Login" onClick={this.handleLogin.bind(this)}/>
			</div>
		);
	};

	handleChange(field, event) {
		let obj = {};
		obj[field] = event.target.value;
		this.setState(obj);
	};

	handleLogin(event) {
		console.log('A name was submitted: ' + this.state);
		this.props.history.push('/setupList');
	};
}

export default Login;