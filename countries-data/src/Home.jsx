import { useState } from 'react'
import './App.css'
import Header from './Header'
import Search from './Search'
import Selectmenu from '../Selectmenu'
import Countrieslist from './Countrieslist'
import { useOutlet, useOutletContext } from 'react-router'

export default function Home() {
    const [query,setQuery]=useState('');
  return (
    <div>
       <main>
      <div className="search-filter-container">
    <Search setQuery={setQuery}/>
    <Selectmenu/>

    </div>
    <Countrieslist query={query}/>
    </main>
    </div>
  )
}
