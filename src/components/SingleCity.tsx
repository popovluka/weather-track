import React from 'react';
import { City } from './CityWeatherList';



function SingleCity({ city }: { city: City }) {
    
    function onRemove(){
        console.log('clicked');
    }
  return (
    <tr>
        <td>{city.name}</td>
        <td>{city.temperature ? city.temperature + '°C': 'Nepoznat' }</td>
        <td>{city.humidity}</td>
        <td><button onClick={onRemove}>REMOVE</button></td>
    </tr>
  );
}

export default SingleCity;
