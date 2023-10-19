import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Front from './Front'
import Login from './Login'
import Signup from './Signup'
import Mainpage from './Mainpage'
import Renting from './Renting'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />} /> 
          <Route path='/home/:firstName' element={<Homepage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/cars' element={<Mainpage/>} />
          <Route path="/rent/:id" element={<Renting/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
