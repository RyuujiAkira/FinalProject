import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import UpcomingCard from "./components/UpcomingCard";
import "../resources/css/upcoming.css";
const NewListings = () => {
  //   Have api calls in here?

  const [error, setError] = useState(null);

  const [array, setArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6969/watchAll")
      .then((response) => {
        setArray(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const filtered = array.filter((movie) => {
    const releaseDate = new Date(movie.releaseDate);
    console.log(releaseDate);
    return releaseDate >= Date.now();
  });

  console.log(array);

  console.log(filtered);
  return (
    <div>
      <h1 class="text-center" id="upcoming">
        UPCOMING
      </h1>
      <Container>
        <Row>
          {filtered.map((movie) => (
            <UpcomingCard movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default NewListings;
