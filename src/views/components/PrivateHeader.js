import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/header.css'
import Logo from '../../assets/images/logo.png'

const PrivateHeader = () => {
	const handleLogoClick = () => {
		document.getElementById('home').click()
  }
  
  const handleLogout = async () => {
    window.localStorage.setItem('isAuthenticated', false)
    document.getElementById('home').click()
	}

	return (
		<>
			<div className="header">
				<img src={Logo} alt="Logo" onClick={handleLogoClick} />
				<nav id="navId">
					<Link onClick={() => handleLogout()}>Sair</Link>
				</nav>
			</div>
      {/* eslint-disable-next-line */}
			<a id="home" href="/" />
		</>
	)
}

export default PrivateHeader