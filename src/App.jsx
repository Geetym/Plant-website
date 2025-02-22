import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Hero from './component/Hero';
import Blog from './component/Blog';


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
      <Route path='/blog' element={<Blog />} />
      {/* <Route path='/about' element={<Aboi} */}
    </Routes>
  </>
  )
}

export default App