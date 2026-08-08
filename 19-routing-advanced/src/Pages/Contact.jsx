import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-10'>
        <Link className='text-bold' to='/Contact/Employee'>Employee</Link>
        <Link className='text-bold' to='/Contact/Head'>Head</Link>
      </div>
      


      <Outlet />
    </div>
  )
}

export default Contact
