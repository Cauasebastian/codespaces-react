// components 
import { useState } from 'react';
import './App.css';
import ManageData from './components/ManageData';  
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App;
