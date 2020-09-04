import React from 'react';

const CityInfo = ({ state } ) => {
    if (!state.temperature) return null;

    return(
        
        <div>
            <h3>{state.city}</h3>
            <img className='image2' src={state.icon} />
            <p> Weather: {state.weather} </p>
            <p>Temperature is {state.temperature} degrees {state.type}.</p>
        </div>
    )
}

export default CityInfo;
