import React from 'react';
import s from  './Card.module.css';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  return ( 
  <div className={s.tarjeta}>
    {/*<div onClick={onClose}>x</div>*/}
    <div className={s.boton}>
    <button onClick={onClose}>x</button>
    </div>

    <h1>{name}</h1>
    
    <div className={s.container}>
      <div>
        <h2>Max</h2>
        <h3>{max}</h3> 
      </div>    
      
      <div>
        <h2>Min</h2>
        <h3>{min}</h3>
      </div>  
      
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
      </div>
    </div>
  
  </div>
  )
};