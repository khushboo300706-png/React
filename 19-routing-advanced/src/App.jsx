import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Employee from './Pages/Employee'
import Head from './Pages/Head'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'
import Navbar2 from './Components/Navbar2'




const App = () => {
  return (
    <div className='h-screen bg-black  text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CourseDetail />} />
            <Route path='/contact' element={<Contact />} >
            <Route path='Employee' element={<Employee />} />
            <Route path='Head' element={<Head />} />
            </Route>
            <Route path='*' element={<NotFound />} />
      </Routes>
    
      <Footer />
    </div>
  )
}

export default App
