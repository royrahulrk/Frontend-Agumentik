import React from 'react'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import LogIn from './Component/LogIn/LogIn'
// import "./App.css"

const App = () => {
  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
    </>
  )
}

export default App