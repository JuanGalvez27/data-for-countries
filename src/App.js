import {  useState, useEffect } from 'react'
import Filter from './components/Filter'
import FilteredCountries from './components/FilteredCountries'

function App() {
  const [country, setCountry] = useState ('');
  const [countries, setCountries] = useState ([]);
  
  const handleCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value.toLowerCase())
  }

  const world = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(json => setCountries(json))
    }

  useEffect(world, []);

  return (
    <div className="App">
      <Filter handleCountry={handleCountry} />
      <FilteredCountries countries={countries} countrySearch={country} />
    </div>
  );
}

export default App;
