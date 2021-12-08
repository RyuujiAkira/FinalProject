import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import ListingsCard from "./components/ListingsCard";
const Listings = () => {
  //   makes api calls and maps them out to the card component
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:6969/watchAll")
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  console.log(movies);

  if (error) {
    return (
      <h1>
        Something isn't working, Error message is {error.message}, Please try to
        reload the page
      </h1>
    );
  } else {
    let banana = (
      <div id="listingsBody">
        <Container>
          <Row>
            {movies.map((movie) => (
              <ListingsCard movie={movie} />
            ))}
          </Row>
        </Container>
      </div>
    );
    console.log(banana);
    return banana;
  }
};

export default Listings;
