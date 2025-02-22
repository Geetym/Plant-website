import React from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Blog from './component/Blog'

const App = () => {
  return (
    <>
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Nav />
            <Hero />
            <Blog />

          </>
        } 
      />
     

    </Routes>
  </>
  )
}

export default App