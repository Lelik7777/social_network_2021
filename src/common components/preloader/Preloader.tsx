import React from 'react';
import img from './img/preloader.gif';
import img2 from './img/1_CsJ05WEGfunYMLGfsT2sXA.gif'

export const Preloader = () => {
  const style={
    height:'15px',
    width:'70px',
  }
  return <span style={{margin:'0',padding:'0',backgroundColor:'white'}}>
    <img src={img2} alt="preloader" style={style}/>
  </span>
}