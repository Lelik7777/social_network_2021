import React from 'react';
import img from './img/1476.gif'
export const Preloader2 = () => {

  return <div style={{position:'absolute',top:'45%',left:'45%'}}>
      <img src={img} alt="preloader"/>
  </div>
}