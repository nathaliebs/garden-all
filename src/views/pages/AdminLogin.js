import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';

import "../../assets/css/admin-login.css";

const AdminLogin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0);
	}, []);

	const handleLogin = () => {
		window.localStorage.setItem('isAuthenticated', true)
	}


	return (
		<form onSubmit={() => handleLogin()} className="login-form">
			<Typography variant="h6" color="primary" className="loginTitle">login para administração</Typography>
			<TextField 
				className="textfield"
				label="e-mail" 
				variant="outlined"
				color="secondary"
				type="email"
				required
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<TextField 
				className="textfield"
				label="senha" 
				variant="outlined"
				color="secondary"
				type="password"
				required
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>
			<Button variant="contained" type="submit" color="primary">acessar</Button>
		</form>
	)
}

export default AdminLogin;
