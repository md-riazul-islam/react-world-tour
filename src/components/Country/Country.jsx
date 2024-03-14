
import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const{name, flags, population, area} = country;
    const[visited, setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited ? 'visited' : 'visite'}`}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area : {area}</p>
            <button type="button" onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={()=>handleVisitedFlags(country)}>Add Flags</button><br />
            <button type="button" onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'I have visited thin country' : 'I wont to visite' }</p>
        </div>
    );
};

export default Country;