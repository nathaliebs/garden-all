import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './views/components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
      </BrowserRouter>
    </>
  );
}

export default App;