import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} img="https://plus.unsplash.com/premium_photo-1781039804399-8dc5be8d19bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <Card user='Sarthak' age={21} img='https://images.unsplash.com/photo-1780764895105-ea3037466236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'/>
         <Card user='Sarthak' age={21} img=' https://images.unsplash.com/photo-1779406859387-5d6fd116b3ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
