import React from "react";

const Challenge = () => {
    let var1 = 0;
    let var2 = 0;
    let resultado = 0;

    const handleVar1 = (e) => {
        var1 = parseInt(e.target.value);
    };

    const handleVar2 = (e) => {
        var2 = parseInt(e.target.value);
    };

    const handleSoma = () => {
        resultado = var1 + var2;
        console.log("Resultado da soma:", resultado);
    };

    return (
        <div>
            <input type="number" name="" id="" onChange={handleVar1} />
            <input type="number" name="" id="" onChange={handleVar2} />
            <p><button onClick={handleSoma}>Somar</button></p>
            <h1>Resultado : {resultado}</h1>
        </div>
    );
};

export default Challenge;
