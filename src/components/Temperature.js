import React from 'react';

const Temperature = ({ state } ) => {
    if (!state.temperature) return null;

    return(
        
        <div>
            <p>Temperature is {state.temperature} degrees {state.type}.</p>
        </div>
    )
}

export default Temperature;
