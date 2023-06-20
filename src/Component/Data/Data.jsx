import React from 'react'
import "./Data.css"
import Banner from "../../img/Group 592 2.png"
import { BsPlayCircle } from "react-icons/bs";
import Axon from "../../img/image 27.png"
import Jet from "../../img/image 28.png"
import Expedia from "../../img/image 29.png"
import Quants from "../../img/image 30.png"
import Ait from "../../img/image 31.png"

const Data = () => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <h1>✈ • Explore the wonderful indonesia!</h1>
          <div>
            <span className="liburan">
              Liburan & nikmati <br />
            </span>
            <span className="tempat">tempat baru </span>{" "}
            <span className="indonesia">
              di <br /> indonesia
            </span>
          </div>
          <div className="extra">
            Destinize membuat kamu selalu update terkait tempat liburan <br />{" "}
            baru di Indonesia dengan mengikuti perkembangan para <br />{" "}
            influencer di sosial media ✨
          </div>
          <div className="button">
            <button className="btn">Mulai sekarang →</button>
            <span className="putar">
              <BsPlayCircle style={{ fontSize: "35px", color: "#4475F2" }} />
              Putar Demo
            </span>
          </div>
        </div>
        <div className="main-right">
          <img src={Banner} alt="" className="banner-img" />
        </div>
      </div>
      <div className='airlines'>
        <img src= {Axon } alt="" />
        <img src={Jet}  alt="" />
        <img src={Expedia}  alt="" />
        <img src={Quants}  alt="" />
        <img src={Ait}  alt="" />
      </div>
    </>
  );
}

export default Data