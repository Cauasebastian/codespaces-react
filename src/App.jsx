import React from 'react';
import './App.css';
import ManageData from './components/ManageData';  
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id:1, brand:"ferrari", color: "amarelo", newCar: true, km: 0},
    {id:2, brand:"lamborguini", color: "preto", newCar: false, km: 23123123123},
    {id:4, brand:"fusca", color: "azul", newCar: true, km: 0},
    {id:3, brand:"porshe", color: "branco", newCar: false, km: 1000},
    {id:5, brand:"bughatt", color: "verde", newCar: true, km: 0}
  ];

  return (
    <div className="App">
      <h1>Hello world</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName/>
      <CarDetails brand="sandero" km={1000} color="black" />
      {/* Loop em Array de objetos */ }
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
    </div>
  );
}

export default App;
