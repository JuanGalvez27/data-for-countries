import React from 'react'

const Filter = ({ handleCountry }) => {
  return (
    <form onChange={handleCountry}>
      <label>Find countries </label>
      <input type='text' />     
    </form>
  )
}

export default Filter;