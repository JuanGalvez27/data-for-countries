import React from 'react'
import { useEffect, useState } from 'react'
import CountryChar from './CountryChar'
import CountryButton from './CountryButton'

const FilteredCountries = ( { countries, countrySearch } ) => {
  const [filterdCountries, setFilteredCountries] = useState([])
  
  useEffect(() => {
    const results = countries.filter(country => (
      country.name.common.toLowerCase().includes(countrySearch)
      )
    )
    setFilteredCountries(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countrySearch])

  if(countrySearch === ''){
    return ''
  } else if(filterdCountries.length > 10){
    return 'Too much countries'
  } else if( filterdCountries.length <= 10 && filterdCountries.length > 1 ) {
    return(
      filterdCountries.map(e => 
        <CountryButton key={e.name.common} filteredCountry={e} />
    ))
  } else if(filterdCountries.length === 1) {
    return (
    <CountryChar country={filterdCountries[0]} />
    )
  } 
  else{
    return 'No match'
  }

}

export default FilteredCountries


