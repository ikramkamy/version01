
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
import Expos from './Component/Exposprod';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";


function App() {
  const [products,setProducts]= useState([]);
  const [cart,setCart]=useState([]);
  console.log("the cart legnth is ",cart.length)
  const [count, setCount]=useState(cart.length);
  /*
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
*/
const handleClick=()=>{setCount(cart.length)};
const getData=()=>
  fetch("products.json", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json())
  useEffect(()=>{
    getData().then((data)=> {
      console.log(data); 
      setProducts(data.products)
    })
    
   // console.log("products");
   },[])

   const addlait=(products)=>{
     console.log("we are in the add")
    {products.map((el)=> <Expos name={el.name} url={el.url}/>)}
   
    }
  
  return (
    <div className="App">

<Router>



     <Shapes/>
     <Presentation/>
     <Servives/>
     <Produits url="url" />
 
     
     <Switch>
          <Route path="/lait">
            
        <div className="exposing-prod">{products.map((el)=> <Expos name={el.name} url={el.url}/>)}</div> 
          </Route>
          <Route path="/jus">
            
          <div className="exposing-prod"> {products.map((el)=> <Expos name={el.name} url={el.url}/>)} </div>
             </Route>

             <Route path="/dattes">
            
             <div className="exposing-prod"> {products.map((el)=> <Expos name={el.name} url={el.url}/>)}</div>
             </Route>
             <Route path="/chocolat">
            
             <div className="exposing-prod"> {products.map((el)=> <Expos name={el.name} url={el.url}/>)}</div>
          </Route>

          <Route exact path="/">
         
          </Route>
</Switch>
     
     <Conatct/>



</Router>
    </div>
  );
}
export default App;
