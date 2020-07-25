import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PublicHeader from '../views/components/PublicHeader'
import Home from '../views/pages/Home'
import Products from '../views/pages/Products'
import Contact from '../views/pages/Contact'
import AdminLogin from '../views/pages/AdminLogin'

const PublicAreaRouter = () => {
  return (
    <>
      <PublicHeader />
      <Switch>
        <Route exact path="/home" component={ Home } />
        <Route exact path="/produtos" component={ Products } />
        <Route exact path="/contato" component={ Contact } />
        <Route exact path="/login-sistema" component={ AdminLogin } />
        <Route path="*" render={() => <Redirect push to="/home" /> } />
      </Switch>
    </>
  )
}

export default PublicAreaRouter