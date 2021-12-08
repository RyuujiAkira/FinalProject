import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
const ListingsCard = (props) => {
  return (
    <div>
      <Col xs={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.movie.img} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>{props.movie.description}</Card.Text>
            <Button variant="primary" id="listingTimeBTN">
              16:30
            </Button>
            <br></br>
            <br></br>
            <Button variant="primary" id="listingTimeBTN">
              17:45
            </Button>
            <br></br>
            <br></br>
            <Button variant="primary" id="listingTimeBTN">
              18:00
            </Button>
            <br></br>
            <br></br>
            <Button variant="primary" id="listingTimeBTN">
              19:00
            </Button>
            <br></br>
            <br></br>
            <Button variant="primary" id="listingTimeBTN">
              21:30
            </Button>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </Col>
    </div>
  );
};

export default ListingsCard;
