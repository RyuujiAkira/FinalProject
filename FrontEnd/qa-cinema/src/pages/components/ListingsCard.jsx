import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";

const ListingsCard = (props) => {
  return (
    <div>
      <Col xs={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.movie.img} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
              {props.movie.description} <br></br>
              <strong> Cast : </strong>
              {props.movie.actors} <br></br> <strong>Director: </strong>
              {props.movie.director}
              <br />
              <strong>
                Showing times: <br />
                16:30 <br></br> 18:00 <br /> 19:30 <br /> 21:00
              </strong>
            </Card.Text>
            <Button
              variant="primary"
              id="listingTimeBTN"
              as={Link}
              to={"/booking"}
            >
              Book Now
            </Button>
            <br></br>
            <br></br>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </Col>
    </div>
  );
};

export default ListingsCard;
