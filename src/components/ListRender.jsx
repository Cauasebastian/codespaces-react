import React, { useState } from 'react';

function ListRender() {
    // Defina o estado dos usuários
    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 224323424324, name: "Pedro", age: 31 },
        { id: 23342432232, name: "Josias", age: 31 },
    ]);

    // Função para excluir um usuário aleatório
    const deleteRandom = () => {
        // Gere um número aleatório entre 0 e o comprimento da lista de usuários
        const randomNumber = Math.floor(Math.random() * users.length);
        // Filtrar a lista de usuários excluindo o usuário com o índice aleatório
        const updatedUsers = users.filter((_, index) => index !== randomNumber);
        // Atualize o estado dos usuários
        setUsers(updatedUsers);
    }

    return (
        <div>
            <ul>
                {/* Renderize a lista de usuários */}
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            {/* Botão para excluir um usuário aleatório */}
            <button onClick={deleteRandom}>Delete</button>
        </div>
    )
}

export default ListRender;
