import React from 'react';
import img from '../img/78809294.jpg';
import o from '../ProfileInfo.module.css';

export const PictureForProfile = () => {
  return  <div>
      <img className={o.img_profile}
           src={img}
           alt="sea"/>
  </div>
}