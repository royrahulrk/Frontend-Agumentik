import React from 'react'
import "./Favorite.css"
import img1 from "../../img/image 4.png"
import img2 from "../../img/Screen Shot 2020-02-14 at 4.36 1.png"
import img3 from "../../img/Screen Shot 2020-02-15 at 11.04 1.png"
import img4 from "../../img/Screen Shot 2020-02-15 at 11.10 1.png"
import img5 from "../../img/unsplash_1kdIG_258bU.jpg"
import Vector from "../../img/Vector.png"
import { BiLeaf } from "react-icons/bi";
import {BiPaperPlane } from "react-icons/bi";
import {FaRegNewspaper} from "react-icons/fa"
const Favorite = () => {
  return (
    <>
     <div style={{paddingTop:"3rem"}}>
        <h3>DESTINASI FAVORIT</h3>
        <h2>✈ • Temukan Destinasi Favoritmu</h2>
        <div className='all-img'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
     </div>
     <div className='reservasi'>
        <div className='reservasi-left'>
          <h3>RESERVASI TEMPAT</h3>
          <h2>Gak mau ngantri? <br /> reservasi aja! 🤙🏻</h2>
        
         <div className='reservasi-section'>
            <div className='icon-section'><span className='icon'>🔎</span><span className='icon-section-data'>Cari tempat yang kamu mau <span><br /> Temukan destinasi selanjutnya yang akan kamu <br /> kunjungi dengan Destinize</span></span></div>
            <div className='icon-section'><span className='icon'>✏</span><span className='icon-section-data'>Isi data dan konfirmasi pembayaran <span><br /> Tulis dan lengkapi data kamu untuk keperluan <br /> data booking</span></span></div>
            <div className='icon-section'><span className='icon'>😍</span><span className='icon-section-data'>Tulis dan lengkapi data kamu untuk keperluan data booking <span><br /> Kamu bisa langsung masuk dan enjoy liburan <br /> kamu tanpa hambatan</span></span></div>
         </div>
        
        </div>



        <div className='reservasi-right'>
            <div className='reservasi-right-section'> 
              <img src={img5} alt="" />
               <p className='heading'>Liburan ke Bali  🚗</p>
               <p className='heading1'>Liburan ke Bali  🚗  |  Liburan ke Bali  🚗</p>
               <p className='icon-re'><BiLeaf/> <FaRegNewspaper/><BiPaperPlane/></p>
               <p className='heading1' style={{marginLeft:"0"}}> <img src={Vector} alt="" />12 Orang pergi bersama</p>
              
            </div>
            

        </div>
        

     </div>
    </>
  )
}

export default Favorite