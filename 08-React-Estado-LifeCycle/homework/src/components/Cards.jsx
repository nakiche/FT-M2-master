import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
   // console.log(cities)
    return (
      <div className='cards'>
        {cities.map(c => <Card
            // max={c.max}
            // min={c.min}
            // name={c.name}
            // img={c.img}
            //onClose={() => onClose(c.id)}
            max={c.main.temp_max}
            min={c.main.temp_min}
            name={c.name}
            img={c.weather[0].icon}
            onClose={() => alert(c.name)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
