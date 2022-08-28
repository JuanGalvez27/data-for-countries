import React from 'react'
import { useState, useEffect } from 'react';

const CountryChar = ({ country }) => {
  // const api_key = process.env.REACT_API_KEY;
  const [weather, setWeather] = useState([])
  
  const weatherMap = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=2fd0d5bec943df89ba9d59bb9b035925`)
      .then(res => res.json())
      .then(json => setWeather(json))
  }
  // eslint-disable-next-line
  useEffect(weatherMap, [country.capital[0]] )

  const temperature = (parseFloat(weather.main.temp) - 273.15).toFixed(2)
  const wind = weather.wind.speed;


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
          <li>{e}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`${country.name.common} flag`} style= {{height: '150px'}}  />
      
      <h1>Weather in {country.capital[0]}</h1>

      <p>
        Temperature {temperature}
      </p>

      <p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`Weather in ${country.capital[0]} `} />
      </p>
      <p>
        Wind {wind} m/s
      </p>
      

    </div>
  )
}

export default CountryChar

