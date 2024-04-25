import React, { ReactElement, useState } from "react";

export interface City {
  name: string;
  temperature?: number;
  humidity: string;
  weatherCategory: string;
}

const weatherCategories: string[] = ["suncano", "oblacno", "kisovito", "sneg"];

const allCities: City[] = [
  {
    name: "Beograd",
    temperature: 23,
    humidity: "23%",
    weatherCategory: "suncano",
  },
  {
    name: "Novi Sad",
    temperature: 35,
    humidity: "2%",
    weatherCategory: "suncano",
  },
  {
    name: "Zrenjanin",
    temperature: 19,
    humidity: "83%",
    weatherCategory: "kisovito",
  },
  {
    name: "Pristina",
    temperature: 1,
    humidity: "24%",
    weatherCategory: "sneg",
  },
  { name: "Nis", humidity: "12%", weatherCategory: "oblacno" },
  {
    name: "Subotica",
    temperature: 12,
    humidity: "55%",
    weatherCategory: "kisovito",
  },
  {
    name: "Mali Zvornik",
    temperature: 11,
    humidity: "65%",
    weatherCategory: "sneg",
  }
];

function CityWeatherList(): ReactElement {
  const [cities, setCities] = useState(allCities);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<'temperature' | 'humidity' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); 

  function handleSort(sortType: 'temperature' | 'humidity'): void {
    setSortBy(sortType);
    setSortOrder(sortType === sortBy && sortOrder === 'asc' ? 'desc' : 'asc');
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value);
  }

  function onRemove(index: number): void {
    setCities(prevCities => {
      const newCities = [...prevCities];
      newCities.splice(index, 1);
      return newCities;
    });
  }

  function moveToTop(index: number): void {
    setCities(prevCities => {
      const newCities = [...prevCities];
      const movedCity = newCities.splice(index, 1)[0];
      newCities.unshift(movedCity);
      return newCities;
    });
  }

  function checkCitiesByCategory(category: string): void {
    const citiesWithCategory = cities.filter(
      (city) => city.weatherCategory === category
    );
    const cityNames = citiesWithCategory.map((city) => city.name).join(", ");
    alert(
      `Gradovi u kojima je ${category}: ${cityNames}`
    );
  }

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedCities = [...filteredCities];
  if (sortBy === 'temperature') {
    sortedCities.sort((a, b) => (a.temperature || 0) - (b.temperature || 0));
  } else if (sortBy === 'humidity') {
    sortedCities.sort((a, b) => Number(a.humidity.replace('%', '')) - Number(b.humidity.replace('%', '')));
  }
  if (sortOrder === 'desc') {
    sortedCities.reverse();
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
              <input
                type="text"
                placeholder="Pretrazi gradove:"
                value={searchTerm}
                onChange={handleSearch}
              />
            <td><button onClick={() => handleSort('temperature')}>Sortiraj po temperaturi</button></td>
            <td><button onClick={() => handleSort('humidity')}>Sortiraj po vlaznosti</button></td>
          </tr>
          <tr>{filteredCities.length === 0 && <th>Nema rezultata</th>}</tr>
          <tr>
            <th>Grad</th>
            <th>Temperatura</th>
            <th>Vlaznost vazduha</th>
            <th>Vremenski uslovi</th>
            <th>MOVE TO TOP</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {sortedCities.map((city, index) => (
            <tr key={index}>
              <td>{city.name}</td>
              <td>{city.temperature ? city.temperature + "°C" : "Nepoznat"}</td>
              <td>{city.humidity}</td>
              <td>{city.weatherCategory}</td>
              <td>
                <button onClick={() => moveToTop(index)}>MOVE</button>
              </td>
              <td>
                <button className="remove" onClick={() => onRemove(index)}>REMOVE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Kategorija vremenskih uslova</th>
            <th>Check cities</th>
          </tr>
        </thead>
        <tbody>
          {weatherCategories.map((category, index) => (
            <tr key={index}>
              <td>{category}</td>
              <td>
                <button onClick={() => checkCitiesByCategory(category)}>
                  CHECK
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CityWeatherList;
