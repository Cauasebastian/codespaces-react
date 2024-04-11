import React, { useState } from 'react';

function ConditionalRender() {
    const [x, setX] = useState(true);

    const handleSetXTrue = () => {
        setX(true);
    };

    const handleSetXFalse = () => {
        setX(false);
    };

    return (
        <div>
            <h1>Condição atual de x: {x ? 'Verdadeiro' : 'Falso'}</h1>
            <button onClick={handleSetXTrue}>Definir x como Verdadeiro</button>
            <button onClick={handleSetXFalse}>Definir x como Falso</button>
            <p>{x ? 'Se x for verdadeiro, sim' : 'Se x for falso, não'}</p>
        </div>
    );
}

export default ConditionalRender;
