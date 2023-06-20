import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Data from './Component/Data/Data'
import Favorite from './Component/Favorite/Favorite'
import Location from './Component/Location/Location'
import Footer from './Component/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Data/>
    <Favorite/>
    <Location/>
    <Footer/>
    </>
  )
}

export default Home