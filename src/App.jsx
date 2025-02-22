import React from 'react'

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