import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='container'>
        <div><h1>Happy Cake</h1></div>
        <div className='navbar-right'>
            <p><NavLink className={({isActive})=> isActive ? 'activo' : ''} to="/">Home</NavLink></p>
            < hr/>
            <p><NavLink className={({isActive})=> isActive ? 'activo' : ''} to="contact">Contactos</NavLink></p> 
        </div>
       
    </div>
  )
}

export default Navbar
