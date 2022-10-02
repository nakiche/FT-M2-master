import React from 'react';
import Card from './Card.jsx';
import s from  './Cards.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  console.log('esto es s:', s);
  return (
  
      <div className={s.contenedor}>
        {
          cities.map(ciudad => 
          <Card 
           max={ciudad.main.temp_max}
           min={ciudad.main.temp_min}
           name={ciudad.name}
           img={ciudad.weather[0].icon}
           onClose={() => alert(ciudad.name)}

          />
        )  
        }       
      </div>

    ) 
};