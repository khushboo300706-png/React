import React from 'react'
import { useContext } from 'react'
import { PostDataContext } from '../Context/ThemeContext'

const Nav2 = (props) => {
const data = useContext(PostDataContext)

  return (
    <div className='nav2'>
    <h4>Home</h4>     
    <h4>ABout</h4>      
    <h4>Contact</h4>
    <h4>{data}</h4>
   <h4>{props.theme}</h4>
    </div>
  )
}

export default Nav2
