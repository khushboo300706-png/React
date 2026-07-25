import React, { useState, useSyncExternalStore } from 'react'

const App = () => {
const [a,seta] = useState(20)
const[username,setusername]=useState('khushboo')
const[users,setusers]=useState([10,20,30])
 


function changeA() {
  seta(30);
  setusername('aryan')
  setusers([40,50,60])
  
}

  return (
    <div>
      <h1>value of a is {a} <br />the name is {username} <br />array is {users }</h1>
      <button onClick={changeA}>click</button>
    </div>
  )
}

export default App
