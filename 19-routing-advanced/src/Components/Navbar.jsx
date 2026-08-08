import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Deepy</h2>
      <div className='flex gap-10 '>
        <Link className='font-bold' to='/'>Home</Link>
        <Link className='font-bold'to='/About'>About</Link>
        <Link className='font-bold'to='/courses'>Courses</Link>
        <Link className='font-bold'to='/Contact'>Contact</Link>
        

      
      </div>
    </div>
  )
}

export default Navbar
