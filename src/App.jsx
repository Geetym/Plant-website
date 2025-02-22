import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Hero from './component/Hero';



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
            
          </>
        } 
      />
     

    </Routes>
  </>
  )
}

export default App