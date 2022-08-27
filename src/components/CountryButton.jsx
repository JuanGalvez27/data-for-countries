import React from 'react'
import CountryChar from './CountryChar'
import { useState } from 'react'

const CountryButton = ({ filteredCountry }) => {
  const [showCountryChar, setShowCountryChar] = useState(false)

  const handleShowButton = () => {
    setShowCountryChar(current => !current);
  }

  return (
    <div>
      <li key={filteredCountry.name.common}>
        {filteredCountry.name.common}
        <button onClick={handleShowButton}>{showCountryChar ? 'Hide' : 'Show'}</button>
        {showCountryChar ? <CountryChar country={filteredCountry} /> : '' }
      </li>

    </div>
  )
}
// 

export default CountryButton