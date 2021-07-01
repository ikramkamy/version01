import useMediaQuery from '@material-ui/core/useMediaQuery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produit.css';
import {  useEffect, useState } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Produits (props) {
  const {getArticles}=props;
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
    <div className="produit" id="#id3" style={{ 
      backgroundImage: `url("/images/fond-01.jpg")` }}>


{/*---------------------------------my cards-------------------------------------------*/ }
<CardDeck>
  <Card>
    <Card.Img variant="top" src="/images/3.jpg " />
    <Card.Body>
      <Card.Title>Energie solaire PV</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/images/2.jpg " />
    <Card.Body>
      <Card.Title><a href="https://ourworldindata.org/energy-access">besoins énergitique</a></Card.Title>
      <Card.Text>
      940 million (13% of the world) do not have access to electricity.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/images/1.jpg " />
    <Card.Body>
      <Card.Title>Eeffet environnemental</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
{/*----------------------------------------end of cards-----------------------------------*/}












        <div className=" product-title" style={{color:"grey"}} >PRODUITS
        <div className="products-discreption">{t(`Tous nos produits sont classés selon le secteur d'activité.label`)} </div>
       
        </div>
        

        <button ><a href="/articles">get articles</a></button>
  
    </div>
  );
}
export default Produits;