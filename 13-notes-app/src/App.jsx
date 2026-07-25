import { useState } from 'react'

const App = () => {
  const[title,setTitle]=useState('')
  const[details,setDetails]=useState('')
  const[task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    
    
    
    
    setTitle('')
    setDetails('')
  }

const deleteNote=(idx)=>{
  const copyTask=[...task];
  copyTask.splice(idx,1)
  setTask(copyTask)
  
  
}

  return (
    <div className='h-screen w-full bg-black text-white lg:flex  '>

    
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col  items-start p-10 '>

         <h1 className='text-4xl font-bold'>Add Notes</h1>

          {/* PEHLA INPUT */}
        <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          
        }}
         />

         {/* DETAILED INPUT */}
        <textarea 
        type="text" 
        className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row  border-2 outline-none rounded'
        placeholder='Enter Details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button 
        className='bg-white w-full font-medium active:bg-gray-400 scale-95 text-black outline-none px-5 py-2 '>
          Add Note
          </button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2 flex-wrap bg-black p-10'>
      <h1 className='text-4xl  font-bold'>Recent Notes</h1>
      <div className='flex justify-start items-start gap-5 h-[90%] mt-5 flex-wrap overflow-auto'>
        {task.map(function(elem,idx){
          return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 py-6 px-4 bg-cover rounded-2xl text-black p-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprLtbfR7pNrP2llW86CO0bQzI8hcYame5ipuIVdOp_Q&s=10')]">

            <div>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
           </div>
           <button onClick={()=>{
            deleteNote(idx)
           }} className='w-full py-1 text-xs cursor-point active:scale-95 rounded-2xl font-bold bg-red-400 text-white' >Delete</button>
          </div>
        })}
      
       </div>
      </div>
    </div>
  )
}

export default App
