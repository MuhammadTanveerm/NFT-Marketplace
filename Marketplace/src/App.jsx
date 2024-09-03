import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Topbar from './Components/Topbar'
import Footer from './Components/Footer'
import Signup from './Pages/Signup'



function App() {


  return (
    <>
    
      <Topbar/>
      <Routes>
    
        <Route path="/" element={<Homepage />}/>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} /> */}
          <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer/>
    
    </>
  )
}

export default App
