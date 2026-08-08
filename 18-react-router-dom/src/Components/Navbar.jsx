import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <h3>Diving</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/Product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
