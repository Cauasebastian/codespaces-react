import React from 'react';

function UserDetails({ nome, idade, profissao }) {
  return (
    <div>
      <p>{nome} - {idade} anos - {profissao}</p>
      <p>{idade >= 18 ? 'Pode tirar carteira de motorista.' : 'Não pode tirar carteira de motorista.'}</p>
    </div>
  );
}

export default UserDetails;
