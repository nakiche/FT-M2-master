import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import data from './data.js';

function App() {
  const [cities, setCities] = useState([]); 

 function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };
    setCities(oldCities => [...oldCities, ciudadEjemplo]);
  }

return (
<div className="App">
      <div>
        <Nav onSearch={onSearch} />
      </div>

      <div>
        <Cards cities={data} />
      </div> 

      <div className="row">
        <Cards cities={data} />
      </div>  
          
 </div>
 );
}
export default App;


// export default function App() {
//   return (
//     <div className="App">
//       <div>
//         <Nav onSearch={onSearch} 
          
//         />
//       </div>

//       <div>
//         <Cards
//           cities={data}
//         />
//       </div> 

//       <div className="row">
//         <Cards
//           cities={data}
//         />
//       </div>  
          
//     </div>
//   );
// }
