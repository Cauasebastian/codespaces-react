import React from 'react';
import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const pessoas = [
    {nome:"caua", idade:19, profissao:"programador"},
    {nome:"raissa", idade:17, profissao:"estudante"},
    {nome:"Isa", idade:17, profissao:"estudante"},
    {nome:"Savia", idade:23, profissao:"empresaria"},
  ];

  return (
    <div className="App">
      <h1>Desafio 4</h1>
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.nome} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
      ))}
    </div>
  );
}

export default App;
