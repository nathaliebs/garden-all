 
import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/header.css'
import Logo from '../../assets/images/logo.png'

function Header() {
    const handleLogoClick = () => {
        document.getElementById('home').click()
    }

    return (
        <>
            <div className="header">
                <img src={Logo} alt="Logo" onClick={handleLogoClick} />
                <nav id="navId">
                    <Link to="/">Home</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/">Contato</Link>
                </nav>
            </div>
            <Link id="home" to="/" />
        </>
    )
}

export default Header