import React from 'react';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  return ( 
  <div>
    <div onClick={onClose}>x</div>
    <h3>{name}</h3>
    <h3>Max    Min</h3>
    <h3>{max} {min}</h3>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
  </div>
  )
};