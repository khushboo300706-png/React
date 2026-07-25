import React, { useState } from 'react'

const App = () => {

  const[title,settitle]=useState('')

const submitHandler=(f)=>{
  f.preventDefault()
  console.log('Form submitted by',title);
  settitle('')
  
}
  
  return (
    <div>
      <form onSubmit={(f)=>{
        submitHandler(f)
      }}> 
        <input type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(f)=>{
          settitle(f.target.value);
          
        }}/>
      
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
