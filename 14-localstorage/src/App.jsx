import React from 'react'

const App = () => {
// localstorage me set krne k lie and use krne k lie getitem and remove krne k lie removeitem
// localStorage.setItem('user','khushboo')




  const user={
    username:'khushboo',
    age:21,
    city:'safidon'
  }
   
  // object se string m covert k lie JSON stringify use krte h
  localStorage.setItem('user',JSON.stringify(user))

// string se vps object m jane k lie json parse ka use krte h
  const usera=JSON.parse(localStorage.getItem('user'))
  
  console.log(usera);
  
  return (
    <div>
      appppp
    </div>
  )
}

export default App
