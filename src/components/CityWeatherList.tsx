import React, { ReactElement } from 'react';
import SingleCity from './SingleCity';

export interface City {
    name : string,
    temperature?: number,
    humidity: string

}

export const allCities : City[] = [
    {   name : 'Beograd',
        temperature : 23,
        humidity: '63%'
    },
    {   name : 'Novi Sad',
        temperature : 35 ,
        humidity: '72%'
    },
    {   name : 'Zrenjanin',
        temperature : 19,
        humidity: '13%'
    },
    {   name : 'Pristina',
        temperature : 10,
        humidity: '24%'
    },
    {   name : 'Nis',
        humidity: '12%'
    },
    {   name : 'Subotica',
        temperature : 12,
        humidity: '55%'
    }
]
function onRemove (){
    const noviNiz = cities.filter((word) => word.name)

    console.log(' aidjakdajksd');
}


function CityWeatherList(): ReactElement {
  return (
    <div>
        <table>
            <tr>
                <th>Grad</th>
                <th>Temperatura</th>
                <th>Vlaznost vazduha</th>
                <th>DELETE</th>
            </tr>
            {allCities.map((city, index) => (
        <SingleCity key={index} city={city} onRemove={()=> onRemove(index)}/>
      ))}
        </table>
    </div>
  );
}

export default CityWeatherList;
