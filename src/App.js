import logo from './logo.svg';
import './App.css';
import Description from './component/Description/Description';
import Name from './component/Name/Name';
import Image from './component/Image/Image';
import Price from './component/Price/Price';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let FirstName="Slim";
  return (
    <>
    <Card style={{ width: '18rem' }} className='Cardd'>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
         <Description/>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><Price/></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Shop Now</Card.Link>
        <Card.Link href="#">Go Back</Card.Link>
      </Card.Body>
    </Card>
    <h1>Hello <span>{FirstName}</span></h1>
    </>
  );
}

export default App;
