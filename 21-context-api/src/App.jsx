import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {

const[theme,setTheme]=useState('light')

  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is Navbar</h2>
        <h2>bhot acha navbar</h2>
      </Navbar>
    </div>
  )
}

export default App
