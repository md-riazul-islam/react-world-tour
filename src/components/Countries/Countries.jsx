import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCounties]  = useState([]);
    const[visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlag, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCounties(data))
    },[])
  
    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountries)
    }
    
    const handleVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlag, flags];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div >
          <div>
            <h3>Visited countries {visitedCountry.length}</h3>
            <ul>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
          </div>

          <div className="flags-container">
                {
                    visitedFlag.map(flags => <img key={flags.cca3} src={flags.flags.png}></img>)
                }
          </div>
        <div className="country-container">
            {
                countries.map(country =>  <Country 
                    country={country}
                    key={country.cca3}
                     handleVisitedCountry={handleVisitedCountry}
                     handleVisitedFlags= {handleVisitedFlags}
                     ></Country>)
            }
            
        </div>
           
        </div>
    );
};

export default Countries;