import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Grid, Typography, Button } from '@material-ui/core';

import '../../assets/css/adminLogin.css'

const AdminLogin = () => {
	return (
		<div className="form">
			<Typography variant="h6" color="primary" className="loginTitle">login para administração</Typography>
				<TextField 
					className="textfield"
					label="e-mail" 
					variant="outlined"
					color="secondary"
					required
				/>
				<TextField 
					className="textfield"
					label="senha" 
					variant="outlined"
					color="secondary"
					required
				/>
			<Button variant="contained" color="primary">login</Button>
		</div>
	)
}

export default AdminLogin