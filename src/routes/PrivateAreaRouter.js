import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import PrivateHeader from '../views/pages/PrivateHeader'
import Home from '../views/pages/Home'

const PrivateAreaRouter = () => {
  return (
    <>
      {/* <PrivateHeader /> */}
      <Switch>
        <Route exact path="/admin/home" component={ Home } />
        <Route path="*" render={() => <Redirect push to="/admin/home" /> } />
      </Switch>
    </>
  )
}

export default PrivateAreaRouter