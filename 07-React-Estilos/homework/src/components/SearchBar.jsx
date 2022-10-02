import React from 'react';
import s from  './Search.module.css';


export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  
  <div className={s.contenedor}>
     
     <input placeholder='Ciudad...'/>
     <button onClick={onSearch}>Agregar</button>
  </div>
  )
};