import React, { ReactElement, useState } from 'react';
import SingleCity from './SingleCity';

export interface City {
    name : string,
    temperature?: number,
    humidity: string

}


const allCities: City[] = [
    { name: 'Beograd', temperature: 23, humidity: '63%' },
    { name: 'Novi Sad', temperature: 35, humidity: '72%' },
    { name: 'Zrenjanin', temperature: 19, humidity: '13%' },
    { name: 'Pristina', temperature: 10, humidity: '24%' },
    { name: 'Nis', humidity: '12%' },
    { name: 'Subotica', temperature: 12, humidity: '55%' }
  ];
  
  function CityWeatherList(): ReactElement {
    const [cities, setCities] = useState(allCities);
  
    function onRemove(index: number): void {
      const newCities = [...cities];
      newCities.splice(index, 1);
      setCities(newCities);
    }
  
    function moveToTop(index: number): void {
      const newCities = [...cities];
      const movedCity = newCities.splice(index, 1)[0];
      newCities.unshift(movedCity);
      setCities(newCities);
    }
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Grad</th>
              <th>Temperatura</th>
              <th>Vlaznost vazduha</th>
              <th>MOVE TO TOP</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, index) => (
              <tr key={index}>
                <td>{city.name}</td>
                <td>{city.temperature ? city.temperature + "°C" : "Nepoznat"}</td>
                <td>{city.humidity}</td>
                <td>
                  <button onClick={() => moveToTop(index)}>MOVE</button>
                </td>
                <td>
                  <button onClick={() => onRemove(index)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CityWeatherList;

