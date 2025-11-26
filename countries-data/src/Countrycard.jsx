import React from "react";
import Countrieslist from "./Countrieslist";
import { Link } from "react-router";
export default function Countrycard({name ,flag,capital,population,region}) {
  return (
   <>
    <Link className="country-card" to={`/country/${name}`}>
      <img src={flag} alt="Barbados flag" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b>{population}
        </p>
        <p>
          <b>Region:</b>{region}
        </p>
        <p>
          <b>Capital:</b>{capital?.[0]}
        </p>
        
      </div>

    </Link>
           

  </>
  );
}
