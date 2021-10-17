import React, {useState} from "react";
import axios from "axios";

function Login(){
	const [loginData, setData] = useState({
		email: "",
		password: "", 
	});

	function handleChange(event) {
		const {name, value} = event.target;
		setData({
			...loginData, [name]: value, 
		});
	}

	function login(){
		axios.post("http://localhost:9000/login", 
			loginData).then(res => 
			alert(res.data.message));
	}

	return <div className="login">
	<div className="container1 height-login">
	<h1>USER LOGIN</h1>

	<div class="ui input">
	<input type="text" 
	placeholder="Enter Email" 
	name="email" 
	onChange={handleChange} 
	value={loginData.email}/>
	</div><br/>

	<div class="ui input">
	<input type="password" 
	placeholder="Enter password" 
	name="password" 
	onChange={handleChange} 
	value={loginData.password}/>
	</div><br/>

	<button className="login-button" onClick={login}>Submit</button>
	</div>    
	</div>
}

export default Login