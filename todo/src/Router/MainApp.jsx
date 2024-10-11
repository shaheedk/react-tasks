import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Nav from './Nav'
import HomePage from './HomePage'
import Loginp from './Loginp'
import Register from './Register'

export default function MainApp() {
  return (
    <div>
        <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      <Route path='login' element={<Loginp/>}/>
     <Route path='rgister' element={<Register/>}/>
      </Routes>
    </div>
  )
}
