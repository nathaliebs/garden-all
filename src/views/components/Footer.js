import React from 'react'
import { Link } from 'react-router-dom'
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';

import '../../assets/css/footer.css'
import Folha from '../../assets/images/folha.png'

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={Folha} alt="Folha" />
        <nav className="navId">
          <div className="navInfo">
            <p className="title">Contato</p>
            <div className="info">
              <BusinessRoundedIcon />
              <p className="content">
                Rua das Oliveiras, 16<br/> CEP: 785784-340 - São Paulo, SP
              </p>
            </div>
            <div className="info">
              <PhoneInTalkRoundedIcon />
              <p className="content">(11) 4002-8922</p>
            </div>
            <div className="info">
              <PhoneIphoneRoundedIcon />
              <p className="content">(11) 9334-1234</p>
            </div>
            <div className="info">
              <DraftsRoundedIcon />
              <p className="content">contato@garden.com.vc</p>
            </div>
          </div>
          <div className="navInfo">
            <p className="title">Nossa história</p>
            <Link to="/produtos" className="content link">Sobre a empresa</Link>
            <Link to="/produtos" className="content link">Missão e Valores</Link>
          </div>
          <div className="navInfo">
            <p className="title">Ajuda</p>
            <Link to="/produtos" className="content link">Tire dúvidas</Link>
            <Link to="/produtos" className="content link">Termos e Políticas</Link>
            <Link to="/produtos" className="content link">Entregas</Link>
            <Link to="/produtos" className="content link">Pagamento</Link>
          </div>
        </nav>
      </div>
      <Link id="home" to="/" />
    </>
  )
}

export default Footer