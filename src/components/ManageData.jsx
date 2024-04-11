import React, { useState } from "react";

const ManageData = () => {
    const [number, setNumber] = useState(0);
    let someData = 0

    return (
        <div>
            <div>
                <p>Valor de someData: {someData}</p>
                <button onClick={() => (someData++ )}>Mudar Variavel</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(number + 1)}>Incrementar</button>
            </div>
        </div>
    );
};

export default ManageData;
