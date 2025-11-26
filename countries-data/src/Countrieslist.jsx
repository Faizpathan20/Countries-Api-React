import React, { useEffect, useState } from 'react'
// import countriesdata from '../countriesdat'
import Countrycard from './Countrycard'
import Countrydetail from './Countrydetail';
import Countriesshimmereffect from './Countriesshimmereffect'

export default function Countrieslist({query}) {


const [countriesdata,setCountriesdata]=useState([]);
useEffect(()=>{
  databyfetch();

},[])


let databyfetch= async()=>{
  let url='https://restcountries.com/v3.1/all?fields=name,country,capital,currencies,flags,maps,population,languages,timezone,region'
  let response = await fetch(url)
  response= await response.json();
 setCountriesdata(response)
}

  return (
   <div>
   {!countriesdata.length?(<Countriesshimmereffect/>):(<div className='countries-container'>
     {
      countriesdata.filter((country)=>country.name.common.toLowerCase().includes(query)).map((country)=>(
  <Countrycard name={country.name.common} flag={country.flags.svg} capital={country.capital} population={country.population} region={country.region}/>
 ))
 }

    </div>)}
    </div>
  )
}
