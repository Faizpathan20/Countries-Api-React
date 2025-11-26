import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Countrydetailsshimmer from './Countrydetailsshimmer'

export default function Countrydetail() {
  const { name } = useParams();

  const [countrydata, setCountrydata] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountrydata({
          name: data.name.common,
          nativename: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          TopLevelDomain: data.tld,
          Currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          Languages: Object.values(data.languages).join(", "),
          flagImage: data.flags.svg,
          borders: [],
        });
        data.borders.map((border)=>{
       fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json()).then(([borderCountryData]) => {
        setCountrydata((prevState) =>({...prevState,borders:[...prevState.borders,borderCountryData.name.common]}))         
       })

        })
      });
  }, [name]);
    
  
  return (
    <>
    
      {!Object.keys(countrydata).length?(<Countrydetailsshimmer/>):<div className="country-details-container">
        <span className="back-button">
          
       <Link to='/country'><i className="fa-solid fa-arrow-left"></i>&nbsp;Back</Link>
        </span>
        <div className="country-details">
          <img src={countrydata.flagImage} alt="flag" />
          <div className="details-text-container">
            <h1>{countrydata.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name:</b>
                <span className="native-name">{countrydata.nativename}</span>
              </p>
              <p>
                <b>Population:</b>
                <span className="population">{countrydata.population}</span>
              </p>
              <p>
                <b>Region:</b>
                <span className="region">{countrydata.name}</span>
              </p>
              <p>
                <b>Capital:</b>
                <span className="capital">{countrydata.capital}</span>
              </p>
              <p>
                <b>Sub Region:</b>
                <span className="sub-region">{countrydata.subregion}</span>
              </p>
              <p>
                <b>Top Level Domain:</b>
                <span className="top-level-domain">
                  {countrydata.TopLevelDomain}
                </span>
              </p>
              <p>
                <b>Currencies:</b>
                <span className="currencies">{countrydata.Currencies}</span>
              </p>
              <p>
                <b>Languages:</b>
                <span className="languages">{countrydata.Languages}</span>
              </p>
            </div>
            <div className="border-country">
              <h3>Border Countries:</h3>

              {countrydata.borders?.map((border) => (
                <Link to={`/country/${border}`}>{border}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}
