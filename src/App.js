import React from 'react'
import './App.css' 
import Home from './Components/Home/Home'
import Booking from "./Components/Booking/Booking"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Consult from './Components/Consult/Consult'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Profile from './Components/Profile/Profile'
import Library from './Components/Library/Library'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/consult' element={<Consult/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App