import React, { useState } from 'react'

const App = () => {
  const[num,setNum]=useState({user:'khushboo' ,age:20})

  const[arr,setarr]=useState([10,20,30])
  const[a,seta]=useState(10)



const btnClicked=()=>{
  const newNum={...num};
  newNum.user='aryan'
  newNum.age=19
  setNum(newNum) 
}

const pusharr=()=>{
  const newarr=[...arr]
  newarr.push(99)
  setarr(newarr)
}

const changeA=()=>{
 seta(prev=>(prev+2))
}
  return (
    <div>
      <h1>{num.user}, {num.age} <br />the array is {arr}</h1>
      <button onClick={pusharr }>array</button>
      <button onClick={btnClicked}>click</button>
      <h1>the value of a is{a}</h1>
      <button onClick={changeA}>press a</button>
    </div>
  )
}

export default App
