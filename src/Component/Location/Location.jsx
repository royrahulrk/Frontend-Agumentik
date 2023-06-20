import React from 'react'
import "./Location.css"
import Base from "../../img/Base.png"
import {MdLocationOn} from "react-icons/md"
import {BsFillHeartFill} from "react-icons/bs"
import {IoIosPeople} from "react-icons/io"
const Location = () => {
  return (
    <>
    <div className='location'>
        <h1>CARI TEMPAT WISATA</h1>
        <p className='heading'>🗺 • Cari Tempat Wisata Didekatmu</p>
        <p className='heading-data'>Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang sedang populer di <br /> daerah kamu dengan begitu kamu akan selalu update dan gak kudet lagi 👍🏻</p>
        <div className='base'>
          <img src={Base} alt="" />
        </div>
        <div className='decription'>
            <div><MdLocationOn className='dec-icon'/><span> <span style={{fontWeight:"800"}}>Populer di dekatmu <br /></span> <span >Tempat pariwisata yang populer <br /> dan pasti dikenal semua orang didekatmu</span></span></div>
            <div><BsFillHeartFill className='dec-icon'/><span><span style={{fontWeight:"800"}}>Favorit di dekatmu <br /></span> <span>Tempat favorit dan disukai semua <br />orang orang di sekitar daerah kamu </span></span></div>
            <div><IoIosPeople className='dec-icon'/><span><span style={{fontWeight:"800"}}>Ramai di didekatmu<br /></span> <span>Spot yang paling ramai dikunjungi <br />para warga sekaligus para wisatawan </span></span></div> 
        </div>
    </div>
     

    </>
  )
}

export default Location