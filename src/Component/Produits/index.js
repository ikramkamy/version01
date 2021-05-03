import useMediaQuery from '@material-ui/core/useMediaQuery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produit.css';
import {  useEffect, useState } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Produits (props) {
  const { t, i18n } = useTranslation();
  const matches = useMediaQuery('(min-width:1200px)');
  const [milk,setMilk ]=useState([]);
  //const {addlait}=props;
const getData=()=>
  fetch("products1.json", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json())
  useEffect(()=>{
    getData().then((data)=> {
      console.log(data); 
      setMilk(data.products1)
    })
    
    console.log(milk);
   },[])
const milfunc=()=>{milk.map((el)=>{<div >{el.name}</div>})}
  return (
    <div className="produit" id="id3" style={{ 
      backgroundImage: `url("/images/fond-01.jpg")` }}>
        <div className=" product-title" style={{color:"grey"}} >{t(`NOS PRODUITS.label`)}
        <div className="products-discreption">{t(`Tous nos produits sont classés selon le secteur d'activité.label`)} </div>
       
        </div>
        
<div className="org-product">
      <div className="liste-prod">
       <Link to="/lait" className="pro-item" style={{textDecoration:"none"}}><div className="pro-item"  >{t(`Lait.label`)}</div></Link> 
      <Link to="/jus" className="pro-item" style={{textDecoration:"none"}}><div className="pro-item" >{t(`Jus.label`)}</div></Link> 
      <Link to="/dattes" className="pro-item" style={{textDecoration:"none"}}> <div className="pro-item">{t(`Chocolat.label`)}</div>  </Link> 
       <Link to="/chocolat" className="pro-item" style={{textDecoration:"none"}}> <div className="pro-item"> {t(`Dattes.label`)}</div> </Link> 
       
</div>
    
    </div>
    </div>
  );
}
export default Produits;