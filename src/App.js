
import './App.css';
import React,{ Component, Suspense } from 'react'
import Navbar from './Component/Navbar';
import Content from './Component/Content';
import Client from './Component/Client';
import Solair from './Component/Solaire';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from './Component/Presentation';
import Servives from './Component/Services';
import  Undernav from './Component/Undernav/index';
import Produits from './Component/Produits';
import Conatct from './Component/Contact';
import { useState,useEffect } from 'react';
import SimpleMediaQuery from './Component/Responsive';
import Expos from './Component/Exposprod';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './i18n';
import LanguageSelector from './LanguageSelector';
import { Provider } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import{ Dialog} from "@material-ui/core";
import Fournisseurs from './Component/Fournisseurs';
document.title="0-1 Get clean energy";

function App(props) {
 
  const [products,setProducts]= useState([]);
  const [products1,setProducts1]= useState([]);
  const [products2,setProducts2]= useState([]);
  const [products3,setProducts3]= useState([]);
  const [cart,setCart]=useState([]);
  const[myarticles,setMyarticles]=useState([]);
  console.log("the cart length is ",cart.length)
  const [count, setCount]=useState(cart.length);
  //const theme = useTheme();
 // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
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

    const  getData1=()=>
  fetch("products1.json", {
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json())
  useEffect(()=>{
    getData1().then((data)=> {
      console.log(data); 
      setProducts1(data.product1s)
    })
    
   // console.log("products");
   },[])

   const  getData2=()=>
   fetch("products2.json", {
   headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     }
   }).then(response => response.json())
   useEffect(()=>{
     getData2().then((data)=> {
       console.log(data); 
       setProducts2(data.product2s)
     })
     
    // console.log("products");
    },[]) 
   
    const  getData3=()=>
    fetch("products3.json", {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
    useEffect(()=>{
      getData3().then((data)=> {
        console.log(data); 
        setProducts3(data.product3s)
      })
      
     // console.log("products");
     },[]) 
     const  getArticles=()=>
     fetch("articles.json", {
     headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }
     }).then(response => response.json())
     useEffect(()=>{
     getArticles().then((data)=> {
         console.log("get articles here on click",data); 
         setMyarticles(data.articles)
         console.log("articles are here",myarticles)
       })
       
      // console.log("products");
      },[])
  
  return (
    <div className="App">

<Router>



     <Suspense fallback={null}>
     <Navbar secteur="Filiéres" activity1="Client" activity2="Fournisseurs"/>
     <Undernav/>
     <Presentation/>
     
     <Servives/>
     <Produits url="url" getArticles={getArticles}/>
     
     
     <Switch>
       <Route path="/articles">
     <div className="organise-articl">
     {myarticles.map((el)=><Content title={el.title} text={el.text} suite={el.suite} url={el.url}/>)}
     </div>
     </Route>
        <Route path="/lait">
       
        <div className="exposing-prod">{products.map((el)=> <Expos name={el.name} namear={el.namear} namefr={el.nameeng} url={el.url}/>)}</div> 
          </Route>
          <Route path="/jus">
            
          <div className="exposing-prod"> {products1.map((el)=> <Expos name={el.name} namear={el.namear} namefr={el.nameeng} url={el.url}/>)} </div>
             </Route>

             <Route path="/dattes">
            
             <div className="exposing-prod"> {products2.map((el)=> <Expos name={el.name} namear={el.namear} namefr={el.nameeng} url={el.url}/>)}</div>
             </Route>
             <Route path="/chocolat">
            
             <div className="exposing-prod"> {products3.map((el)=> <Expos name={el.name} namear={el.namear} namefr={el.nameeng} url={el.url}/>)}</div>
          </Route>

          <Route exact path="/">
          <div className="exposing-prod">{products.map((el)=> <Expos name={el.name} namear={el.namear} namefr={el.nameeng} url={el.url}/>)}</div> 
          </Route>
</Switch>
</Suspense>
<Client/>
<Solair/>
<Footer/>
<Fournisseurs/>
</Router>
    </div>
  );
}
export default App;

