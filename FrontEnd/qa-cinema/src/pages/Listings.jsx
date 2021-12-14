import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import ListingsCard from "./components/ListingsCard";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
const Listings = () => {
  //   makes api calls and maps them out to the card component
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(1);

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
      if (query === "") {
        return true;
      }
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    setQuery(query);
    setFiltered(filtered);
  };
  // trying pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentMovies = filtered.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(query);
  console.log(filtered);
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

        <h1 class = "bookingHead">Currently showing listings</h1>
        <SearchBar class="searchbar" id="ListingSearch" query={query} setQuery={updateQuery} />
        <br />
        <br />
        <Container>
          <Row>
            {currentMovies.map((movie) => (
              <ListingsCard movie={movie} />
            ))}
          </Row>
        </Container>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalMovies={filtered.length}
          paginate={paginate}
        />
      </div>
    );
    return banana;
  }
};

export default Listings;
