import { Card, Figure, ListGroup, ListGroupItem } from "react-bootstrap";
import BingMap from "./components/BingMap";
import "../resources/css/FindUs.css";

const FindUs = () => {
  return (
    <div>
      <h1 id="title">
        This page is all about getting to QA cinema, you won't regret it!
      </h1>
      <div id="map">
        <BingMap />
      </div>
      <Card
        style={{ width: "35rem" }}
        variant="outlined"
        bg="secondary"
        id="card"
      >
        <Card.Img
          variant="top"
          src="https://content.fortune.com/wp-content/uploads/2015/02/145031081.jpg"
        />
        <Card.Body>
          <Card.Title>Address: </Card.Title>
          <Card.Text>
            <h3 id="cardText">
              1298 Long Road,
              <br /> Solihull,
              <br /> Birmingham,
              <br /> B94 7JH
            </h3>
          </Card.Text>
        </Card.Body>
        <Card.Title>
          <h3>Local busses to our QA cinema bus stop:</h3>
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <h3>94</h3>
          </ListGroupItem>
          <ListGroupItem>
            <h3>X62</h3>
          </ListGroupItem>
          <ListGroupItem>
            <h3>12</h3>
          </ListGroupItem>
        </ListGroup>
      </Card>
      {/* <Figure>
        <Figure.Image
          id="cinema"
          width={700}
          height={180}
          alt="cinema"
          src="https://content.fortune.com/wp-content/uploads/2015/02/145031081.jpg"
        />
        <Figure.Caption id="text">
          <h3>
            1298 Long Road
            <br /> Solihull
            <br /> Birmingham
            <br /> B94 7JH
          </h3>
          <br />
          <h3>Local busses to our QA cinema bus stop:</h3>
          <h3>94</h3>
          <h3>X62</h3>
          <h3>12</h3>
        </Figure.Caption>
      </Figure> */}
    </div>
  );
};

export default FindUs;
