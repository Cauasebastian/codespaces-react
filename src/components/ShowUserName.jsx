import React, { useState } from 'react';

function ShowUserName() {
    const [text, setText] = useState('');
    const [userName, setUserName] = useState('');

    const handleTextChange = (value) => {
        setText(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que o formulário recarregue a página

        // Atualiza o estado do nome de usuário com o valor do campo de texto
        setUserName(text);
    };

    return (
        <div>
            <h2>Show User Name</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="textInput">Texto:</label>
                <input
                    type="text"
                    id="textInput"
                    value={text}
                    onChange={(e) => handleTextChange(e.target.value)}
                />
                <br />
                <button type="submit">Mostrar Nome de Usuário</button>
            </form>
            {/* Exibe o nome de usuário */}
            {userName && <h1>Olá, {userName}</h1>}
        </div>
    );
}

export default ShowUserName;
