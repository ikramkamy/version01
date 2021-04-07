
import './App.css';
import Shapes from './Component/Shapes';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from './Component/Presentation';
import Servives from './Component/Services';
import Produits from './Component/Produits';

function App() {
  return (
    <div className="App">
      <Shapes/>

     
     <Presentation/>
     <Servives/>
     <Produits/>


    </div>
  );
}
export default App;
