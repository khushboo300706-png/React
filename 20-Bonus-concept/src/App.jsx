import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {

    const[Theme,setTheme]=useState('light')
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar theme={Theme} setTheme={setTheme} />
    </div>
  )
}

export default App
