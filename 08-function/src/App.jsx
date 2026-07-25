import React from 'react'

const App = () => {

  
  return (
    <div>
       <h1>hello khushboo</h1>
       <button onClick={()=>{
        console.log('button is clicked');
        
       }}>change user</button>
       <button onClick={function(){
        console.log('hello guys ');
        
       }}>hello</button>
    </div>
  )
}

export default App
