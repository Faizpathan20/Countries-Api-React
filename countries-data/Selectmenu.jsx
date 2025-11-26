import React from 'react'

export default function Selectmenu() {
  return (
    <select name="" id="regionbyid" className="filter-by-region">
        <option value="filter" hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
  )
}
