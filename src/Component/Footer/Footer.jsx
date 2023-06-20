import React from 'react'
import "./Footer.css"
import Logo from "../../img/icon-512 2.png"
const Footer = () => {
  return (
    <>
     
     <div className='footer'>
        <div className='footer-section'>
           <img src={Logo} alt="" />
           <p className='foot-hed'>Destinize</p>
           <p>Destinize adalah website atau layanan aplikasi yang membantu kamu memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’ agar lebih dikenal dan ramai  Baca Selengkapnya</p>
            <span>0851-5616-2840</span>
            <span>syaokay@gmail.com</span>
            <span>Ciamis, Jawa Barat. Indonesia</span>
            <span>+1-212-9876543</span>

        </div>
        <div className='footer-section1'>
            <p className='foot-hed'>Tentang</p>
            <span>Tentang Kami</span>
            <span>Blog</span>
            <span>Karir</span>
            <span>Pekerjaan</span>
            <span>Berita</span>
            <span>Galeri</span>
            <span>Afiliasi</span>
            
        </div>
        <div className='footer-section1'>
        <p className='foot-hed'>Support</p>
            <span>Tentang Kami</span>
            <span>Online Chat</span>
            <span>Whatsapp</span>
            <span>Telegram</span>
            <span>Tiket</span>
            <span>Call Center</span>
            <span>Bantuan</span>
        </div>
        <div className='footer-section1'>
        <p className='foot-hed' >FAQ</p>
            <span>Akun</span>
            <span>Organisir</span>
            <span>Order</span>
            <span>Pembayaran</span>
            <span>Pengembalian</span>
            <span>Copyright</span>
            <span>Copyright</span>

        </div>
     </div>
     <div className='bottam'>
        <div>© 2022-2023, All Rights Reserved</div>
        <div style={{display:"flex",gap:"50px"}}>
            <span>Tentang Kami</span>
            <span>Kontak</span>
            <span>Privasi & policy</span>
            <span>Sitemap</span>
            <span>Panduan Pengunaan</span>
        </div>
     </div>
    
    </>
  )
}

export default Footer