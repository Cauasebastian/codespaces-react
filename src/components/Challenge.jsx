import React, { useState } from "react";

const Challenge = () => {
    const [var1, setVar1] = useState(0);
    const [var2, setVar2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const handleVar1 = (e) => {
        setVar1(parseInt(e.target.value));
    };

    const handleVar2 = (e) => {
        setVar2(parseInt(e.target.value));
    };

    const handleSoma = () => {
        const soma = var1 + var2;
        setResultado(soma);
    };

    return (
        <div>
            <input type="number" name="" id="" onChange={handleVar1} />
            <input type="number" name="" id="" onChange={handleVar2} />
            <p><button onClick={handleSoma}>Somar</button></p>
            <h1>Resultado: {resultado}</h1>
        </div>
    );
};

export default Challenge;
