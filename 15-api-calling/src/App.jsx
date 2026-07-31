import axios from 'axios'

const App = () => {

//   Async await function mtlb jbtk wait kro tbtk ye url na chl jaye jiske aage await likha h async await hum islie use krte hai kyuki agr nhi karte to promise k form m data milta hai
// async function getData() {
//   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(response);
// }

// const getData=async()=>{
//   const response=await fetch('https://jsonplaceholder.typicode.com/todos');

//   const data=await response.json()
//   console.log(data);
// }

const getData = async()=> {
  const response= await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log(response.data);
  
}
 

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
