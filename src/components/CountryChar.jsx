import React from 'react'
import { useState, useEffect } from 'react';

const CountryChar = ({ country }) => {
  // const api_key = process.env.REACT_API_KEY;
  const [weather, setWeather] = useState(['hola']);



const localWeather = () => () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=2fd0d5bec943df89ba9d59bb9b035925`)
      .then(res => res.json())
      .then(json => setWeather(json))
    }
  // eslint-disable-next-line
  useEffect( localWeather , [country] )

  const languages = Object.values(country.languages)
  
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        Capital: {country.capital} <br />
        Area: {country.area}
      </p>
      <h3>Languages</h3>
      <ul>
        {languages.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`${country.name.common} flag`} style= {{height: '150px'}}  />
      
      <h1>Weather in {country.capital[0]}</h1>

      <p>
        Temperature {weather.main ? <span>{weather.main.temp}</span>: null } °C
      </p>

      <p>
        {weather.weather ? <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`Weather in ${country.capital[0]} `} /> : null} <br/>
        {weather.weather ? <span>{weather.weather[0].description}</span> : null}
      </p>
      <p>
        Wind {weather.wind ? <span>{weather.wind.speed}</span> : null } m/s
      </p> 
      

    </div>
  )
}

export default CountryChar

