import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PrivateHeader from '../views/components/PrivateHeader'
import AdminHome from '../views/pages/AdminHome'

const PrivateAreaRouter = () => {
  return (
    <>
      <PrivateHeader />
      <Switch>
        <Route exact path="/admin/home" component={ AdminHome } />
        <Route path="*" render={() => <Redirect push to="/admin/home" /> } />
      </Switch>
    </>
  )
}

export default PrivateAreaRouter