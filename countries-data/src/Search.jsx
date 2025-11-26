import React from 'react'

export default function Search({setQuery}) {
  return (
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass-location"></i>
        <input type="text" placeholder="Search for a country..." onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>
      </div>
  )
}
