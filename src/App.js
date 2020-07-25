import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './views/components/Header'
import Footer from './views/components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;