import React from 'react'

import PrivateAreaRouter from './PrivateAreaRouter'
import PublicAreaRouter from './PublicAreaRouter'

const MainRouter = () => {
  const isAuthenticated = false

  return isAuthenticated ? <PrivateAreaRouter /> : <PublicAreaRouter />
}

export default MainRouter