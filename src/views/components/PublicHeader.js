 
import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/header.css'
import Logo from '../../assets/images/logo.png'

const PublicHeader = () => {
	const handleLogoClick = () => {
		document.getElementById('home').click()
	}

	return (
		<>
			<div className="header">
				<img src={Logo} alt="Logo" onClick={handleLogoClick} />
				<nav id="navId">
					<Link to="/home">Home</Link>
					<Link to="/produtos">Produtos</Link>
					<Link to="/contato">Contato</Link>
					<Link to="/login-sistema">Sistema</Link>
				</nav>
			</div>
			<Link id="home" to="/" />
		</>
	)
}

export default PublicHeader