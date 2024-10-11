import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

export default function Loginp() {
    const navigate=useNavigate()

   const handleSubmit=(event)=>{
    event.preventDefault()
    navigate('/regiter')
   }
  return (
    <div>
       <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}
