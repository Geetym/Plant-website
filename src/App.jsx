import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Hero from './component/Hero';
import Blog from './component/Blog';
import About from './component/About';
import WhyChooseUs from './component/WhyChooseUs';


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
            <WhyChooseUs /> 
            
          </>
        } 
      />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </>
  )
}

export default App