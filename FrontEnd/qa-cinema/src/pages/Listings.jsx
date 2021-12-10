import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import ListingsCard from "./components/ListingsCard";
import SearchBar from "./components/SearchBar";
const Listings = () => {
  //   makes api calls and maps them out to the card component
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/watchAll")
      .then((response) => {
        setMovies(response.data);
        setFiltered(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const updateQuery = (query) => {
    const filtered = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    setQuery(query);
    setFiltered(filtered);
  };
  console.log(query);
  console.log(filtered);
  if (error) {
    return (
      <h1>
        Something isn't working, Error message is {error.message}, Please try to
        reload the page
      </h1>
    );
  } else if (filtered !== movies) {
    let banana = (
      <div id="listingsBody">
        <SearchBar query={query} setQuery={updateQuery} />
        <Container>
          <Row>
            {filtered.map((movie) => (
              <ListingsCard movie={movie} />
            ))}
          </Row>
        </Container>
      </div>
    );
    return banana;
  } else {
    let banana = (
      <div id="listingsBody">
        <SearchBar query={query} setQuery={updateQuery} />
        <Container>
          <Row>
            {movies.map((movie) => (
              <ListingsCard movie={movie} />
            ))}
          </Row>
        </Container>
      </div>
    );
    return banana;
  }
};

export default Listings;
