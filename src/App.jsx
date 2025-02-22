import React from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero'

const App = () => {
  return (
    <>
    <Routes>
      <Route 
        path="/" 
        element={
          <>
          <Nav />

          </>
        } 
      />
     

    </Routes>
  </>
  )
}

export default App