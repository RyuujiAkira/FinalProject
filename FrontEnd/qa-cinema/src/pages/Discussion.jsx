import React from "react";
import "../resources/css/discussion.css";
import { Card, Row, Col, Dropdown, Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { DropdownButton } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";
import DiscussionCard from "./components/DiscussionCard";
import Pagination from "./components/Pagination";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Discussion = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);
  const [movieList, setMovieList] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  useEffect(() => {
    axios
      .get("http://localhost:6969/watchAll")
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        setError(error);
      });
    axios
      .get("http://localhost:6969/getAllComments")
      .then((response) => {
        setDiscussions(response.data);
        console.log(discussions);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentMovies = movieList.slice(indexOfFirstCard, indexOfLastCard);
  console.log(movieList);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="Discussion">
      <div className="container" id="container">
        <h1>Discussion</h1>
        <div className="row">
          <Row>
            {currentMovies.map((movie) => (
              <DiscussionCard movie={movie} discussion={discussions} />
            ))}
          </Row>
        </div>
      </div>
      <div style={styles.container}>
        <h2>Leave a review</h2>
      </div>
      <div className="forumtitle col">
        <h2>General Forum</h2>
      </div>
      <div className="forum">{/* old review here */}</div>
      <DiscussionCard
        movie={{
          _id: "general",
          title: "General",
          img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        discussion={discussions}
      />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalMovies={movieList.length}
        paginate={paginate}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 10,
  },
};
export default Discussion;
