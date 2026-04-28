import React, { useState } from 'react'
import './App.css'
import Sample from './component/Sample'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")

  return (
    <>

      <Routes>
        <Route path="/" element={<><Navbar list={menu} /><HomePage /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sample" element={<><Sample /></>} />
      </Routes>
      
    </>
  )
}

export default App