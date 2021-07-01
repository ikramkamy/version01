import React from 'react';
import './client.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import 'bootstrap/dist/css/bootstrap.min.css';
const Client =(props)=>{




    return(<div className="client">
<CardDeck>
<Card>
    <Card.Img variant="top" src=" " />
    <Card.Body>
      <Card.Title>Energie solaire PV</Card.Title>
      <button to=""><a href="solaire"></a>Découvrir</button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Go back to home pageo</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src=" " />
    <Card.Body>
      <Card.Title>Recyclages<br/><br/></Card.Title>
      <button to="">Découvrir</button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" href="/">Go back to home page</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src=" " />
    <Card.Body>
      <Card.Title>Efficacité Energitique</Card.Title>
      <button>Découvrir</button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted " >Go back to home page</small>
    </Card.Footer>
  </Card>
  </CardDeck>

    </div>)
}
export default Client;