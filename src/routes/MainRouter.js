import React from 'react'

import PrivateAreaRouter from './PrivateAreaRouter'
import PublicAreaRouter from './PublicAreaRouter'

const MainRouter = () => {
  const isAuthenticated = window.localStorage.getItem('isAuthenticated')

  return isAuthenticated === 'true' ? <PrivateAreaRouter /> : <PublicAreaRouter />
}

export default MainRouter