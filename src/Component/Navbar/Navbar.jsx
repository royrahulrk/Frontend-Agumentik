import React,{useState} from 'react'
import { Link } from "react-router-dom";
import {CgMenu} from "react-icons/cg"
import { GiEarthAsiaOceania } from "react-icons/gi";
import LocationIcon from "../../img/Button.png"
import "./Navbar.css"
import Logo from "../../img/icon-512 2.png"
import Del from "../../img/Cart.png"
import User from "../../img/user.png"
const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>
      <div className="nav-box">
        <div className="head">
          {/* <span className='the'>The</span><span className='siren'>Siren</span> */}
          <div className='nav-content'>
            <img src={Logo} alt="logo" />
            <span style={{fontWeight:"700",fontSize:"18px"}}>Destinize</span>
          </div>

          <div className='nav-content'>
            <input type="text" placeholder='Cari apapun disini...'/>
          </div>
          <div className='nav-content'>
            <GiEarthAsiaOceania />

            <select className="select">
              <option value="1">Bahasa Indonesia</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='nav-content'>
            <img src={LocationIcon} alt="icon" />
            <div className='nav-content nav-content-col'>
              <span className='data'>Lokasi</span>
              <span className='data1'>Indonesia,Yogyakarta</span>
            </div>
          </div>
        </div>

        <hr className="navhr" />

        <div>
          <div>
            <div class="bg-light p-4">
              <center
                className={
                  isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
              >
                <ul type="none" className='ul'>
                  <li>
                    <Link className="li">Gunung</Link>
                  </li>
                  <li>
                    <Link className="li">Pantai</Link>
                  </li>
                  <li>
                    <Link className="li">Kuliner</Link>
                  </li>
                  <li>
                    <Link className="li">Outbond</Link>
                  </li>
                  <li>
                    <Link className="li">Sejarah</Link>
                  </li>
                  <li>
                    <Link className="li">Edukasi</Link>
                  </li>
                </ul>
                <ul type="none" className='ul1'>
                  <li>
                    <Link className="li"><img src={Del} alt="" /></Link>
                  </li>
                  <li>

                    <Link to={"/login"} className="li"><img src={User} alt="" /></Link>
                  </li>

                </ul>
              </center>
            </div>
          </div>
          <button
            id="toggler"
            type="button"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <CgMenu />
          </button>
        </div>

        
      </div>
    </>
  );
}

export default Navbar