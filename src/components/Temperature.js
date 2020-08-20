import React from 'react';

const Temperature = ({ temperature }) => {
    if (!temperature) return null;

    return(
        console.log({temperature}),
        
        <div>
            <p>Temperature is {temperature} degrees celcius.</p>
        </div>
    )
}

export default Temperature;
