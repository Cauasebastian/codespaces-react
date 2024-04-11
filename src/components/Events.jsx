import React, { useState } from 'react';

const Events = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const handleClick = () => {
        console.log('Button clicked');
        setNumberOfClicks(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Events Component</h1>
            <button onClick={handleClick}>Click Me</button>
            <p>Number of Clicks: {numberOfClicks}</p>
        </div>
    );
};

export default Events;
