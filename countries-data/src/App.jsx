import { useState } from 'react'
import './App.css'
import Home from './Home'
// import Contact from './Contact'
import Header from './Header'
import Error from './Error'
import { Routes,Route,Link, Outlet } from 'react-router'
import Countrydetail from './Countrydetail'
  


function App(){
  
 
  return(
    <>
 
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/country/:name" element={<Countrydetail/>}/>
      </Routes>

    </>
  )
}
export default App
