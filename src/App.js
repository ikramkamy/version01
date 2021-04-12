
import './App.css';
import React from 'react'
import Shapes from './Component/Shapes';

import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from './Component/Presentation';
import Servives from './Component/Services';
import Produits from './Component/Produits';
import Conatct from './Component/Contact';
import { useState,useEffect } from 'react';
import SimpleMediaQuery from './Component/Responsive';


function App() {
const [tabprod, setTabprod]=useState([]);

const GetData=()=>{
fetch("products.json",{
headers:{
'Content-Type':'application/json',
'Accept':'application/json'
}
}).then( response => response.json())
useEffect(()=>{
GetData().then((data)=>{

setTabprod(data.products)
})
},[])

  }
  return (
    <div className="App">
     <Shapes/>
     <Presentation/>
     <Servives/>
     <Produits url="url"/>
     {tabprod.map((el)=>{})}
     <Conatct/>
    
    </div>
  );
}
export default App;
