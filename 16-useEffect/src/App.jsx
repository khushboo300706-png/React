import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

const[a,setA]=useState(0)
const[b,setB]=useState(0)

function aChanging(){
  console.log('A ki value change hogi');
}

function bChanging(){
  console.log('B ki value change hogi ');
  
}

useEffect(function(){
  aChanging()
  console.log('A ho chuka hai');
  
},[a])
useEffect(function(){
 bChanging()
 console.log('B ho chuka hai');
 
},[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>change B</button>
    </div>
  )
}

export default App
