import React from 'react'

const CountryChar = ({ country }) => {

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
    </div>
  )
}

export default CountryChar

